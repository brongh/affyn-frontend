import React from "react"
import Col from "./Col"
import { PostPayload } from "@/interfaces/posts"
import Row from "./Row"
import { formatDate } from "@/utils/date"

interface BlogPostProps {
  post: PostPayload
}

const BlogPost = ({ post }: BlogPostProps) => {
  const { author, body, dateCreated, title } = post
  return (
    <Col className="gap-y-2 border-y-[1px] border-white px-2 py-4 m-4 w-full">
      <Col className="gap-y-1 border-b-[1px] border-gray-400 pb-4">
        <h4 className="order">{title}</h4>
        <Row className="justify-between">
          <h4 className="text-xs text-gray-300">{author}</h4>
          <h4 className="text-xs text-gray-300">{formatDate(dateCreated)}</h4>
        </Row>
      </Col>
      <h4 className="py-2">{body}</h4>
    </Col>
  )
}

export default BlogPost
