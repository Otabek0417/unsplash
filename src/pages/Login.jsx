import React from "react";
import { FcGoogle } from "react-icons/fc";
import { singnUpLogin } from "../firebase/firebaseConfig";
import { useGlobalContext } from "../hooks/useGlobalContext";
function Login() {
  const { addUser, user } = useGlobalContext();
  const login = () => {
    singnUpLogin()
      .then((result) => {
        addUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      {!user && <h1>Login With Google account</h1>}
      {user && (
        <div className="user_card">
          <h1>{user.displayName}</h1>
          <img className="user_img" src={user.photoURL} alt="" />
        </div>
      )}

      <button onClick={login} className="button">
        <span className="buttonInner">
          <span>Google</span>
          <FcGoogle />
        </span>
      </button>
    </div>
  );
}

export default Login;
