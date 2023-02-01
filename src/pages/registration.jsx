import { useState } from "react";

import Register from "@/components/Register";
import SignUp from "@/components/SignUp";
import Link from "next/link";

const registration = () => {
   const [registration, setRegistration] = useState(true)

   return (
      <div className="relative w-screen h-screen">
         <Link href="/login" className="absolute top-[10%] left-1/4 text-gray-600 cursor-pointer"> &lt; registr</Link>
         <Register />
      </div>
   );
}

export default registration;