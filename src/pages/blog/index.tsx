import React, { useState } from "react"

import BlogPost from "@/components/BlogPost"
import Col from "@/components/Col"
import CreateBlogPost from "@/components/CreateBlogPost"

import { BlogService } from "@/services/blog.service"

import { formatYYYYMMDD } from "@/utils/date"
import { blogCreationValidation, validateFormInput } from "@/utils/validator"

import { PostPayload } from "@/interfaces/posts"

export const getServerSideProps = async () => {
  const blogService = new BlogService(process.env.API_KEY)
  const res = await blogService.findAll()
  return {
    props: {
      posts: res.posts,
    },
  }
}

interface BlogPageProps {
  posts: PostPayload[]
}

const BlogPage = ({ posts }: BlogPageProps) => {
  const blogService = new BlogService()
  const [post, setPost] = useState(posts)
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    author: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string } | null>(null)

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget
    setNewPost((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setErrors(null)
    const payload = {
      ...newPost,
      dateCreated: formatYYYYMMDD(new Date()),
    }
    const formErrors = validateFormInput(payload, blogCreationValidation)
    console.log(formErrors)
    if (Object.values(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    const res = await blogService.createOneProxy(payload)
    if (res) {
      alert("Post created!")
      setNewPost({
        title: "",
        author: "",
        body: "",
      })
      const res = await blogService.findAllProxy()
      setPost(res.posts)
    }
  }

  return (
    <>
      <Col className="pt-24 pb-64 px-6 bg-black items-center">
        <Col className="md:w-4/5 lg:w-3/5 items-center">
          <Col className="my-24">
            <h1>Blog</h1>
          </Col>
          <CreateBlogPost
            title={newPost.title}
            body={newPost.body}
            author={newPost.author}
            inputHandler={inputHandler}
            submitHandler={submitHandler}
            errors={errors}
          />
          {post.map((item) => {
            return <BlogPost post={item} key={item._id} />
          })}
        </Col>
      </Col>
    </>
  )
}

export default BlogPage
