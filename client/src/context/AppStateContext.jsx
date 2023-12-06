import { useContext, createContext, useState } from "react";
import { batchData } from "../data/batchExample";

const AppStateContext = createContext();

export function useAppState() {
  return useContext(AppStateContext);
}

export default function AppStateProvider({ children }) {
  const [batch, setBatch] = useState(
    localStorage.getItem("batch")
      ? JSON.parse(localStorage.getItem("batch"))
      : batchData
  );
  localStorage.setItem("batch", JSON.stringify(batch));

  //TODO: add a function to remove a batch
  //TODO add a function to remove a member
  //TODO add a function to remove a instructor
  //TODO add a function to remove a project

  const editName = (project, batch) => {
    const name = project.title;
    console.log(name);
  };

  const editGroupsAmount = (project, batch) => {
    const amount = project.groups.length;

    console.log(amount);
  };

  const reshuffleGroups = (project, batch) => {
    const newGroups = project.groups;
    console.log(newGroups);
  };

  const deleteProject = (project, batch) => {
    const id = project.index;
    console.log(id);
  };

  return (
    <AppStateContext.Provider
      value={{
        batch,
        setBatch,
        editName,
        editGroupsAmount,
        reshuffleGroups,
        deleteProject,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}
