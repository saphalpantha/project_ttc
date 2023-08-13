const mail = () => {

}

export const getServerSideProps = async ({req,res}) => {
  

      return{
        redirect:{
          destination:'https://s843.fra7.mysecurecloudhost.com:2096/',
          permanent:true,
        }
      }
  }

  export default mail