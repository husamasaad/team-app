
const comments = {
  name: 'comments',
  title: 'Comments',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'User Name',
      type: 'string',
    },
    {
      name: 'profilePic',
      title: 'Profile Pic',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
  ]
}


export default comments