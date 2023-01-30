import PrivateDashboard from "@/components/PrivateDashboard";
import PrivateFooter from "@/components/PrivateFooter";
import PrivateHeader from "@/components/PrivateHeader";

const index = () => {
   return (
      <>
         <PrivateHeader />
         <div className="flex h-full pl-64">
            <PrivateDashboard />
            <main className="px-5">
               <h1>content</h1>
            </main>
         </div>
         <PrivateFooter />
      </>
   );
}

export default index;