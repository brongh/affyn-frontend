import { CreatePostPayload } from "@/interfaces/posts"
import axios from "axios"

export class BlogService {
  private readonly apiKey
  private readonly baseUrl =
    "https://44zx10bwsj.execute-api.us-west-1.amazonaws.com/dev/api/v1/blog"

  constructor(apiKey?: string) {
    if (apiKey) {
      this.apiKey = apiKey
    }
  }

  async findAll() {
    const res = await axios.get(this.baseUrl, {
      headers: {
        "x-api-key": this.apiKey,
      },
    })
    return res.data
  }

  async findAllProxy() {
    const res = await axios.get("/api/blog")
    return res.data
  }

  async createOne(payload: CreatePostPayload) {
    const res = await axios.post(this.baseUrl, payload, {
      headers: {
        "x-api-key": this.apiKey,
      },
    })
    return res.data
  }

  async createOneProxy(payload: CreatePostPayload) {
    const res = await axios.post("/api/blog", payload)
    return res.data
  }
}
