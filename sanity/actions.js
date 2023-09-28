
import { groq } from 'next-sanity';
import { client } from './lib/client';


export const getPosts = async () => {
  try {
    const post = await client.fetch(
      groq`*[_type == "post"]{
        _id,
        title,
        slug,
        author,
        "profileImage": profileImage.asset->url,
        "image": mainImage.asset->url,
        publishedAt,
        summary,
        body,
        comments
      }`
    );

    return post;
  } catch (error) {
    console.log(error);
  }
}
