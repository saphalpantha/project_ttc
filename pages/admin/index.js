import { requireAuth } from "../../lib/requireAuth";


export default  () => {}

export const getServerSideProps = async (ctx) => {
  return requireAuth(ctx,({session}) => {
    if(session){
      return {
        redirect:{
          destination:'/admin/dashboard',
          permanent:false,
        }
      }
    }
  })
};
