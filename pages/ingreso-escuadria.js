import LayoutAsr from "../layout/LayoutAsr"
import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"



export default function Saldo() {



    const { pedido,nombre,
        setNombre,
        equipo,
        espesor,
            setEspesor,
            espesor01,
            setEspesor01,
            ancho,
            setAncho,
            largo,
            setLargo,
            piezas,
            setPiezas,
            calidad,
            detalle,setDetalle,
            setCalidad,colocarPaquete } = useCombustible()


    const comprobarPedido = useCallback(() => {
        return espesor === "" || espesor.length <2;
        
    },[espesor])


    useEffect(() => {
        comprobarPedido()
    },[comprobarPedido])





    


   return (
        
    <LayoutAsr pagina='Saldos'>

            <h1 className="text-2xl font-black text-center">Ingresar Escuadria</h1>
            <p className="text-2xl my-10"></p>

            
            

                <form 
                    onSubmit={colocarPaquete}
                    class="text-center"
                >
                   <div class="grid grid-cols-2 gap-2 py-5"> 

                                <div>
                                <label for="fecha" class="block text-xs font-medium text-gray-700 mb-1">Espesor Pizarra</label>    
                                <input
                                    id="espesor"
                                    type="number"
                                    className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                    value={espesor01}
                                    onChange={e => setEspesor01(e.target.value)}
                                />
                                </div>
                    
                                <div>
                                <label for="fecha" class="block text-xs font-medium text-gray-700 mb-1">Espesor</label>    
                                <input
                                    id="espesor"
                                    type="number"
                                    className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                    value={espesor}
                                    onChange={e => setEspesor(e.target.value)}
                                />
                                </div>
                                



                                <div>
                                    <label for="fecha" class="block text-xs font-medium text-gray-700 mb-1">Ancho</label>
                                    <input
                                        id="ancho"
                                        type="number"
                                        className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                        value={ancho}
                                        onChange={e => setAncho(e.target.value)}
                                    />
                                        
                                </div>







                                <div>
                                    <label for="fecha" class="block text-xs font-medium text-gray-700 mb-1">Largo</label>
                                    <select
                                        id="largo"
                                        className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                        value={largo}
                                        onChange={e => setLargo(e.target.value)}
                                    >
                                        <option value="">-</option>
                                        <option value="2.13">7</option>
                                        <option value="2.44">8</option>
                                        <option value="3.05">10</option>
                                        <option value="3.20">3.20</option>
                                        <option value="3.66">12</option>
                                        <option value="3.96">13</option>
                                        <option value="4.00">4</option>
                                    </select>
                                </div> 




                                <div>
                                    <label for="fecha" class="block text-xs font-medium text-gray-700 mb-1">Pz/Crds</label>
                                    <input
                                        id="piezas"
                                        type="number"
                                        className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                        value={piezas}
                                        onChange={e => setPiezas(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label for="fecha" class="block text-xs font-medium text-gray-700 mb-1">Calidad</label>
                                    <select
                                        id="calidad"
                                        className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                        value={calidad}
                                        onChange={e => setCalidad(e.target.value)}
                                    >
                                        <option value="">-</option>
                                        <option value="Lateral">Lateral</option>
                                        <option value="Central">Central</option>
                                    </select>
                                </div>

                                <div>
                                    <label for="fecha" class="block text-xs font-medium text-gray-700 mb-1">Detalle</label>
                                    <input
                                        id="piezas"
                                        type="text"
                                        className="bg-gray-200 w-full lg:w-3/4 p-1 rounded-md"
                                        value={detalle}
                                        onChange={e => setDetalle(e.target.value)}
                                    />
                                </div>
                            <div>
                    

                            </div>

                            <div className="mt-6">
                            
                        <input
                            type="submit"
                            className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-2 py-2 rounded uppercase font-bold text-white text-center`}
                            value="Ingresar"
                            disabled={comprobarPedido()}
                                
                        />
                    </div>


                            <div></div>


                    

                        

                    
            
                 </div> 
                   
                </form>
                
            

            

        </LayoutAsr>
        
        
   )
}


