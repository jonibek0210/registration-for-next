import { useState } from "react";

import Register from "@/components/Register";
import SignUp from "@/components/SignUp";

const registration = () => {
   const [registration, setRegistration] = useState(true)

   return (
      <div className="relative w-screen h-screen">
         <button onClick={() => registration ? setRegistration(false) : setRegistration(true)} className="absolute top-[10%] left-1/4 text-gray-600 cursor-pointer"> &lt; {registration ? 'sign up' : 'regitr'}</button>

         {
            registration ? <Register /> : <SignUp />
         }
      </div>
   );
}

export default registration;