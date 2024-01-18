import useSWR from 'swr'
import axios from 'axios'
import LayoutCalles from "../layout/LayoutCalles"
import ListadoProduccion from '../components/ListadoProduccion'
import Tabla from '@/components/Tabla'
import StockCalles from '@/components/StockCalles'
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
  const results = !search ? users : users.filter((dato)=> JSON.stringify(dato.calle).toLowerCase().includes(search.toLowerCase()))


  
  

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
        <LayoutCalles pagina={'Listado-OC'}>

            <h1 className="text-3xl font-black text-center">Calles Saldos</h1>
            {/* <p className='py-2 text-center'>Fecha: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p> */}


            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Calle' className='border rounded-lg text-center'/> 
            </div>

            <div className='flex justify-center items-center gap-2 pb-2'>
            <button className="py-2 px-4 text-black " onClick={sumarVolumenes}>Calcular Volumen</button>
            <p className="">{formatoNumero(totalVolumen)} m³</p>
            </div>
           
            {data && data.length ? results.map(saldo =>
                
                <StockCalles
                    key={saldo.id}
                    saldo={saldo}
                />

                ):
                <p className='text-center m-10'>Sin Reprocesos</p>
            } 


                
            




            
        </LayoutCalles>

        
    )
}
