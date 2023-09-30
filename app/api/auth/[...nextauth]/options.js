
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUsers } from '@/sanity/actions'

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "email",
          type: 'text',
          placeholder: "Your Email is: "
        },
        password: {
          label: "Password:",
          type: 'password',
          placeholder: "Your password is: "
        },
      },
      async authorize(credentials) {
        const users = await getUsers()
        const user = users?.find(user => (credentials?.email === user.email && credentials?.password === user.password));

        if(user) {
          return user
        } else {
          return null
        }
      },
    })
  ],
  pages: {
    signIn: "/auth/signIn",
    newUser: '/auth/signUp'
  },
  async redirect({ baseUrl, url }) {
    const redirectUrl = decodeURIComponent(url);
    const callbackIndex = redirectUrl.indexOf('callbackUrl=');
    if (callbackIndex > -1) {
        const callbackPath = redirectUrl.slice(callbackIndex + 12);
        // If I try to login from my homepage, the nested callbackUrl contains the full baseUrl.
        // This behavior seems to be triggerd if you call `signIn()` from a page.
        return callbackPath.includes(baseUrl) ? callbackPath : baseUrl + callbackPath;
    }
    return url;
},
}