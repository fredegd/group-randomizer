import SideNavbar from "./SideNavbar";
import ProjectsList from "./ProjectsList";

export default function Dashboard() {
  return (
    <div className="w-full h-screen  flex">
    <SideNavbar />
    <ProjectsList />
  </div>
  )
}
