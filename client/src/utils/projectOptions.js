export const editName = (project,batch) => {
    const name = project.title
  console.log(name);
  //   return {
  //     name,
  //   };
};

export const editGroupsAmount = (project,batch) => {
    const amount = project.groups.length;

  console.log(amount);
  //   return {
  //   amount
  //   };
};

export const reshuffleGroups = (project,batch) => {
    const newGroups = project.groups
  console.log(newGroups);
  //   return {
  //     type: "RESHUFFLE_GROUPS",
  //     payload: amount,
  //   };
};

export const deleteProject = (project,batch) => {
    const id = project.index
  console.log(id);
  //   return {
  //     type: "DELETE_PROJECT",
  //     payload: id,
  //   };
};