// App.js
import { BrowserRouter, Routes, Route, Outlet,} from "react-router-dom";
import "./App.css"

function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home page</div>} />
          <Route path="about" element={<div>About page</div>} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App