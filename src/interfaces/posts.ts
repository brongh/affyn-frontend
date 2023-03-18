export interface PostPayload {
  _id: string
  author: string
  body: string
  dateCreated: string
  title: string
}

export interface CreatePostPayload {
  author: string
  body: string
  dateCreated: string
  title: string
}
