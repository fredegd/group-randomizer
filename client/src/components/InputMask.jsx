import React from "react";
import { useForm } from "react-hook-form";

export default function InputMask({ groupName, setGroupName, members, setMembers }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const defaultGroupName = groupName || "";
  const defaultMembers = members ? members.join("\n") : "";

  const onSubmit = (data) => {
    const { members } = data;
    const memberArray = members
      .split(/\n|,|;|\./) // Split on newline, comma, semicolon, or dot
      .map((member) => member.trim()) // Trim each member
      .filter((member) => member !== ""); // Remove empty members

    setGroupName(data.groupName)
    setMembers(memberArray);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("groupName", { defaultValue: defaultGroupName })} />
        <textarea {...register("members", { defaultValue: defaultMembers })} rows="4" cols="50" />
        <input type="submit" />
      </form>
    </div>
  );
}
