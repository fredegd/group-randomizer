import ProjectOptions from "./ProjectOptions";

export default function ProjectCard({ project }) {
  return (
    <div className="w-full flex flex-col items-center  bg-slate-200 p-5  border rounded-2xl border-blue-800">
      <div className="w-full flex justify-between">
        <section className="mb-5">
          <h1 className="text-2xl">
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
}
