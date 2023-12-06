import SideNavbar from "./SideNavbar";
import ProjectsList from "./ProjectsList";
import { useState } from "react";

import { batchData } from "../data/batchExample";

export default function Dashboard() {
  const [batch, setBatch] = useState(
    localStorage.getItem("batch")
      ? JSON.parse(localStorage.getItem("batch"))
      : batchData
  );

  return (
    <div className="w-full   flex">
      <SideNavbar batch={batch} setBatch={setBatch} />
      <ProjectsList batch={batch} setBatch={setBatch} />
    </div>
  );
}
