import Head from "next/head"
import SidebarAsr from "../components/SidebarAsr"
import Modal from "react-modal"
import { ToastContainer } from'react-toastify'
import useCombustible from "../hooks/useCombustible";

import 'react-toastify/dist/ReactToastify.css'




Modal.setAppElement('#__next');

export default function Layout({children, pagina}) {

    const {modal} = useCombustible()
    return (
      <>
      <Head>
            <title>Inicio - {pagina}</title>
            <meta name="description" content="Inicio"/>
            
            
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
            <SidebarAsr/>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
            <div className="p-10">
              {children}
            </div>
            
        </main>
      </div>
      <ToastContainer/>
      </>
    )
  }