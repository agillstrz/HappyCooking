import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Button, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/img/btnLogin.png";
import foto from "../assets/img/login.jpg";
import { provider } from "../config/config-firebase";
import Admin from "../utils/Admin";
import Auth from "../utils/Auth";
function Login() {
  const [errLogin, setErrLogin] = useState("");
  const [load, setLoad] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Cookies.remove("token");
        Cookies.remove("rt");
        Cookies.remove("admin");
        Cookies.remove("sub");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoad(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.email == "aulia@gmail.com") {
          Admin.StoreAdmin(user) &&
            Auth.storeUserInfoToCookie(user) &&
            Cookies.set("data", JSON.stringify(user)) &&
            navigate("/admin");
          setLoad(false);
        } else {
          Cookies.set("data", JSON.stringify(user)) &&
            Auth.storeUserInfoToCookie(user) &&
            navigate("/");
        }
      })
      .catch((error) => {
        setErrLogin("Wrong username or password.");
        setLoad(false);
      });
  };

  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        // The signed-in user info.
        Cookies.set("data", JSON.stringify(result.user)) &&
          Auth.storeUserInfoToCookie(result.user) &&
          navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="h-screen bg-btn/30 flex items-center justify-center shadow-xl">
      <div className="bg-main2 h-[80%] p-5 w-[70%] shadow-lg">
        <div className="flex justify-center w-full h-full  items-center  ">
          <div className="w-1/2 items-center h-full   flex justify-center">
            <img className="h-[90%] shadow-2xl" src={foto} alt="" />
          </div>

          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="font-bold text-2xl w-fullt text-center">
              WelcomeBack!
            </h1>

            <form
              onSubmit={handleLogin}
              className="flex w-full  justify-center flex-col gap-4"
            >
              <div>
                <div className="mb-2 block">
                  <Label className="text-lg" htmlFor="email1" value="Email" />
                </div>

                <TextInput
                  id="email1"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan Email"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    className="text-lg"
                    htmlFor="password1"
                    value="Password"
                  />
                </div>
                <TextInput
                  onChange={(e) => setPassword(e.target.value)}
                  id="password1"
                  type="password"
                  placeholder="*****"
                  required={true}
                />
              </div>

              {errLogin && (
                <span className="text-sm text-red-600">{errLogin}</span>
              )}

              <Button
                onClick={handleLogin}
                color=""
                className="w-full  bg-btn hover:bg-btnh transition-colors duration-200 ease-linear text-white"
                type="submit"
              >
                {load ? (
                  <span className="animate-spin h-5 w-5">
                    <i className="fa-solid  fa-spinner"></i>
                  </span>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
            <p className="text-sm pt-2 capitalize">
              don't have an account?{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => navigate("/register")}
              >
                create account
              </span>
            </p>
            <div className="flex  gap-x-3 w-full items-center justify-center">
              <span className=" w-[30%] h-1 bg-black"></span>
              <p>Or With</p>
              <span className=" w-[30%] h-1 bg-black"></span>
            </div>
            <div className="flex w-full items-start">
              <label
                onClick={loginGoogle}
                className="px-3 flex justify-center w-full cursor-pointer "
              >
                <img src={google} alt="" />
              </label>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
