import Header from "./Header";
import { useRef, useState } from "react";
import { Validate } from "../utils/Validate";

const Login = () => {

  const [isToggled, setIsToggled] = useState(false);
  const [message, setMessage] = useState(null)
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passRef = useRef(null);


  function handleSubmit() {
      console.log("handle submit");
      
  console.log(emailRef.current.value);
  console.log(nameRef.current.value);
  console.log(passRef.current.value);  
    const message = Validate(emailRef.current.value, nameRef.current.value, passRef.current.value)
    console.log(message);
    setMessage(message)

    // const isValidEmail = emailRef.test("user@example.com"); // true
    // console.log(isValidEmail);

  }

  function Toggle() {
    // isToggleed = !isToggleed;
    // console.log(isToggleed);
    // return isToggleed ;  
    setIsToggled(!isToggled);
  }


  return (
    <>
      <div className="relative w-full min-h-screen">
        <img className="absolute inset-0 w-full h-full object-cover" src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png" alt="Netflix Background" />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 p-6 border-b border-gray-600/30">
          <Header />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <form className="w-full max-w-md bg-black/80 rounded-lg p-8 shadow-2xl space-y-6">
            <h1 className="text-3xl font-bold text-white mb-8">{isToggled ? "Sign in" : "Sign Up"}</h1>

            <div className="space-y-4">
              <input
                ref={emailRef}
                className="w-full px-4 py-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600 focus:ring-2 focus:ring-red-600 transition duration-200"
                type="email"
                placeholder="Email or phone number"
                required
              />
              {
                !isToggled && (
                  <input
                    ref={nameRef}
                    className="w-full px-4 py-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600 focus:ring-2 focus:ring-red-600 transition duration-200"
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                )
              }

              <input
                ref={passRef}
                className="w-full px-4 py-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600 focus:ring-2 focus:ring-red-600 transition duration-200"
                type="password"
                placeholder="Password"
                required
              />

            </div>

            <button
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition duration-200 active:scale-95"
              type="button" onClick={handleSubmit}
            >
              {isToggled ? "SignIn" : "SignUp"}
            </button>

            <h1 className="text-red-700 font-bold">{message}</h1>

            <div className="text-center">
              <span className="text-gray-400 text-sm" onClick={Toggle}><a href="#" className="text-white hover:underline font-semibold">{isToggled ? <h1>New to Netflix? Sign Up now.</h1> : <h1>Already have an account? Sign In</h1>}</a></span>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


export default Login;