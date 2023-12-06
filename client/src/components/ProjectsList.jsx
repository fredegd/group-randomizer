const projectList = [
  {
    index: 1,
    title: "pokemon",
    description: "This is a project",
    groups: [
      {
        name: "Group 1",
        bgCol: groupColors[0],
        members: [
          {
            name: "Member 1",
          },
          {
            name: "Member 2",
          },
          {
            name: "Member 3",
          },
        ],
      },
      {
        name: "Group 2",
        bgCol: groupColors[1],
        members: [
          {
            name: "Member 4",
          },
          {
            name: "Member 5",
          },
          {
            name: "Member 6",
          },
        ],
      },
      {
        name: "Group 3",
        bgCol: groupColors[2],
        members: [
          {
            name: "Member 7",
          },
          {
            name: "Member 8",
          },
          {
            name: "Member 9",
          },
        ],
      },
      {
        name: "Group 4",
        bgCol: groupColors[3],
        members: [
          {
            name: "Member 10",
          },
          {
            name: "Member 11",
          },
          {
            name: "Member 12",
          },
        ],
      },
    ],
  },
  {
    index: 2,
    title: "Cookbook",
    description: "This is a project",
    groups: [
      {
        name: "Group 1",
        bgCol: groupColors[4],
        members: [
          {
            name: "Member 1",
          },
          {
            name: "Member 2",
          },
          {
            name: "Member 3",
          },
        ],
      },
      {
        name: "Group 2",
        bgCol: groupColors[5],
        members: [
          {
            name: "Member 4",
          },
          {
            name: "Member 5",
          },
          {
            name: "Member 6",
          },
        ],
      },
      {
        name: "Group 3",
        bgCol: groupColors[6],
        members: [
          {
            name: "Member 7",
          },
          {
            name: "Member 8",
          },
          {
            name: "Member 9",
          },
        ],
      },
      {
        name: "Group 4",
        bgCol: groupColors[7],
        members: [
          {
            name: "Member 10",
          },
          {
            name: "Member 11",
          },
          {
            name: "Member 12",
          },
        ],
      },
    ],
  },
];

import { groupColors } from "../groupColors";
import { useState, useEffect } from "react";
import ProjectForm from "./ProjectForm";

import ProjectOptions from "./ProjectOptions";  

export default function ProjectsList() {
  const [projects, setProjects] = useState(projectList);

  const [displayForm, setDisplayForm] = useState(false);

  const handleDisplay = () => {
    setDisplayForm(!displayForm);
  };

  return (
    <div className="w-full flex flex-col items-center pt-24 md:ml-96 gap-16 bg-slate-100 p-5">
      <header className="w-full flex justify-between">
        <h1 className="text-2xl m-2"> Latest projects:</h1>
        {!displayForm ? (
          <button
            className="p-3 m-2 border rounded border-blue-800"
            onClick={handleDisplay}
          >
            + create new Project
          </button>
        ) : (
          <ProjectForm
            projects={projects}
            setProjects={setProjects}
            setDisplayForm={setDisplayForm}
          />
        )}
      </header>

      {projects
        .sort((a, b) => {
          return b.index - a.index;
        })
        .map((project, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col items-center  bg-slate-200 p-5  border rounded-2xl border-blue-800"
            >
              <div className="w-full flex justify-between">
                <section className="mb-5">
                  <h1>
                    {project.title}
                    {":"}
                  </h1>
                  <p>{project.description}</p>
                </section>
                <ProjectOptions />
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:justify-around gap-5">
                {project.groups.map((group, index) => {
                  return (
                    <div
                      key={index}
                      className="border-4 border-slate-300 rounded-lg p-0 "
                    >
                      <h3
                        className="border-b-4  rounded-md py-5 px-3 "
                        style={{ backgroundColor: group.bgCol }}
                      >
                        {"group # " + (index + 1)}
                      </h3>
                      <ul className="flex justify-between flex-wrap">
                        {group.members.map((member, index) => (
                          <li key={index} className="py-5 px-3 ">
                            {member.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
