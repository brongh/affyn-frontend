import React from "react"
import Col from "./Col"

interface CreateBlogPostProps {
  inputHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  submitHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
  title: string
  body: string
  author: string
  errors: { [key: string]: string } | null
}

const CreateBlogPost = ({
  inputHandler,
  submitHandler,
  title,
  body,
  author,
  errors,
}: CreateBlogPostProps) => {
  return (
    <Col className="px-4 gap-y-3 mb-10 w-full md:w-4/5 lg:w-[650px]">
      <h1>Create a new blog post</h1>
      <Col>
        <label htmlFor="title">
          Title <span className="error">{errors ? errors["title"] : ""}</span>
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={inputHandler}
          className={`${errors?.["title"] ? "border-red-500 border-2" : ""} `}
        />
      </Col>
      <Col>
        <label htmlFor="author">
          Author <span className="error">{errors ? errors["author"] : ""}</span>
        </label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={inputHandler}
          className={`${errors?.["author"] ? "border-red-500 border-2" : ""} `}
        />
      </Col>
      <Col>
        <label htmlFor="body">
          Body <span className="error">{errors ? errors["body"] : ""}</span>
        </label>
        <textarea
          name="body"
          value={body}
          onChange={inputHandler}
          rows={6}
          className={`${errors?.["body"] ? "border-red-500 border-2" : ""} `}
        />
      </Col>
      <button
        onClick={submitHandler}
        className="border-[1px] border-white text-white mt-4 cursor-pointer active:bg-gray-500"
      >
        Create
      </button>
    </Col>
  )
}

export default CreateBlogPost
