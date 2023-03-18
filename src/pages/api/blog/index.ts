import { BlogService } from "@/services/blog.service"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const blogService = new BlogService(process.env.API_KEY)
  if (req.method === "POST") {
    const response = await blogService.createOne(req.body)
    res.status(200).json(response)
  } else if (req.method === "GET") {
    const response = await blogService.findAll()
    res.status(200).json(response)
  }
}
