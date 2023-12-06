const projectList = [
  {
    index: 1,
    title: "Project 1",
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
    title: "Project 2",
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

export default function ProjectsList() {
  return (
    <div className="w-full flex flex-col items-center pt-24 md:ml-96 gap-16 bg-slate-100 p-5">
      <header className="w-full flex justify-between">
        <h1 className="text-2xl m-2"> Latest projects:</h1>
        <button className="p-3 m-2 border rounded border-blue-800">+ create new Project</button>
      </header>
      {projectList
        .sort((a, b) => {
          return b.index - a.index;
        })
        .map((project, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col items-center  bg-slate-200 p-5  border rounded-2xl border-blue-800"
            >
              <section className="w-full flex justify-start gap-7 mb-5">
                <h1>
                  {project.title}
                  {":"}
                </h1>
                <p>{project.description}</p>
              </section>

              <div className="w-full flex flex-col lg:flex-row md:justify-around gap-5">
                {project.groups.map((group, index) => {
                  return (
                    <div
                      key={index}
                      className="border-4 border-slate-300 rounded-lg p-0 grow"
                    >
                      <h3
                        className="border-b-4 p-5"
                        style={{ backgroundColor: group.bgCol }}
                      >
                        {"group # " + (index + 1)}
                      </h3>
                      <ul>
                        {group.members.map((member, index) => (
                          <li key={index} className="p-5">
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
