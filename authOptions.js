import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import { getDb } from "./ttc_db";

export  const authOptions = {
    session:{
        jwt:true,
      },
      providers:[ 
          CredentialsProvider({
     
              async authorize(credentials){
                  const {email,password}  = credentials;
                  const username = email
                  console.log('the cred', credentials)
                  if(!username && !password){
                      throw new Error('Failed to login. Please Provide Valid Username and Password');
                  }
          
                  try{
                      const db = await getDb();
                      const user = await  db.query(`SELECT * FROM users WHERE username='${username}'`);
                      if(!user[0]){
                          throw new Error('No User Found');
                      }
                      const dbPass =  user[0][0].password;
                      const isMatch = await bcrypt.compare(password, dbPass);
                      if(!isMatch){
                          throw new Error('Incorrect Password.Please Try Agaim');
                      }            
                      return{
                          email:user[0][0].username,
                          isAuthenticate:true
                      }
                  }
                  catch(err){
                      throw new Error(`${err.message} the error`)
                  }
              }
          })
      ],
      callbacks: {
        // jwt:async({}) => {
        //     return 'hello'
        // },
        // session: async ({ session, user, token }) => {
        //     console.log(user,'the user')
        //     console.log(session,'the session')
        //     delete session.user.image
        //     delete session.user.name
        //     session.user.isAuthenticate = user.isAuthenticate
        //     if (user) {
        //         session.user = {
        //             email: user.email,
        //         };
        //     }
        //     console.log(session, 'the ssison from org next')
        //     return session;
        // },
        session: async ({ session, user }) => {

            if (user) {

                delete user.image;
                delete user.name;
        

                session.user.isAuthenticate = user.isAuthenticate;
                session.user.email = user.email; 
        
            }
            return session;
        },
    },
    pages:{
        signIn:'/admin/login',
    }
}