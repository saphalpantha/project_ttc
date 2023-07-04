import { getDb } from "../../ttc_db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    // const {name} = req.query
    // console.log(name)
    const db = await getDb();
    db.query("SELECT * FROM admission_forms")
      .then((result) => {
        res.status(200).json({ msg: result[0] });
        db.destroy();
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ msg: "error fetching data" });
        db.destroy();
      });
    // db.query(`select * from users`).then(result => {
    //     res.status(200).json({msg:result[0]})
    // }).catch(err => console.log(err))
  }

  if (req.method === "POST") {

    console.log(req)
    const {
      faculty,
      grade,
      shift,
      nameinblock,
      nameindevanagari,
      dob_bs,
      dob_ad,
      gender,
      t_no,
      p_no,
      email,
      ward_no,
      vdc_mun,
      district,
      fathers_name,
      fathers_occupation,
      fathers_cellno,
      mothers_name,
      mothers_occupation,
      mothers_cellno,
      localgurdain_name,
      localgurdain_occupation,
      localgurdain_cellno,
      bus_faculty,
      bus_stop,
      nameofprevschool,
      sendUpGpa,
      see_cgpa,
      grade_div,
      sendup_eng,
      sendup_cmath,
      sendup_optmath,
      sendup_science,
      sendup_account,
      see_eng,
      see_cmath,
      see_optmath,
      see_science,
      see_account,
      photo,
      see_cc,
      see_tc,
      see_marksheet,
      hobby,
    } = req.body

    const hobby_string = hobby.join(' ').trim();

    console.log(hobby_string)
    const db = await getDb();
    db.query(
      `INSERT INTO admission_forms VALUES (NULL, '${faculty}', '${grade}', '${shift}', '${nameinblock}', '${nameindevanagari}', '${dob_bs}', '${dob_ad}', '${gender}', ${t_no}, ${p_no}, '${email}', ${ward_no}, '${vdc_mun}', '${district}', '${fathers_name}', '${fathers_cellno}', '${fathers_occupation}', '${mothers_name}', '${mothers_cellno}', '${mothers_occupation}', '${localgurdain_name}', '${localgurdain_occupation}', '${localgurdain_cellno}', '${bus_faculty}', '${bus_stop}', '${nameofprevschool}', ${sendUpGpa}, ${see_cgpa}, '${grade_div}', ${sendup_eng}, ${sendup_optmath}, ${sendup_science}, ${sendup_account}, ${see_eng}, ${see_cmath}, ${see_optmath}, ${see_science}, ${see_account}, '${hobby_string}', '', '', '', '', '${sendup_cmath}')`
    ).then(result => {
        res.status(200).json({msg:'form submitted successfully', data:result});
    }).catch(err => {
        console.log(err.message);
        res.status(400).json({msg:'form not submitted', data:err});
    })
  }
};

export default handler;


// db.query(
//   `INSERT INTO admission_forms VALUES ( NULL,  '${ faculty}', '${grade}, '${shift}', '${nameinblock}', '${nameindevanagari}', '${dob_bs}', '${dob_ad}', '${gender}', ${t_no}, ${p_no}, '${email}' ,  ${ward_no}, ${vdc_mun}, '${district}',  '${fathers_name}', '${fathers_cellno}', '${fathers_occupation}', '${mothers_name}' , '${mothers_cellno}', '${mothers_occupation}', '${localgurdain_name}', '${localgurdain_occupation}', '${localgurdain_cellno}',  '${bus_faculty}', '${bus_stop}', '${nameofprevschool}', ${sendUpGpa}, ${see_cgpa}, ${grade_div}, ${sendup_eng}, ${sendup_optmath}, ${sendup_science} , ${sendup_account}, ${see_eng}, ${see_cmath}, ${see_optmath}, ${see_science}, ${see_account},  '${hobby_string}' , '${''}' '${''}', '${''}', '${''}', '${sendup_cmath}')`
// )