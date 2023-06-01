import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import ListadoProduccion from '../components/ListadoProduccion'
import Tabla from '@/components/Tabla'
import StockSaldos from '@/components/StockSaldos'
import React, { useState, useEffect } from 'react';
import {formatoNumero} from "helpers/formato";




export default function AdminProducciones() {

   

    

    const fetcher = () => axios('/api/saldos-stock').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/saldos-stock',fetcher,{refreshInterval: 100} )



    const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")
  const [pedido, setPedido] = useState([]);
    
  //función para traer los datos de la API
  const URL = '/api/saldos-stock'
  
  const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setUsers(data)
    }   
     //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
  //  metodo de filtrado 2   
  const results = !search ? users : users.filter((dato)=> JSON.stringify(dato.calidad).toLowerCase().includes(search.toLowerCase()))


  
  

   useEffect( ()=> {
    showData()
  }, [])


  const [totalVolumen, setTotalVolumen] = useState(0);

  const sumarVolumenes = () => {
    let suma = 0;
    results.forEach((saldo) => {
        suma += saldo.espesor * saldo.ancho * saldo.largo * saldo.piezas * 1 / 1000000;
      
    });
    setTotalVolumen(suma);
};




  

    






    
    return(
        <AdminLayout pagina={'Listado-OC'}>

            <h1 className="text-3xl font-black text-center">Saldos</h1>
            {/* <p className='py-2 text-center'>Fecha: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p> */}

            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Escuadría' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <table className="table-auto w-full text-center bg-white text-gray-700">
                <tbody>

                        <tr className="bg-white border-b text-sm">
                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400">Fecha</td>
                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400">Detalle</td>
                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400">Cantidad</td>
                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400">Calidad</td>
                            <td className="px-6 py-4 w-1/5 text-center border border-lime-400">Volumen</td>
                        </tr>

                </tbody>
            </table>
            {data && data.length ? results.map(saldo =>
                
                <StockSaldos
                    key={saldo.id}
                    saldo={saldo}
                />

                ):
                <p className='text-center m-10'>Sin Reprocesos</p>
            } 


                
            <div className='flex justify-center items-center gap-2'>
            <button className="my-4 py-2 px-4 text-black " onClick={sumarVolumenes}>Calcular Volumen</button>
            <p className="">{formatoNumero(totalVolumen)} m³</p>
            </div>




            
        </AdminLayout>

        
    )
}


