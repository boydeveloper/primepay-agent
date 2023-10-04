import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ForgortPasswordPage, LoginPage, RegisterPage } from "./auth/index";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
