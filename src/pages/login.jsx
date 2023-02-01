import SignUp from "@/components/SignUp";
import Link from "next/link";

const login = () => {
   return (
      <div className="relative w-screen h-screen">
         <Link href="/registration" className="absolute top-[10%] left-1/4 text-gray-600 cursor-pointer"> &lt; login</Link>
         <SignUp />
      </div>
   );
}

export default login;