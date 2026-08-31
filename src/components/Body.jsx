import Header from "./Header";
import {useState} from "react";

const Body = () => {

  function Toggle() {
  // isToggleed = !isToggleed;
  // console.log(isToggleed);
  // return isToggleed ;  
  setIsToggled(!isToggled);
}

  const[isToggled, setIsToggled] = useState(true);
  
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
                  className="w-full px-4 py-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600 focus:ring-2 focus:ring-red-600 transition duration-200" 
                  type="email" 
                  placeholder="Email or phone number"
                  required
                />
                {
                  !isToggled && (
                    <input 
                      className="w-full px-4 py-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600 focus:ring-2 focus:ring-red-600 transition duration-200" 
                      type="text" 
                      placeholder="Full Name"
                      required
                    />
                  )
                }
  
                <input 
                  className="w-full px-4 py-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600 focus:ring-2 focus:ring-red-600 transition duration-200" 
                  type="password" 
                  placeholder="Password"
                  required
                />
              
              </div>

              <button 
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition duration-200 active:scale-95"
                type="submit"
              >
                {isToggled ? "SignIn" : "SignUp"}
              </button>

              <div className="text-center">
                <span className="text-gray-400 text-sm" onClick={Toggle}><a href="#" className="text-white hover:underline font-semibold">{isToggled ? <h1>New to Netflix? Sign Up now.</h1> : <h1>Already have an account? Sign In</h1>}</a></span>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}
export default Body;