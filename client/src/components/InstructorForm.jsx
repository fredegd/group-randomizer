import { signal, effect } from "@preact/signals-react";

import { useForm } from "react-hook-form";

const instructorName = signal("");

export default function BatchForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  effect(() => {
    console.log(instructorName.value);
  });

  const onInput = (event) => (instructorName.value = event.target.value);

  const onSubmit = (data) => {
    // createBatch(instructorName);
    // instructorName.value = "";
    console.log("submit", data);
    reset();
  };

  return (
    <form
      className="w-10/12 mt-6 flex max-w-md gap-x-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        onInput={onInput}
        {...register("instructorName")}
        id="instructorName"
        name="instructorName"
        required
        className="min-w-0   flex-auto rounded-md border-0 bg-white/50 px-3.5 py-2 shadow-sm ring-2 ring-pink-500 ring-inset focus:outline-none focus:ring-pink-800  sm:text-sm sm:leading-6"
        placeholder="InstructorName"
      />
    </form>
  );
}
