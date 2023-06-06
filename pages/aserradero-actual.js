import useSWR from 'swr'
import axios from 'axios'
import LayoutAsr from "../layout/LayoutAsr"
import AserraderoActual from '../components/AserraderoActual'
import Tabla from '@/components/Tabla'
import React, { useState, useEffect } from 'react';
import {formatoNumero} from "helpers/formato";

export default function AdminProducciones() {

  const fetcher = () => axios('/api/aserradero-actual').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/aserradero-actual',fetcher,{refreshInterval: 100} )



  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

    
  const [data1, setData1] = useState([]);
    useEffect(() => {
      async function fetchData() {
      const response1 = await fetch('/api/aserradero-actual');
      const data1 = await response1.json();
      setData1(data1);
    }

    fetchData();
  }, []);


  //función para traer los datos de la API
  const URL = '/api/aserradero-actual'
  
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
  const results = !search ? users : users.filter((dato)=> JSON.stringify(dato.pedido02).toLowerCase().includes(search.toLowerCase()))


  
  

   useEffect( ()=> {
    showData()
  }, [])


  const [totalVolumen, setTotalVolumen] = useState(0);
  const [totalCantidad, setTotalCantidad] = useState(0);

  const sumarVolumenes = () => {
    let suma = 0;
    results.forEach((asr) => {
      asr.pedido02.forEach((oc) => {
        suma += oc.espesor * oc.ancho * oc.largo * oc.piezas * 1 / 1000000;
      });
    });
  setTotalVolumen(suma);
  };


  const sumarCantidades = () => {
    let suma = 0;
    results.forEach((asr) => {
      asr.pedido02.forEach((oc) => {
        suma += 1;
      });
    });
  setTotalCantidad(suma);
  };




  function calcularVolumen() {
    sumarVolumenes();
    sumarCantidades();
  }



  
  

    return(
    <LayoutAsr pagina={'Listado-OC'}>
          <h1 className="text-3xl font-black text-center">Produccion Actual</h1>
            <p className='py-2 text-center'>Fecha: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
            <div className='flex justify-center items-center  m-auto gap-2 border border-solid border-amber-400 hover:scale-95 rounded-xl'>
              <button className="py-2 px-4 text-black" onClick={calcularVolumen}>Resumen</button>
              <p className="">{formatoNumero(totalVolumen)} m³</p>
              <p className="">Cantidad {formatoNumero(totalCantidad)}</p>
            </div>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Escuadría' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <table className="table-auto w-full text-center bg-white text-gray-700">
              <tbody>
                      <tr className="bg-white border-b text-sm">
                          <td className="px-8 py-4 w-1/5 text-center border border-amber-400">Fecha</td>
                          <td className="px-6 py-4 w-1/5 text-center border border-amber-400">Es.</td>
                          <td className="px-6 py-4 w-1/5 text-center border border-amber-400">Lgo.</td>
                          <td className="px-6 py-4 w-1/5 text-center border border-amber-400">Calidad</td>
                          <td className="px-8 py-4 w-1/5 text-center border border-amber-400">m³</td>
                      </tr>
              </tbody>
            </table>
            {data && data.length ? results.map(asr =>
                
                <AserraderoActual
                    key={asr.id}
                    asr={asr}
                    
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }

 
    </LayoutAsr>

        
    )

    
}

