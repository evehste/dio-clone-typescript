
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/Feed/Feed";
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { SignIn } from "./pages/SignIn/SignIn";
import { GlobalStyle } from './styles/global';
import { AuthContextProvider } from "./context/auth";

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
      <GlobalStyle />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/signin" element={<SignIn />} />
      </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
