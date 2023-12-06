import { useState } from "react";
import { useForm } from "react-hook-form";
import { CommandLineIcon } from "@heroicons/react/24/solid";

export default function BatchForm() {
  const [batchName, setBatchName] = useState(
    localStorage.getItem("batchName")
      ? JSON.parse(localStorage.getItem("batchName"))
      : ""
  );
  console.log("rendering BatchForm");

  console.log("batchName: ", JSON.parse(localStorage.getItem("batchName")));

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setBatchName(data.batchName);
    console.log("submit", data);
    localStorage.setItem("batchName", JSON.stringify(data.batchName));
  };
  return (
    <div className="flex items-center mt-6">
      <CommandLineIcon className="h-8 w-8 text-blue-500" />

      <form
        className="w-10/12 flex  max-w-md gap-x-4 relative"
        onSubmit={handleSubmit(onSubmit)}
        onChange={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          id="batchName"
          name="batchName"
          {...register("batchName")}
          required
          className="bg-transparent
        hover:bg-blue-400 focus:bg-blue-400
        
        peer h-10 w-full 
        placeholder-shown:border-b-2
        placeholder-shown:border-gray-300
        px-3
        text-3xl text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
          placeholder="Batch Name"
          defaultValue={batchName}
        />
        <label
          htmlFor="batchName"
          className="px-3 absolute left-0 -top-4 text-gray-600 text-sm transition-all 
        peer-placeholder-shown:text-lg
        peer-placeholder-shown:text-gray-600 
        peer-placeholder-shown:top-1.5 
        peer-focus:-top-4
        peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Batch:
        </label>
      </form>
    </div>
  );
}
