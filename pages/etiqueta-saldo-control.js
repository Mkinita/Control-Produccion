import { Inter } from '@next/font/google'
import AdminLayout from '../layout/AdminLayout'
import {useState, useEffect} from 'react'
import EtiquetaStockReprocesos from '@/components/EtiquetaStockReprocesos'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {





  const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/reprocesos'
  
    const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      //console.log(data)
      setDatos(data)
    }   
     //función de búsqueda
    const buscador = (e) => {
        setBuscar(e.target.value)   
    }
    
    const results = !buscar ? datos : datos.filter((dato) => {
        const id = typeof dato.id === 'string' ? dato.id : String(dato.id);
        return id.toLowerCase().includes(buscar.toLowerCase());
      });
      
    
     useEffect( ()=> {
      showData()
    }, [])

  return (
    <AdminLayout pagina={`Inicio - Producto`}>
    
      {/* <h1 className='text-4xl font-black'>{faenaActual?.nombre}</h1> */}
      <p className='text-2xl mx-5 my-3 py-0'>
        Etiquetas Reprocesos
      </p>
      <div className='mt-auto'>
        <input value={buscar} onChange={buscador} type="text" placeholder='Buscar' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-1'>  
        {results.map(saldo=>(
          <EtiquetaStockReprocesos key={saldo.id} saldo={saldo}/>
        ))}
      </div>
    </AdminLayout>
  )
}
