
import { groq } from 'next-sanity';
import { client, writeClient } from './lib/client';


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

export const getUsers = async () => {
  try {
    const user = await client.fetch(
      groq`*[_type == "users"]{
        _id,
        username,
        image,
        password,
        email
      }`
    );

    return user;
  } catch (error) {
    console.log(error);
  }
}

export const createUser = async (userBody) => {

  const users = await getUsers()
  let result;

  const exist =  users.find(user => {
    if (user.email == userBody.email) {
      result = 'email'
      return user
    }
    if (user.username == userBody.username) {
      result = 'username'
      return user
    }
  })

  if (exist) {
    return result
  } else {
    result = await writeClient.create({
      _type: "users",
      ...userBody
    })
  
    return result
  }

}
