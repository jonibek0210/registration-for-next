import PrivateFooter from "@/components/PrivateFooter";
import PrivateHeader from "@/components/PrivateHeader";

const index = () => {
   return (
      <>
         <PrivateHeader />
         <main className="container m-auto">
            <h1>content</h1>
         </main>
         <PrivateFooter />
      </>
   );
}

export default index;