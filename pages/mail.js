const mail = () => {

}

export const getServerSideProps = async ({req,res}) => {
  

      return{
        redirect:{
          destination:'https://mail.zoho.eu',
          permanent:true,
        }
      }
  }

  export default mail
