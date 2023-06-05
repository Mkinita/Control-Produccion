import useSWR from 'swr'
import axios from 'axios'
import AdminLayoutInforme from "../layout/AdminLayoutInforme"
import Partidoras from '../components/Partidoras'
import React, { useState, useEffect } from 'react';
import {formatoNumero,formatoNumero2} from "helpers/formato";
import  ProduccionesEncabezado from '../components/ProduccionesEncabezado'





export default function AdminProducciones() {

  const fetcher = () => axios('/api/partidoras').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/partidoras',fetcher,{refreshInterval: 100} )



  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

    
  const [data1, setData1] = useState([]);
    useEffect(() => {
      async function fetchData() {
      const response1 = await fetch('/api/partidoras');
      const data1 = await response1.json();
      setData1(data1);
    }

    fetchData();
  }, []);


  //función para traer los datos de la API
  const URL = '/api/partidoras'
  
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
  const results = !search ? users : users.filter((dato)=> JSON.stringify(dato.fecha).toLowerCase().includes(search.toLowerCase()))
   useEffect( ()=> {
    showData()
  }, [])


  let totalIngreso = 0;

  results.forEach((producciones) => {
    totalIngreso += parseFloat(producciones.volumen);
  });

 


  return(
    <AdminLayoutInforme pagina={'Listado-OC'}>
      
      <ProduccionesEncabezado/>
      <p className="text-2xl my-10"></p>
      <div className='flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-black text-center">Partidoras</h2>
        <input value={search} onChange={searcher} type="text" placeholder='Filtrar Por Fecha 🔍' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 
      </div>


            <table className="table-auto w-full text-center bg-white text-gray-700">
                <tbody>
                    
                        <tr className="bg-white border-b">
                            <td className="px-2 py-4 w-1/5 text-center border border-lime-400">Fecha</td>
                            <td className="px-2 py-4 w-1/5 text-center border border-lime-400">Volumen</td>
                            <td className="px-2 py-4 w-1/5 text-center border border-lime-400">Volumen / Hora</td>
                        </tr>
                    
                </tbody>
            </table>

          {data && data.length ? results.map(producciones =>
            <Partidoras
              key={producciones.id}
              producciones={producciones} 
            />
            ):
            <p className='text-center m-10'>Sin Produccion</p>
          }

            <table className="table-auto w-full text-center bg-white text-gray-700">
                <tbody>
                    
                        <tr className="bg-white">
                            <td className="px-2 py-4 w-1/5 text-center">Total</td>
                            <td className="px-2 py-4 w-1/5 text-center">{formatoNumero(totalIngreso)}</td>
                            <td className="px-2 py-4 w-1/5 text-center">{formatoNumero(totalIngreso / 9)}</td>
                        </tr>
                    
                </tbody>
            </table>
    </AdminLayoutInforme>
  ) 
}