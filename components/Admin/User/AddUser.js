import React, { useState } from "react";

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res_data = await response.json();
      setLoading(false);
      if (response.ok) {
        alert(`${res_data.msg}`);
      }
    } catch (err) {
      setLoading(false);
      alert("Failed to add user");
      console.log(err);
    }
  };

  return (
    <div className="pl-[22%]  w-[100vw] py-14">
      <form
        className="flex flex-col justify-center gap-5 px-20"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col justify-center">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 "
            type="text"
          ></input>
        </div>
        <div className="flex flex-col justify-center">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 "
            type="password"
          ></input>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            disabled={loading}
            className="border-2 border-[#201F54] px-6 py-2 w-fit"
          >
            {loading ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
