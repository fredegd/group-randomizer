import React, { useContext,createContext } from "react";
import { signal } from "@preact/signals-react";
const AppState = createContext();

function AppStateProvider(props) {
  const batch = signal({});
  function createBatch(batchName, instructorName, members, projects) {
    batch.value = [
      ...batch.value,
      {
        batchName: batchName.value,
        instructor: instructorName.value,
        members: members.value,
        projects: projects.value,
      },
    ];
  }

  //TODO: add a function to remove a batch
  //TODO add a function to remove a member
  //TODO add a function to remove a instructor
  //TODO add a function to remove a project

  return (
    <AppState.Provider value={{ createBatch }}>
      {props.children}
    </AppState.Provider>
  );
}

function useAppState() {
  const appState = useContext(AppState);
  if (!appState) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }
  return appState;
}

export { AppStateProvider, useAppState };
