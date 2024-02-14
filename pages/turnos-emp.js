import React from 'react'
import LayoutEmp from "../layout/LayoutEmp"

const turnos = () => {
  return (
    <>
        <LayoutEmp pagina='Turnos'>
            <h1 className="text-xl font-semibold text-center pb-5 py-5">Turnos</h1>

            <table className="table-auto w-full text-center bg-white text-gray-700">
                <tbody>
                    <tr className="bg-white border-b text-lg font-semibold">
                        <td className="px-6 py-4 w-1/3 text-center border border-amber-400">Fecha</td> 
                        <td className="px-6 py-4 w-1/3 text-center border border-amber-400">Mañana</td>
                        <td className="px-6 py-4 w-1/3 text-center border border-amber-400">Tarde</td>
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">01-02-2024 / 09-02-2024</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400" colSpan="2">959.0 m³</td>   
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">12-02-2024</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">72.1 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">116.0 m³</td>    
                    </tr>

                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">13-02-2024</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">163.0 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">189.0 m³</td>    
                    </tr>

                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">Total Turnos</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">1194.1 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">1264.0 m³</td>    
                    </tr>
                   
                    <tr className='text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400 font-semibold">Total</td> 
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400 font-semibold" colSpan="2">1499.0 m³</td>    
                    </tr>
                </tbody>
            </table>
        </LayoutEmp>
    </>
  )
}

export default turnos