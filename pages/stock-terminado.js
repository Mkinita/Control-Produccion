import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import StockTerminado from '../components/StockTerminado'
import TablaTerminado from '@/components/TablaTerminado'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'
import {formatoNumero} from "helpers/formato";
import Head from 'next/head'

export default function AdminProducciones() {

    const fetcher = () => axios('/api/stock').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/stock',fetcher,{refreshInterval: 100} )


//     const [permission, setPermission] = useState('default')

//   // Solicitar permiso al usuario para mostrar notificaciones
//   useEffect(() => {
//     if (Notification.permission !== 'granted') {
//       Notification.requestPermission().then(status => {
//         setPermission(status)
//       })
//     } else {
//       setPermission('granted')
//     }
//   }, [])


// // Mostrar notificación cuando se recibe una respuesta de la API
// useEffect(() => {
//   if (data) {
//     const notification = new Notification('Nueva información agregada', {
//       body: 'Se ha agregado nueva información a la API'
//     })
//   }
// }, [data])


    

    // const { data, error, isLoading } = useSWR('/api/stock',fetcher,{refreshInterval: 100} )


    

    // // Mostrar notificación cuando se recibe una respuesta de la API
    // useEffect(() => {
    // if (data) {
    //     const notification = new Notification('Nueva información agregada', {
    //     body: 'Se ha agregado nueva información a la API'
    //     })
    // }
    // }, [data])

    


    

    const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/stock'
  
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setUsers(data)
    }   
       //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value)   
    }
    //  metodo de filtrado 2   
    const results = !search ? users : users.filter((dato)=> JSON.stringify(dato.pedido).toLowerCase().includes(search.toLowerCase()))



    
    

     useEffect( ()=> {
      showData()
    }, [])


    const [totalVolumen, setTotalVolumen] = useState(0);
    const [totalCantidad, setTotalCantidad] = useState(0);




    const sumarVolumenes = () => {
        let suma = 0;
        results.forEach((satock) => {
          satock.pedido.forEach((oc) => {
            suma += oc.espesor * oc.ancho * oc.largo * oc.piezas * oc.cantidad / 1000000;
          });
        });
      setTotalVolumen(suma);
      };
    
    
      const sumarCantidades = () => {
        let suma = 0;
        results.forEach((satock) => {
          satock.pedido.forEach((oc) => {
            suma += oc.cantidad;
          });
        });
      setTotalCantidad(suma);
      };
    
    
    
    
    function calcularVolumen() {
      sumarVolumenes();
      sumarCantidades();
    }




    

    return(
        <AdminLayout pagina={'Produccion-fecha'}>
          <Head>
            <meta name="description" content="Carlos Jerez" />
            <link rel="icon" href="/CJ.png" />
            <title>Control Produccion AGR</title>
            <meta property="og:image" content="/CJ.png" />
            <meta name="twitter:image" content="/CJ.png" />
          </Head>

            <h1 className="text-3xl font-black text-center">Stock Terminado</h1>
            <p className="text-2xl my-10"></p>
            <div className='flex justify-center items-center  m-auto gap-2 border border-solid border-lime-400 hover:scale-95 rounded-xl'>
              <button className="py-2 px-4 text-black" onClick={calcularVolumen}>Resumen</button>
              <p className="">{formatoNumero(totalVolumen)} m³</p>
              <p className="">Cantidad {formatoNumero(totalCantidad)}</p>
            </div>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Fecha' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <TablaTerminado/>
            {data && data.length ? results.map(orden =>
                
                <StockTerminado
                    key={orden.id}
                    orden={orden}
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }

        </AdminLayout>

        
    )

    
}