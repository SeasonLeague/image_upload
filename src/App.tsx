import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/auth";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes>}></Route>
        <Route path="/signup" element={<PublicRoutes><Signup /></PublicRoutes>}></Route>
      </Routes>
    </AuthProvider>
  );
};


export default App;
