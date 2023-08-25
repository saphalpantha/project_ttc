// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { getDb } from "../../../ttc_db";
// export const authOptions = {
//   pages: {
//     signIn: "/admin/login",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       // credentials: {
//       //     username: { label: "Username", type: "text", placeholder: "jsmith" },
//       //     password: { label: "Password", type: "password" }
//       // },
//       async authorize(credentials, req) {
//         const username = credentials.username;
//         const password = credentials.password;

//         if (!username && !password) {
//           throw new Error(
//             "Failed to login. Please Provide Valid Username and Password"
//           );
//         }

//         try {
//           const db = await getDb();

//           const user = await db.query(
//             `SELECT * FROM users WHERE username='${username}'`
//           );
//           if (!user[0]) {
//             throw new Error("No User Found");
//           }

//           const dbPass = user[0][0].password;

//           const isMatch = await bcrypt.compare(password, dbPass);
//           if (!isMatch) {
//             throw new Error("Incorrect Password.Please Try Agaim");
//           }
//           //   setCookie("user", true, { req, res, maxAge: 60 * 60 * 24 });
//           return { user: user[0][0].username, isLoggedIn: true };
//         } catch (err) {
//           throw new Error("Failed to connect to db");
//         }
//       },
//     }),
//   ],
// };

// export default NextAuth(authOptions);
