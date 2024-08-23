import NextAuth from "next-auth";
const {
  NEXTAUTH_SECRET,
  TWITTER_ID,
  TWITTER_SECRET,
  GOOGLE_ID,
  GOOGLE_SECRET,
  GITHUB_ID,
  GITHUB_SECRET,
} = process.env;
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  secret: NEXTAUTH_SECRET,
  providers: [
    TwitterProvider({
      clientId: TWITTER_ID,
      clientSecret: TWITTER_SECRET,
    }),
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours

    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
    async encode() {},
    async decode() {},
  },
  callbacks: {
    signin: async (profile, account, metadata) => { 
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return Promise.resolve(true)
      } else {
        return Promise.resolve(false)
      }
    },
    session: async (session, token) => { 
      return Promise.resolve(session)
    },
    jwt: async (token, oAuthProfile) => {
      return Promise.resolve(token)
     }
  }
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
