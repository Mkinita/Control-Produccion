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
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">02-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">90.1 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">93.9 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">03-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">75.3 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">84.7 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">04-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">76.3 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">86.2 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">05-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">63.4 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">65.5 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">06-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">138.1 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">117.9 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">10-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">107.1 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">129.1 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">11-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">60.1 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">46.7 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">12-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">97.1 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">38.5 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">13-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">78.5 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">103.1 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">16-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">47.2 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">87.8 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">17-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">82.5 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">74.6 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">18-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">100.3 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">92.3 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">19-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">100.3 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">79.7 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">20-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">100.9 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">109.1 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">23-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">110.5 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">105.5 m³</td>    
                    </tr>
                    <tr className='text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400 font-semibold">Total</td> 
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400 font-semibold" colSpan="2">2844.2 m³</td>    
                    </tr>
                </tbody>
            </table>
        </LayoutEmp>
    </>
  )
}

export default turnos