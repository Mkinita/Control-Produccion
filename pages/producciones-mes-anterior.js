import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import LayoutInformeAgr from "../layout/LayoutInformeAgr"
import useSWR from 'swr'
import axios from 'axios'
import InformeClasificado from '../components/InformeClasificado'
import {formatoNumero} from "helpers/formato";
import CamarasInforme from '../components/CamarasInforme'



export default function InformeAgr() {


    


   return (
        <>
        <LayoutInformeAgr pagina='Informe-agr'>



            
                    <h1 className="text-3xl font-black text-center py-2">Producciones Mayo</h1>
                    <p className='py-2 text-center pb-8'></p>
                    
                    
                        
                    <div className='grid gap-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-2'>  
                        <div className="border border-solid border-lime-500 px-4 p-2">
                            <p className="text-center uppercase font-bold text-xl pb-2">Aserradero</p>
                            <table className=" table-auto w-full text-center bg-white text-gray-700">
                                <tbody>
                                    
                                        <tr className="bg-white border-b text-sm">
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400 text-black font-bold">Ingreso</td>
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400 text-black font-bold">Producciones</td>
                                
                                        </tr>

                                        <tr className="bg-white border-b text-sm">
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400">5.659 m³</td>
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400">2.758 m³</td>
                                
                                        </tr>
                                    
                                </tbody>
                            </table>
                            
                        </div>

                        <div className="border border-solid border-lime-500 px-4 p-2">
                            <p className="text-center uppercase font-bold text-xl pb-2">Stacker</p>
                            <table className=" table-auto w-full text-center bg-white text-gray-700">
                                <tbody>
                                    
                                        <tr className="bg-white border-b text-sm">
                                            
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400 text-black font-bold">Producciones</td>
                                
                                        </tr>

                                        <tr className="bg-white border-b text-sm">
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400">3.113 m³</td>

                                
                                        </tr>
                                    
                                </tbody>
                            </table>
                            
                        </div>

                        <div className="border border-solid border-lime-500 px-4 p-2">
                            <p className="text-center uppercase font-bold text-xl pb-2">Secado</p>
                            <table className=" table-auto w-full text-center bg-white text-gray-700">
                                <tbody>
                                    
                                        <tr className="bg-white border-b text-sm">
                                            
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400 text-black font-bold">Producciones</td>
                                
                                        </tr>

                                        <tr className="bg-white border-b text-sm">
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400">3.313 m³</td>

                                
                                        </tr>
                                    
                                </tbody>
                            </table>
                            
                        </div>

                        <div className="border border-solid border-lime-500 px-4 p-2">
                            <p className="text-center uppercase font-bold text-xl pb-2">Clasificado</p>
                            <table className=" table-auto w-full text-center bg-white text-gray-700">
                                <tbody>
                                    
                                        <tr className="bg-white border-b text-sm">
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400 text-black font-bold">Ingreso</td>
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400 text-black font-bold">Producciones</td>
                                
                                        </tr>

                                        <tr className="bg-white border-b text-sm">
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400">2.660 m³</td>
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400">2.582 m³</td>
                                
                                        </tr>
                                    
                                </tbody>
                            </table>
                            
                        </div>


                        <div className="border border-solid border-lime-500 px-4 p-2">
                            <p className="text-center uppercase font-bold text-xl pb-2">Despacho</p>
                            <table className=" table-auto w-full text-center bg-white text-gray-700">
                                <tbody>
                                    
                                        <tr className="bg-white border-b text-sm">
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400 text-black font-bold">Seco</td>
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400 text-black font-bold">Verde</td>
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400 text-black font-bold">Servicio</td>
                                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400 text-black font-bold">Total</td>
                                        </tr>

                                        <tr className="bg-white border-b text-sm">
                                            <td className="px-6 py-4 w-1/4 text-center border border-lime-400">2.263 m³</td>
                                            <td className="px-6 py-4 w-1/4 text-center border border-lime-400">186.8 m³</td>
                                            <td className="px-6 py-4 w-1/4 text-center border border-lime-400">283.5 m³</td>
                                            <td className="px-6 py-4 w-1/4 text-center border border-lime-400">2.733 m³</td>
                                
                                        </tr>
                                    
                                </tbody>
                            </table>
                            
                        </div>

                        
                        
                    </div>
                    
                    
    

        </LayoutInformeAgr>
        </>
        
        
   )
}