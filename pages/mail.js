const mail = () => {

}

export const getServerSideProps = async ({req,res}) => {
  

      return{
        redirect:{
          destination:'https://s497.fra6.mysecurecloudhost.com:2096/',
          permanent:true,
        }
      }
  }

  export default mail