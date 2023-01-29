const Footer = () => {
   return (
      <footer className="p-5 || mt-40 max-lg:mt-32 max-md:mt-20">
         <div className="container m-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
               <a href="#" className="flex items-center mb-4 sm:mb-0">
                  <img src="https://www.wepro.uz/_nuxt/img/logo-white.180a00c.svg" alt="Flowbite Logo" />
               </a>
               <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
                  <li>
                     <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                  </li>
                  <li>
                     <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                  </li>
                  <li>
                     <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline">Contact</a>
                  </li>
               </ul>
            </div>
            <hr className="my-6 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center">© 3 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
         </div>
      </footer>

   );
}

export default Footer;