import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"

export default function InputMask({ title, setTitle, members, setMembers }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const defaultTitle = title || "";
  const defaultMembers = members ? members.join("\n") : "";

  const onSubmit = (data) => {
    const { members, title } = data;
    const memberArray = members.split(/\n|,|;|\./) // Split on newline, comma, semicolon, or dot
                               .map((member) => member.trim()) // Trim each member
                               .filter((member) => member !== ""); // Remove empty members

    setTitle(data.title);
    setMembers(memberArray);

    axios.post("http://localhost:3010/api/create/group", {title, members:memberArray}, { withCredentials: true })
    .then((response)=>{
      const tokenValue = response.data
      console.log(tokenValue)
    })
    .catch((err)=>console.error(err))

    reset();

  };


   

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { defaultValue: defaultTitle })} />
        <textarea
          {...register("members", { defaultValue: defaultMembers })}
          rows="4"
          cols="50"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
