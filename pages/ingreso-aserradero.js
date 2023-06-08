import { Inter } from '@next/font/google'
import LayoutAsr from '../layout/LayoutAsr'
import Paquetes from '../components/Paquetes'
import useCombustible from '../hooks/useCombustible'
import {useState, useEffect} from 'react'
import Head from 'next/head'





export default function Home() {

  const {faenaActual} = useCombustible()
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = '/api/paquetes'

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
   //metodo de filtrado 2   
   const results = !search ? users : users.filter((dato)=> dato.espesor01.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])


  

  return (
    
    <LayoutAsr pagina={`Inicio - Producto`}>
      <Head>
        <meta name="description" content="Carlos Jerez" />
        <link rel="icon" href="/CJ.png" />
        <title>Control Produccion AGR</title>
        <meta property="og:image" content="/CJ.png" />
        <meta name="twitter:image" content="/CJ.png" />
      </Head>
  
      <p className='text-2xl mx-5 my-3 text-center'>
        Ingresa Escuadría
      </p>
      <div className='mt-auto'>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
      </div>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-4 2xl:grid-cols-4'>  
        {results.map(paquet=>(
          <Paquetes key={paquet.id} paquet={paquet}/>
        ))}
      </div>
    </LayoutAsr>
  )
}