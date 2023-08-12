import  {React} from 'react'


const handler = async (req,res) => {
    if(req.method === 'PUT'){
        console.log('trigged')
        const admission_open = req;
        console.log(admission_open,'from admission status')
        //  const db = await getDb();
    // db.query(`UPDATE admission_status set admission_open=${admission_open}=${admission_open}`).then(result => {
    //   res.status(200).json({msg:'Admission Status Updated'});
    // }).catch(err => {
    //   console.log(err)
    //   res.status(404).json({msg:'Failed to delete '});
    //   db.end();Image
    // })
    }
}

export default handler