import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import ProjectDetailsServiceReview from "../Component/ProjectDetailsServiceReview";
import ProjectDetailsGardenTips from "../Component/ProjectDetailsGardenTips";
import ProjectDetailsA5 from "../Component/ProjectDetailsA5";
import Contact from "../Component/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      

      { path: "/projects/service-review", element: <ProjectDetailsServiceReview /> },
      { path: "/projects/garden-Tips", element: <ProjectDetailsGardenTips></ProjectDetailsGardenTips> },
      { path: "/projects/task", element:  <ProjectDetailsA5></ProjectDetailsA5>},
      { path: "/contact", element:  <Contact></Contact>},
    ],
  },
]);
