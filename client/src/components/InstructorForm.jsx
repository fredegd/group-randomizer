import { useState } from "react";

import { useForm } from "react-hook-form";

import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

export default function BatchForm() {
  const [instructorName, setInstructorName] = useState(
    localStorage.getItem("instructorName")
      ? JSON.parse(localStorage.getItem("instructorName"))
      : ""
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setInstructorName((prev) => data.instructorName);
    console.log("submit", data);
    localStorage.setItem("instructorName", JSON.stringify(data.instructorName));
  };

  return (
    <div className="flex items-center mt-6">
      <ComputerDesktopIcon className="h-8 w-8 text-blue-500" />
      <form
        className="w-10/12 flex flex-col max-w-md gap-x-4 relative "
        onSubmit={handleSubmit(onSubmit)}
        onChange={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          id="instructorName"
          name="instructorName"
          {...register("instructorName")}
          required
          className="bg-transparent
        hover:bg-blue-400 focus:bg-blue-400
        peer h-10 w-full 
        placeholder-shown:border-b-2
        placeholder-shown:border-gray-300
        px-3
        text-2xl text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
          placeholder="instructorName"
          defaultValue={instructorName}
        />
        <label
          htmlFor="instructorName"
          className="px-3 absolute left-0 -top-4 text-gray-600 text-sm transition-all 
        peer-placeholder-shown:text-lg
        peer-placeholder-shown:text-gray-600 
        peer-placeholder-shown:top-1.5 
        peer-focus:-top-4
        peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Instructor:
        </label>
      </form>
    </div>
  );
}
