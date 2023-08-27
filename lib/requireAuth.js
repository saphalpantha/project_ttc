import { getSession } from "next-auth/react"

export const requireAuth = async (ctx,cb) => {
    const session = await getSession({req:ctx.req});
    if(!session){
        return{
            redirect:{
                destination:'/admin/login',
                permanent:false,
            },
        }
    }
    return cb({session})
}