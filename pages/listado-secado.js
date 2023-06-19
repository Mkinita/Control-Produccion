import useSWR from 'swr'
import axios from 'axios'
import AdminLayoutInforme from "../layout/AdminLayoutInforme"
import ProduccionSecado from '../components/ProduccionSecado'
import React, { useState, useEffect } from 'react';
import {formatoNumero} from "helpers/formato";
import { Bar } from 'react-chartjs-2';
import  ProduccionesEncabezado from '../components/ProduccionesEncabezado'
import  ProduccionesEncabezadodos from '../components/ProduccionesEncabezadodos'




export default function AdminProducciones() {

  const fetcher = () => axios('/api/produccion-secado').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/produccion-secado',fetcher,{refreshInterval: 100} )



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
  const URL = '/api/produccion-secado'
  
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
        label: 'Produccion Secado',
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
    <AdminLayoutInforme pagina={'Listado-OC'}>
      
      <ProduccionesEncabezado/>
      <p className="text-2xl my-10"></p>
      <div className='flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-black text-center">Secado</h2>
        <input value={search} onChange={searcher} type="text" placeholder='Filtrar Por Fecha 🔍' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 
      </div>

      <div className={`${isVisibleproveedor ? 'hidden' : ''}`}>
        <div className={`${cuadro ? 'hidden' : ''}`}>
        <table className="table-auto w-full text-center bg-white text-gray-700 font-bold">
                <tbody>
                    
                        <tr className="bg-white">
                            <td className="px-1 py-4 w-1/5 text-center border border-lime-400">Fecha</td>
                            <td className="px-1 py-4 w-1/5 text-center border border-lime-400">ING.</td>
                            <td className="px-1 py-4 w-1/5 text-center border border-lime-400">PRO.</td>
                            <td className="px-1 py-4 w-1/5 text-center border border-lime-400">m³/hr</td>
                            <td className="px-1 py-4 w-1/5 text-center border border-lime-400">%</td>
                        </tr>
                    
                </tbody>
            </table>

          {data && data.length ? results.map(producciones =>
            <ProduccionSecado
              key={producciones.id}
              producciones={producciones} 
            />
            ):
            <p className='text-center m-10'>Sin Produccion</p>
          }
          <table className="table-auto w-full text-center bg-white">
            <tbody>
                
                    <tr className="bg-white text-sm uppercase font-bold">
                        <td className="px-2 py-4 w-1/5 text-center">Total</td>
                        <td className="px-2 py-4 w-1/5 text-center">{formatoNumero(totalIngreso)}</td>
                        <td className="px-2 py-4 w-1/5 text-center">{formatoNumero(totalVolumens)}</td>
                        <td className="px-2 py-4 w-1/5 text-center">{formatoNumero(totalIngreso / 432)}</td>
                        <td className="px-2 py-4 w-1/5 text-center">{formatoNumero(totalVolumens / totalIngreso * 100)}%</td>
                        
                    </tr>
                
            </tbody>
        </table>
        </div>
      </div>

      

            <button
              className="font-bold text-sm py-10"
              onClick={toggleVisibilityproveedor}            
            >
              {isVisibleproveedor ? '➖' : 'Generar Gafico 📊'}
            </button>

            {isVisibleproveedor && ( 
            <div className='flex justify-center items-center gap-2'>
            <div className='w-full sm:w-1/2 p-2 m-auto items-center'>
              <Bar className='' data={data2} />
            </div>
            </div>
            )}
 
    </AdminLayoutInforme>
  ) 
}