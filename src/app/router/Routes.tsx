import { createBrowserRouter } from "react-router-dom";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import EventDetailedPage from "../../features/details/EventDetailedPage";
import EventForm from "../../features/events/form/EventForm";
import App from "../layout/App";
import Scratch from "../scratch/Scratch";
import AccountPage from "../../features/auth/AccountPage";
import ProfilePage from "../../features/profiles/ProfilePage";
import RequireAuth from "./RequireAuth";
import UnauthComponent from "../layout/nav/UnauthComponent";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {element : <RequireAuth />, children: [
            {path: "/manage/:id", element:<EventForm />},
            {path: "/profiles/:id", element:<ProfilePage />},
            {path: "/createEvent", element:<EventForm key="create" />},
            {path: "/account", element:<AccountPage />}
          ]},
          {path: "/events", element:<EventDashboard />},
          {path: "/events/:id", element:<EventDetailedPage />},
          {path: "/scratch", element:<Scratch />},
          {path: "/unauthorized", element:<UnauthComponent />}
      ],
    },
  ]); 

  