
import { useState } from "react";
import ProjectForm from "./ProjectForm";
import ProjectCard from "./ProjectCard";
import { useAppState } from "../context/AppStateContext";

export default function ProjectsList() {
  const { batch, setBatch } = useAppState();
  const projects = batch.projects;
  const [displayForm, setDisplayForm] = useState(false);

  const handleDisplay = () => {
    setDisplayForm(!displayForm);
  };

  return (
    <div className="w-full flex flex-col items-center pt-24 md:ml-96 gap-16 bg-slate-100 p-5 ">
      <header className="w-full flex justify-between items-end  ">
        <h1 className="text-2xl m-2"> Latest projects:</h1>
        {!displayForm ? (
          <button
            className="p-3 m-2 border rounded border-blue-800 transition-all hover:bg-blue-800 hover:text-white"
            onClick={handleDisplay}
          >
            + create new Project
          </button>
        ) : (
          <ProjectForm
            projects={projects}
            batch={batch}
            setBatch={setBatch}
            setDisplayForm={setDisplayForm}
          />
        )}
      </header>

      {projects
        .sort((a, b) => {
          return b.index - a.index;
        })
        .map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
    </div>
  );
}
