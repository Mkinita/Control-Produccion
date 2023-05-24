import ImprecionLayout from "../layout/ImprecionLayout"
import useSWR from 'swr'
import axios from 'axios'
import EtiquetaImprecionAsr from '../components/EtiquetaImprecionAsr'



export default function OrdenCompra() {



    const fetcher = () => axios('/api/asr-etiquetas').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/asr-etiquetas',fetcher,{refreshInterval: 100} )

   return (
        <ImprecionLayout pagina='Produccion'>
            
            <p className="text-2xl"></p>
            {data && data.length ? data.map(asr =>
                
                <EtiquetaImprecionAsr
                    key={asr.id}
                    asr={asr}
                />

                ):<p> Sin Etiquetas Pendientes</p>}
        </ImprecionLayout>
   )
}