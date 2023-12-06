const projectList = [
  {
    title: "Project 1",
    description: "This is a project",
    groups: [
      {
        name: "Group 1",
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
    title: "Project 2",
    description: "This is a project",
    groups: [
      {
        name: "Group 1",
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

export default function ProjectsList() {
  return (
    <div className="w-full flex flex-col items-center  bg-blue-200 p-5">
      <div className="w-full">
        <h1> Projects:</h1>
        {projectList.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col items-center  bg-blue-200 p-5"
            >
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="w-full">
                <h2>Groups:</h2>
                {project.groups.map((group,index) => {
                  return (
                    <div key={index}>
                      <h3>{group.name}</h3>
                      {group.members.map((member, index) => (
                        <div key={index}>{member.name}</div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
