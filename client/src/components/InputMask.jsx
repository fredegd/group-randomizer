import { signal } from "@preact/signals-react";
import { useForm } from "react-hook-form"; 

export default function InputMask() {
  console.log("rendering InputMask")
  // const [batch, setBatch] = useState({});
  // const [members, setMembers] = useState([]);
  // const [instructor, setInstructor] = useState("");
  // const [projects, setProjects] = useState([]);

  const instructor = signal("");
  const members = signal([]);
  const projects = signal([]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const addMember = () => {
    const member = watch("member");
    console.log(member)
    const prev = members.value
    members.value = [...prev, member]
    console.log(members.value);
  };

  const addProject = () => {
    const project = watch("project");
    projects.value = (prev) => [...prev, project];
    console.log(project);
  };

  return (
    <form
      className="w-full flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
     

      <div className="w-10/12 flex">
        <input
          type="text"
          placeholder="member"
          className="w-10/12 my-3"
          {...register("member")}
        />
        <div className="w-2/12 my-3" onClick={addMember}>
          +
        </div>
      </div>

      <div className="w-10/12 flex">
        <input
          type="text"
          placeholder="project"
          className="w-10/12 my-3"
          {...register("project")}
        />
        <div className="w-2/12 my-3" onClick={addProject}>
          +
        </div>
      </div>
      <button className="w-10/12 my-3 border" type="submit">
        submit
      </button>
    </form>
  );
}
