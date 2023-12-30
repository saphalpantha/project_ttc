const mail = () => {

}

export const getServerSideProps = async ({req,res}) => {
  

      return{
        redirect:{
          destination:'https://accounts.zoho.in/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/zohomail-pricing.html&serviceurl=https://mail.zoho.in',
          permanent:true,
        }
      }
  }

  export default mail
