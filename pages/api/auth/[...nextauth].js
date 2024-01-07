import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { getDb } from "../../../ttc_db";
import bcrypt from "bcryptjs";
import { authOptions } from "../../../authOptions";

export default function handler(req, res) {
  NextAuth(req, res, authOptions);
}
