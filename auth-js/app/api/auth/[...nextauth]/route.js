import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { getByEmail, verifyPassword } from "@/lib/users";

const handler = NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize({ email, password }) {
        const user = getByEmail(email);
        const isValid = await verifyPassword(user.password, password);
        console.log(typeof isValid);
        if (!user) {
          return null;
        }
        if (!isValid) {
          return null;
        }
        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
