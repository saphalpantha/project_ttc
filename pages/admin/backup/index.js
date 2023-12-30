// import React, { useEffect, useState } from "react";
// import { requireAuth } from "../../../lib/requireAuth";
// import Link from "next/link";
// import { useRouter } from "next/router";
// const backup = () => {
//   const [loading, setLoading] = useState(false);
//   const [isBackupsLoading, setIsBackupsLoading] = useState(true);
//   const [allBackups, setAllBackups] = useState([]);
//   const router = useRouter();
//   useEffect(() => {
   
//     getAllBackups();
//   }, [allBackups.length]);

//   const getAllBackups = async () => {
//     try {
//       const resposne = await fetch("/api/backup/get-backup");
//       const resposneData = await resposne.json();
//       setIsBackupsLoading(false);
//       if (resposneData) {
//         setAllBackups(resposneData.msg)
//         return;
//       }
//     } catch (err) {
//       setIsBackupsLoading(false);
//       return;
//     }
//   };

//   let alert_msg;
//   const backupHandler = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("/api/backup/");
//       const responseData = await response.json();
//       setLoading(false);
//       if (responseData) {
//         alert_msg = responseData.msg;
//       }
//     } catch (err) {
//       setLoading(false);
//       alert_msg = err.msg;
//     } finally {
      
//       alert(alert_msg);
//       router.reload()
//     }
//   };

//   return (
//     <div className="pl-[22%] bg-[#F0F0F0]  space-y-4  w-[100vw] py-10">
//       <button
//         className="bg-white px-3 active:bg-white active:scale-105   shadow-md active:shadow-sm  active:text-white active:bg-[#201F54]  transition-all duration-150 ease-in py-2 rounded-3xl shadow-md"
//         onClick={backupHandler}
//       >
//         {!loading ? "Generate Backups" : "Generating Backup..."}
//       </button>

//       <ul className="flex pt-[5rem] justify-center items-center  flex-col gap-4">
//         <h1 className="font-semibold py-2 text-xl">All Backups</h1>
//         {Array.isArray(allBackups) && allBackups.length > 0 ? (
//           allBackups.map((i) => (
//             <div className="grid grid-cols-2 w-[55%] mx-auto " key={i}>
//               <li className="underline   uppercase text-justify">{i}</li>
//               <Link href={`/backups/${i}`}>
//                 <span className="bg-[#201F54] transition-all duration-150 ease-out hover:bg-[#101220] text-white w-fit font-semibold text-[1rem] px-2 py-1 rounded-md">
//                   Download
//                 </span>
//               </Link>
//             </div>
//           ))
//         ) : (
//           <p>No backups available.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default backup;

// export const getServerSideProps = async (ctx) => {
//   return requireAuth(ctx, ({ session }) => {
//     return {
//       props: { session },
//     };
//   });
// };



  const index = () => {
    return;
}

export default index