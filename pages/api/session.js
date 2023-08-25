import jwt from 'jsonwebtoken'

const handler = async (req,res) => {

  if(req.method === 'POST'){
    
  // const decoded_token =  jwt.verify(req.body.token, 'DqbXbAxbtPkSM5YgiiJtIr58B0QlkaEh')
  const decoded_token2 =  jwt.decode(req.body.token)
  console.log('----------------------------------------\n\n',decoded_token2)
  // console.log('----------------------------------------\n\n',decoded_token2)
  console.log('the token', req.body)
  console.log('----------------------------------------\n\n')
  res.status(200).json({msg:decoded_token2})
  res.status(200).json({msg:'data'})
  }
}

export default handler