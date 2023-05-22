import Head from "next/head";
import SidebarImprecion from "../components/SidebarImprecion";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Control - {pagina}</title>
        <meta name="description" content="RestoApp" />
      </Head>

      <div className="">
            <aside className="mx-5 py-2">

                
            </aside>

            

            <main className="mx-5">
                <div className="">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />

      
    </>
  );
}