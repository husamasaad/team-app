'use client'
import {PortableText} from '@portabletext/react'

const PostBody = ({ body }) => {

  

  return (
    <PortableText value={body} />
  )
}

export default PostBody