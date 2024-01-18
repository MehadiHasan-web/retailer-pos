import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Page/LogIn/LogIn";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    children : [
      {
        path : '/',
        element : <h1>hello</h1>
      }
    ]
  },
  {
    path : '/logIn',
    element : <LogIn></LogIn>
  }
]);

export default router;