import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./component/Body";
import Head from "./component/Head";
import MainContainer from "./component/MainContainer"
import WatchPage from "./component/WatchPage"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <div className="sticky top-0 bg-white">
        <Head />
      </div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
