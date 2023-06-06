import LayoutAsr from "../layout/LayoutAsr"
import useCombustible from "../hooks/useCombustible"
import { useEffect, useCallback, useState } from "react"
import ResumenSolicitusAsr from "../components/ResumenSolicitusAsr"



export default function Resumen() {

    const { pedido02,total,colocarOrden } = useCombustible()

    const comprobarPedido = useCallback(() => {
        return pedido02.length === 0 || pedido02 === "" || pedido02.length <1 ;
        
    },[pedido02, pedido02])


    useEffect(() => {
        comprobarPedido()
    },[pedido02, comprobarPedido])

   return (
        <LayoutAsr pagina='Resumen'>
            <h1 className="text-4xl font-black text-center">Resumen</h1>
            <p className="text-2xl my-10 text-center"></p>
            


            {pedido02.length === 0 ? (
                <p className="text-center text-2xl">No hay Productos</p>
                
            ) : (
                pedido02.map((paquet) => (
                <ResumenSolicitusAsr key={paquet.id} paquet={paquet} />
                
                ))
                
            )}

        <form 
                onSubmit={colocarOrden}
                className="text-center"
                
            >

            <div className="">
                <input
                    type="submit"
                    className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                    value="Ingresar"
                    disabled={comprobarPedido()}  
                />
            </div>

        </form>


        
        </LayoutAsr>
   )
}