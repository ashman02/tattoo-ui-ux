import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import LenisProvider from "./components/LenisProvider.tsx"
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LenisProvider>
      <RouterProvider router={router}/>
    </LenisProvider>
  </StrictMode>
)
