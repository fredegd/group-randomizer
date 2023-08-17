import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function InputMask({ title, members, setTokenValue, pastGroups }) {
  // console.log(title, members);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const memberArray = data.members
      .split(/\n|,|;|\./) // Split on newline, comma, semicolon, or dot
      .map((member) => member.trim()) // Trim each member
      .filter((member) => member !== ""); // Remove empty members

    axios
      .post(
        "http://localhost:3010/api/create/group",
        { title: data.title, members: memberArray, pastGroups:pastGroups },
        { withCredentials: true }
      )
      .then((response) => {
        setTokenValue(response.data);
         console.log(response.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column", gap:"2rem"}}>
        <input
          defaultValue={title}
          {...register("title", { required: true })}
        />
        <textarea
          defaultValue={members}
          {...register("members", { required: true })}
          rows="4"
          cols="40"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
