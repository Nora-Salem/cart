import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { useNavigate } from "react-router-dom";
const SignUp = ({ setClicked, setLogIn }) => {
  const navigate = useNavigate(null);

  const signupWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      localStorage.setItem("login", true);
      setLogIn(true);
      // setClicked(false);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="layout">
      <div className="signup-box">
        {/* <span onClick={() => setClicked(false)}>X</span> */}
        <h1>join us</h1>
        <button onClick={signupWithGoogle} className="btn-signup" href="">
          <FcGoogle /> Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
