import SideNavbar from "./SideNavbar";
import ProjectsList from "./ProjectsList";

export default function Dashboard() {
  return (
    <div className="flex">
    <SideNavbar />
    <ProjectsList />
  </div>
  )
}
