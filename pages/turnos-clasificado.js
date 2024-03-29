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
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">03-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">83.2 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">98.2 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">04-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">87.9 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">110.5 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">05-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">135.1 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">75.3 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">06-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">89.9 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">56.2 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">10-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">77.2 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">68.7 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">11-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">83.4 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">81.5 m³</td>    
                    </tr>

                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">12-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">72.4 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">57.7 m³</td>    
                    </tr>

                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">13-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">58.6 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">55.9 m³</td>    
                    </tr>

                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">16-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">76.8 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">83.7 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">17-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">96.5 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">80.1 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">18-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">59.8 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">69.6 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">19-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">121.4 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">125.1 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">20-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">117.5 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">99.6 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">23-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">127.4 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">122.1 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">24-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">85.1 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">82.8 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">25-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">85.4 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">85.7 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">26-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">96.7 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">72.1 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">30-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">60.1 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">86.0 m³</td>    
                    </tr>
                    <tr className='hover:bg-amber-300 text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">31-10-2023</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">85.1 m³</td>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400">35.8 m³</td>    
                    </tr>
                    <tr className='text-sm'>
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400 font-semibold">Total.</td> 
                        <td className="px-1 py-2 w-1/3 text-center border border-amber-400 font-semibold" colSpan="2">3526.1 m³</td>    
                    </tr>
                </tbody>
            </table>
        </Layout>
    </>
  )
}

export default turnos