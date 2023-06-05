import LayoutDes from "../layout/LayoutDes"
import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"



export default function Saldo() {



    const { 
            fecha, setFecha,
            cantidad,setCantidad,
            colocarDescortezador
    } = useCombustible()


    


    const comprobarPedido = useCallback(() => {
        return fecha === "" || fecha.length <1;
        
    },[fecha])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])





    


   return (
        
    <LayoutDes pagina='Descortezador'>

        <h1 className="text-2xl font-black text-center">Descortezador</h1>
        <p className="text-2xl my-10"></p>
        <div class="container mx-auto">
            <form 
                onSubmit={colocarDescortezador}
                class="text-center"
            >

                


                <div class="grid grid-cols-2 gap-2 py-5">
                    

                    <div>
                        <label for="espesor" class="block text-xs font-medium text-gray-700 mb-1">Cantidad Trozos</label>
                        <input
                            id="piezas"
                            type="number"
                            className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                            value={cantidad}
                            onChange={e => setCantidad(e.target.value)}
                        />
                    </div>


                    <div>
                        <label for="espesor" class="block text-xs font-medium text-gray-700 mb-1">Fecha</label>
                        <input
                            id="piezas"
                            type="date"
                            className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                            value={fecha}
                            onChange={e => setFecha(e.target.value)}
                        />
                    </div> 

 
                </div>

                

                <div className="mt-6">
                            
                    <input
                        type="submit"
                        className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                        value="Ingresar"
                        disabled={comprobarPedido()}    
                    />
                </div>
            
                    
            </form>
                
        </div>

            

        </LayoutDes>
        
        
   )
}