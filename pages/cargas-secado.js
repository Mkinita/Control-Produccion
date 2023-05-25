import useSWR from 'swr'
import axios from 'axios'
import LayoutSeco from "../layout/LayoutSeco"
import CargasSecado from '../components/CargasSecado'
import Tabla from '@/components/Tabla'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'
import {formatoNumero} from "helpers/formato";

export default function AdminProducciones() {

    const fetcher = () => axios('/api/cargas-camaras').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/cargas-camaras',fetcher,{refreshInterval: 100} )


    const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/cargas-camaras'
  
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
    const results = !search ? users : users.filter((dato)=> dato.fecha.toLowerCase().includes(search.toLocaleLowerCase()))

     useEffect( ()=> {
      showData()
    }, [])


    const [totalVolumen, setTotalVolumen] = useState(0);
  

  

    const sumarVolumenes = () => {
        let suma = 0;
        results.forEach((emp) => {
            suma += emp.espesor * emp.ancho * emp.largo * emp.piezas * emp.cantidad / 1000000;
        
        });
        setTotalVolumen(suma);
    };


  

  


function calcularVolumen() {
  sumarVolumenes();
}



    return(
        <LayoutSeco pagina={'Produccion-fecha'}>

            <h1 className="text-xl font-black text-center">BUSCAR PRODUCCION POR FECHA</h1>
            <p className="text-2xl my-10"></p>
            <div className='flex justify-center items-center w-1/2 m-auto gap-2 border border-solid border-amber-400 hover:scale-95 rounded-xl'>
              <button className="py-2 px-1 text-black " onClick={calcularVolumen}>Resumen</button>
              <p className="">{formatoNumero(totalVolumen)} m³</p>
            </div>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Fecha' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <table className="table-auto w-full text-center bg-white text-gray-700">
                <tbody>
                    
                    <tr className="bg-white border-b font-bold text-sm">
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">Fecha</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">Camara</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">Volumen</td>
                    </tr>
                </tbody>
            </table>
            
            {data && data.length ? results.map(seco =>
                
                <CargasSecado
                    key={seco.id}
                    seco={seco}
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }


        </LayoutSeco>

        
    )

    
}