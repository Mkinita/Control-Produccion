import Head from 'next/head'
import useSWR from 'swr'
import LayoutIndicadores from "../layout/LayoutIndicadores"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useCallback, useState } from "react"
import {formatoNumero,formatoNumero1} from "helpers/formato";
import Produccion from '../components/Produccion'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { Bar } from 'react-chartjs-2';




export default function InformeAgr() {



   return (
        <>
            <LayoutIndicadores pagina='Informe-agr'>
                <Head>
                    <meta name="description" content="Carlos Jerez" />
                    <link rel="icon" href="/CJ.png" />
                    <title>Control Produccion AGR</title>
                    <meta property="og:image" content="/CJ.png" />
                    <meta name="twitter:image" content="/CJ.png" />
                </Head>
                
                <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Indicadores Septiembre 2024</h2>
                        <div className="flex space-x-4">
                        <div className="flex items-center">
                            <span className="bg-green-500 rounded-full w-4 h-4 mr-2"></span>
                            <span>✔️</span>
                        </div>
                        <div className="flex items-center">
                            <span className="bg-red-500 rounded-full w-4 h-4 mr-2"></span>
                            <span>❌</span>
                        </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-md shadow">
                            <div className='flex items-center'>
                                <h2 className="text-lg font-semibold text-right ml-6">Descortezador</h2>
                                <div style={{ width: '42%', margin: 'auto',}}>
                                    <CircularProgressbar
                                        styles={buildStyles({
                                            pathColor: 1.70 >= 4.5 ? '#22c55e' : '#DC2626',
                                            trailColor: '#F5F5F5',
                                            textColor: '#0a0a0a',
                                            textSize:'14px'
                                            
                                        })}
                                        value={100}
                                        text={`0.72 / Minuto`}
                                    />


                                </div>
                            </div>
                            <div className='flex justify-center py-6'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="4">Real </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Ingreso</td>
                                                <td className="border border-lime-200 px-1 py-2">8421</td> 
                                                <td className="border border-lime-200 px-1 py-2">0.72 Trozos / Minuto</td>  
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="bg-white p-4 rounded-md shadow">
                            <div className='flex items-center'>
                                <h2 className="text-lg font-semibold text-right ml-6">Aserradero</h2>
                                <div style={{ width: '40%', margin: 'auto' }}>
                                    <CircularProgressbar
                                        styles={buildStyles({
                                            pathColor: 41.1 >= 48 ? '#DC2626' : '#DC2626',
                                            trailColor: '#F5F5F5',
                                            textColor: '#0a0a0a',
                                        })}
                                        value={100}
                                        text={`${formatoNumero(48.8)}%`}
                                    />


                                </div>
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Ingreso</td>
                                                <td className="border border-lime-200 px-1 py-2">3979 m³</td> 
                                                <td className="border border-lime-200 px-1 py-2">3979 m³</td>  
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">2187 m³</td>
                                                <td className="border border-lime-200 px-1 py-2">2187 m³</td>   
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="bg-white p-4 rounded-md shadow">
                            <div className=''>
                                <h2 className="text-lg text-center font-semibold">Partidoras</h2>
                                <div className='p-2 m-auto items-center hidden sm:block'>
                                
                                </div>

                               
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">342 m³</td>
                                                <td className="border border-lime-200 px-1 py-2">342 m³</td>   
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        
                        <div className="bg-white p-4 rounded-md shadow">
                            <div className=''>
                                <h2 className="text-lg text-center font-semibold">Stacker</h2>
                                

                               
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                                
                                            </tr>
                                            
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Verde</td>
                                                <td className="border border-lime-200 px-1 py-2">2462 m³</td>
                                                <td className="border border-lime-200 px-1 py-2">2462 m³</td>   
                                            </tr>
                                            

                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Seco</td>
                                                <td className="border border-lime-200 px-1 py-2">438 m³</td>
                                                <td className="border border-lime-200 px-1 py-2">438 m³</td>   
                                            </tr>

                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Total</td>
                                                <td className="border border-lime-200 px-1 py-2 text-center">2900 m³</td>
                                                <td className="border border-lime-200 px-1 py-2 text-center">2900 m³</td>
                                               
                                            </tr>

                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        <div className="bg-white p-4 rounded-md shadow">
                            <div className=''>
                                <h2 className="text-lg text-center font-semibold">Secado</h2>
                                

                               
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">2006 m³</td>
                                                <td className="border border-lime-200 px-1 py-2">2006 m³</td>   
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>


                        <div className="bg-white p-4 rounded-md shadow">
                            <div className='flex items-center'>
                                <h2 className="text-lg font-semibold text-right ml-6">Clasificacion</h2>
                                <div style={{ width: '40%', margin: 'auto' }}>
                                    <CircularProgressbar
                                        styles={buildStyles({
                                            pathColor: 97.7 >= 97.5 ? '#DC2626' : '#DC2626',
                                            trailColor: '#F5F5F5',
                                            textColor: '#0a0a0a',
                                        })}
                                        value={100}
                                        text={`${formatoNumero(95.7)}%`}
                                    />


                                </div>
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Ingreso</td>
                                                <td className="border border-lime-200 px-1 py-2">2300 m³</td>
                                                <td className="border border-lime-200 px-1 py-2">2300 m³</td>   
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">2197 m³</td> 
                                                <td className="border border-lime-200 px-1 py-2">2197 m³</td>  
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        {/* //Despacho// */}

                        <div className="bg-white p-4 rounded-md shadow">
                            <div className='flex items-center'>
                                <h2 className="text-lg font-semibold text-right ml-6">Despacho</h2>
                                <div style={{ width: '40%', margin: 'auto' }}>
                                    <CircularProgressbar
                                        styles={buildStyles({
                                            pathColor: 5 > 10 ?'#DC2626' : '#DC2626',
                                            trailColor: '#F5F5F5',
                                            textColor: '#0a0a0a',
                                        })}
                                        value={100}
                                        text={`${formatoNumero1(2)} Cargas`}
                                    />


                                </div>
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>

                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2"></td>
                                                <td className="border border-lime-200 px-1 py-2">Seco</td>
                                                <td className="border border-lime-200 px-1 py-2">Verde</td>   
                                                <td className="border border-lime-200 px-1 py-2">Servicio</td>   
                                                <td className="border border-lime-200 px-1 py-2">Total</td>   
                                            </tr>
                                            
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Real</td>
                                                <td className="border border-lime-200 px-1 py-2">- m³	</td> 
                                                <td className="border border-lime-200 px-1 py-2">- m³	</td> 
                                                <td className="border border-lime-200 px-1 py-2">2201 m³</td>  
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Proyeccion</td>
                                                <td className="border border-lime-200 px-1 py-2">- m³	</td>
                                                <td className="border border-lime-200 px-1 py-2">- m³	</td>  
                                                <td className="border border-lime-200 px-1 py-2">2201 m³</td>   
                                            </tr>

                                            

                                            

                                            
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        {/* ///// */}

                        
                        
                        
                        
                    

                        
                        
                        
                    </div>
                    
                    
                </div>

                <div className='py-8 pb-5 m-auto text-center'>
                    <Link href="/informes-agr" class="border border-lime-400 px-2 p-2">
                        <span class="">🏠 Inicio</span>
                    </Link>
                </div>
            

                
                
                
            
            </LayoutIndicadores>
        
        </>
        
   )
}