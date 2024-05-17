import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { type NextAuthConfig } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import prisma from './lib/prisma';
import { Adapter } from 'next-auth/adapters';



export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ]
}



export const {  signIn, signOut, auth, handlers } = NextAuth( authConfig );