import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const AddLinks = () => {
  const [linkTitle, setLinkTitle] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState("");
  const [linksData, setLinksData] = useState([]);
  const [deleting, setDeleting] = useState({ status: false, id: 0 });
  useEffect(() => {
    fetch("/api/custom-link")
      .then((res) => res.json())
      .then((data) => {
        setLinksData(data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const linkDeleteHandler = (item) => {
    setDeleting({ status: true, id: item.id });
    fetch(`/api/custom-link/delete/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setDeleting({ status: false, id: item.id });
        alert("Deleted Succeesfull");
      })
      .catch((err) => {
        setDeleting({ status: false, id: item.id });
        alert("Failed to delete");
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    setLoading(true);
    try {
      const response = await fetch("/api/custom-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ linkTitle: linkTitle, link: link }),
      });

      data = await response.json();
      console.log(data, "data");
      setLoading(false);
      alert(`${data.msg}`);
    } catch {
      setLoading(false);
      alert(`Failed !\n${data.msg}`);
    }
  };
  return (
    <div className="pl-[22%]  w-[100vw] py-14">
      <div className="">
        <form
          className="flex flex-col justify-center gap-5 px-20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center">
            <label>Link Title</label>
            <input
              onChange={(e) => setLinkTitle(e.target.value)}
              className="border-2 "
              type="text"
            ></input>
          </div>
          <div className="flex flex-col justify-center">
            <label>Link</label>
            <input
              onChange={(e) => setLink(e.target.value)}
              className="border-2 "
              type="text"
            ></input>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="border-2 border-[#201F54] px-6 py-2 w-fit"
          >
            {loading ? "Submitting" : "Submit"}
          </button>
        </form>

        {/* <div  dangerouslySetInnerHTML={{__html: dummy.msg.desc}} /> */}

        {/* {console.log(dummy.msg.desc)} */}
      </div>

      <section>
        <table className={`w-[85%] mt-[2rem] mx-auto`}>
          <tbody className="flex pt-[5rem] flex-col border-[2px]">
            <tr className="flex justify-between">
              <td className="flex-1">S.N</td>
              <td className="flex-1">Title</td>
              <td className="flex-1">Link</td>
              <td className="flex-1">Delete</td>
            </tr>
            {linksData?.map((i) => (
              <tr
                key={i.id}
                className="flex justify-between items-center justify-center py-[1rem]"
              >
                <td className="flex-1">{i.id}</td>
                <td className="flex-1">{i.link_title}</td>
                <td className="flex-1">{i.link}</td>
                <td
                  onClick={() => linkDeleteHandler(i)}
                  className="flex-1 rounded-3xl text-red-500 cursor-pointer "
                >
                  {"Delete"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AddLinks;
