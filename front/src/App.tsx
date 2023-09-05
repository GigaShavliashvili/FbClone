import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalAppStyles  from "./styles/Global.Style";

function App() {
  return (
    <> 
        <GlobalAppStyles/>
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
