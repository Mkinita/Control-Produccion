import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import Produccion from '../components/Produccion'
import React, { useState, useEffect } from 'react';
import {formatoNumero} from "helpers/formato";
import { Bar } from 'react-chartjs-2';




export default function AdminProducciones() {

  const fetcher = () => axios('/api/producciones-clasificado').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/producciones-clasificado',fetcher,{refreshInterval: 100} )



  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

    
  const [data1, setData1] = useState([]);
    useEffect(() => {
      async function fetchData() {
      const response1 = await fetch('/api/listado-saldo');
      const data1 = await response1.json();
      setData1(data1);
    }

    fetchData();
  }, []);


  //función para traer los datos de la API
  const URL = '/api/producciones-clasificado'
  
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

  let totalVolumens = 0;
  let totalIngreso = 0;

  results.forEach((producciones) => {
    totalVolumens += parseFloat(producciones.volumen);
    totalIngreso += parseFloat(producciones.ingreso);
  });

  const resproceso = totalVolumens * 0.015
  const despunte = totalVolumens * 0.02
  const humedo = totalVolumens * 0.01
  const rzo = totalVolumens * 0.012
  const totaltotal = totalVolumens + resproceso + despunte + humedo
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    const date = new Date();
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    setCurrentMonth(monthNames[date.getMonth()]);
  }, []);


  const data2 = {
    labels: results.map((producciones) => producciones.fecha),
    datasets: [
      {
        label: 'Produccion Clasificado',
        data: results.map((producciones) => producciones.volumen),
        backgroundColor: ' #a3e635',
        borderColor: ' #a3e636',
        borderWidth: 1,
        barPercentage: 0.3, // Ancho de las barras
        categoryPercentage: 1, // Espacio entre barras
      },
    ],
  };

  const [isVisibleproveedor, setIsVisibleproveedor] = useState(false);
      
  const toggleVisibilityproveedor = () => {
    setIsVisibleproveedor(!isVisibleproveedor);
  };
  const [cuadro, setCuadro] = useState(false);

  const toggleCuadro = () => {
    setCuadro(!cuadro);
  };


  return(
    <Layout pagina={'Listado-OC'}>
      
  
      <p className="text-2xl my-10"></p>
      <div className='flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-black text-center">Clasificado</h2>
        <input value={search} onChange={searcher} type="text" placeholder='Filtrar Por Fecha 🔍' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 
      </div>

      <div className={`${isVisibleproveedor ? 'hidden' : ''}`}>
        <div className={`${cuadro ? 'hidden' : ''}`}>
          <div className="grid gap-1 grid-cols-3 md:grid-cols-4 2xl:grid-cols-4 text-center uppercase font-bold text-sm">
            <div>Fecha</div>
            <div className="hidden md:block">Ingreso</div>
            <div>Produccion</div>
            <div className="">%</div>
          </div>

          {data && data.length ? results.map(producciones =>
            <Produccion
              key={producciones.id}
              producciones={producciones} 
            />
            ):
            <p className='text-center m-10'>Sin Produccion</p>
          }
          <div className="grid gap-1 grid-cols-3 md:grid-cols-4 2xl:grid-cols-4 text-center uppercase font-bold text-sm py-2">
            <div>Total</div>
            <div className="hidden md:block">{formatoNumero(totalIngreso)}</div>
            <div>{formatoNumero(totalVolumens)}</div>
            <div className="">{formatoNumero(totalVolumens / totalIngreso * 100)}%</div>
          </div>
        </div>
      </div>

      {cuadro && ( 
        <div class="w-full overflow-hidden rounded-lg shadow-md">
          <table class="w-full table-auto bg-lime-5">
            <thead>
              <tr class="bg-lime-400 text-black uppercase text-sm leading-normal">
                <th class="py-6 px-4 font-bold text-center" colspan="2">Clasificado {currentMonth}</th>
              </tr>
            </thead>
            <tbody class="text-black text-sm font-light">
              <tr class="border-b border-gray-200 hover:bg-lime-300">
                <td class="py-3 px-4 text-left whitespace-nowrap">Produccion</td>
                <td class="py-3 px-4 text-right">{formatoNumero(totalVolumens)}</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-lime-300">
                <td class="py-3 px-4 text-left whitespace-nowrap">Reproseso</td>
                <td class="py-3 px-4 text-right">{formatoNumero(resproceso)}</td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-lime-300">
                  <td class="py-3 px-4 text-left whitespace-nowrap">Despunte</td>
                  <td class="py-3 px-4 text-right">{formatoNumero(despunte)}</td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-lime-300">
                  <td class="py-3 px-4 text-left whitespace-nowrap">Humedo</td>
                  <td class="py-3 px-4 text-right">{formatoNumero(humedo)}</td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-lime-300">
                  <td class="py-3 px-4 text-left whitespace-nowrap">Rechazo</td>
                  <td class="py-3 px-4 text-right">{formatoNumero(rzo)}</td>
                </tr>
                <tr class="bg-lime-400 text-black uppercase text-sm leading-normal">
                  <td class="py-3 px-4 font-bold">Total</td>
                  <td class="py-3 px-4 font-bold text-right">{formatoNumero(totaltotal)}</td>
                </tr>
            </tbody>
          </table>
        </div>
      )}

            
            <button
              className="font-bold text-sm py-10"
              onClick={toggleCuadro}            
            >
              {cuadro ? '➖' : 'Cuadro General 📋'}
            </button>
            <div/>


            



        
 
    </Layout>
  ) 
}