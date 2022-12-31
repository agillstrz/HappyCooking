import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/img/btnLogin.png";
import foto from "../assets/img/login.jpg";
import { auth } from "../config/config-firebase";
function Register() {
  const [email, setEmail] = useState("");
  const [errRegist, setErrRegist] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(async (userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     await updateProfile(auth.currentUser, { displayName: name });

    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/login");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage) {
          setErrRegist("Email already-in-use");
        }
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
            <h1 className="font-bold capitalize text-2xl w-fullt text-center">
              Create your account
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex w-full mb-3  justify-center flex-col gap-4"
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
                    placeholder="****"
                  />
                </div>
                <TextInput
                  onChange={(e) => setPassword(e.target.value)}
                  id="password1"
                  type="password"
                  required={true}
                />
              </div>
              {errRegist && (
                <span className="text-sm text-red-600">{errRegist}</span>
              )}
              <Button
                color=""
                className="w-full bg-btn text-white hover:bg-btnh transition-colors duration-200 ease-linear"
                type="submit"
              >
                Register
              </Button>
            </form>
            <p className="text-sm capitalize font-semibold">
              have an account?{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className=" h-screen p-28 ">
    //   <div className="flex justify-center w-full h-full bg-main2 items-center  gap-x-5">
    //     <div className="w-1/2 items-center borders h-1/2  flex justify-end">
    //       <img className="h-[80%]" src={foto} alt="" />
    //     </div>
    //     <div className="w-1/2 flex justify-center">
    //       <form className="flex w-full  justify-center flex-col gap-4">
    //         <div>
    //           <div className="mb-2 block">
    //             <Label className="text-lg" htmlFor="email1" value="Email" />
    //           </div>
    //           <TextInput
    //             className="w-1/2"
    //             id="email1"
    //             type="email"
    //             placeholder="name@flowbite.com"
    //             required={true}
    //           />
    //         </div>
    //         <div>
    //           <div className="mb-2 block">
    //             <Label
    //               className="text-lg"
    //               htmlFor="password1"
    //               value="Password"
    //             />
    //           </div>
    //           <TextInput
    //             className="w-1/2"
    //             id="password1"
    //             type="password"
    //             required={true}
    //           />
    //         </div>
    //         <div className="flex items-center gap-2">
    //           <Checkbox id="remember" />
    //           <Label htmlFor="remember">Remember me</Label>
    //         </div>
    //         <Button
    //           className="w-1/2  transition-colors duration-200 ease-linear"
    //           type="submit"
    //         >
    //           Submit
    //         </Button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Register;
