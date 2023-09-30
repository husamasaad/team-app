import blockContent from './schemas/blockContent'
import comments from './schemas/comments'
import post from './schemas/post'
import users from './schemas/users'

export const schema = {
  types: [post, blockContent, users],
}
