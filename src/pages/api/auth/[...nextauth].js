import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import facebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import DiscordProvider from "next-auth/providers/discord";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import MongoDBClient from "@/Utils/MongoDBClient";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GIT_CI,
      clientSecret: process.env.GIT_SECRET,
    }),
    facebookProvider({
      clientId: process.env.FACEBOOK_CI,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CI,
      clientSecret: process.env.DISCORD_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CI,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CI,
      clientSecret: process.env.TWITTER_SECRET,
    }),

    // ...add more providers here
  ],
  adapter: MongoDBAdapter(MongoDBClient),
  callbacks: {
    session: async ({ session, user }) => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};
export default NextAuth(authOptions);
