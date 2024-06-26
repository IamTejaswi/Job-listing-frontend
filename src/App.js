import {Routes, Route, BrowserRouter} from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"

function App() {
  return <BrowserRouter>
  <Routes>
    <Route  path="/login"  element={<LoginPage/>} />
    <Route path="/register" element={<RegisterPage/>} />
  </Routes>
  </BrowserRouter>
    
}

export default App;
