import { useState } from "react";
import "./App.css";
import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/Profile";
import CreatePost from "./component/CreatePost";
import SignUp from "./component/SignUp";

function App() {
  const [login, setLogIn] = useState(localStorage.getItem("login"));

  const signOutUser = async () => {
    await signOut(auth);
    localStorage.clear();
    window.location.pathname = "login";
  };

  return (
    <>
      <Router>
        <nav>
          <ul className="menu">
            <Link to="/">Home</Link>

            {!login ? (
              <Link to="/login">Login</Link>
            ) : (
              <>
                <Link to="/create">Create Post</Link>
                <Link to="/profile">Profile</Link>
                <button onClick={signOutUser}>Log Out</button>
              </>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home login={login} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreatePost login={login} />} />
          <Route path="/login" element={<SignUp setLogIn={setLogIn} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
