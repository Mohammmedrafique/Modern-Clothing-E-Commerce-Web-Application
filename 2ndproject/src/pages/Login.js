import React from "react";
import { Googlelogo, githublogo } from "../assets";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );

        setTimeout(() => {
          navigate(-1);
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex flex-row items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base  w-60 h-12 traking-wide border-[1px] border-gray-400 
        rounded-md flex item-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 p-1"
        >
          <img className="" src={Googlelogo} alt="googlelogo" />
          <span className="text-md text-gray-900 flex items-center justify-center">
            Sign in with Google
          </span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full flex flex-row items-center justify-center gap-10">
        <div
          className="text-base w-60 h-12 traking-wide border-[1px] border-gray-400 
        rounded-md flex item-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 p-2"
        >
          <img className="" src={githublogo} alt="githublogo" />
          <span className="text-md text-gray-900 flex items-center justify-center">
            Sign in with Github
          </span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
