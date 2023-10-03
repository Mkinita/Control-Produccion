import React from 'react'
import Layout from "../layout/Layout"

const turnos = () => {
  return (
    <>
        <Layout pagina='Turnos'>
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
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">103.2 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">91.8 m³</td>    
                    </tr>
                    <tr className='text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400 font-semibold">Total</td> 
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400 font-semibold" colSpan="2">194.8 m³</td>    
                    </tr>
                </tbody>
            </table>
        </Layout>
    </>
  )
}

export default turnos