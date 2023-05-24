import React from 'react'
import {formatiarFecha} from "helpers/fecha"
import axios from 'axios';
import QRGeneratorAsr from '../components/QRGeneratorAsr';
import { useRouter } from 'next/router'
import { toast } from "react-toastify"
import Link from 'next/link';
import {formatoNumero} from "helpers/formato"



const Etiquetas = ({asr}) => {



    const {id,espesor,ancho,largo,piezas,calidad,fecha,cantidad} = asr;

    const router = useRouter()

    const completarOc = async () => {

      try {

         await axios.post(`/api/editaretiqueta/${id}`)
          toast.success('🏠')
          setTimeout(() =>{
            router.push('/')
        },1000)
      } catch (error) {
          console.log(error)
      }
    }


    
    const myNumber = id;
  return (
    <div className="w-full h-full">
      
      <div className='text-center'>
        
        
                
                  <h3 className='text-lg font-bold'>{espesor}x{ancho}x{largo}</h3>
                  <p className='text-sm font-bold'>{calidad}</p>
                  
                  <p className='text-sm font-bold'>{formatiarFecha(fecha)}</p>
                  <div className='py-1'>
      <QRGeneratorAsr asr={('https://control-produccion-production.up.railway.app/etiquetaasr/')+ ('/')+(id)} />
      <p className='text-sm font-bold py-1'>N°: {id}</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">{formatoNumero(espesor * ancho * largo * piezas *cantidad / 1000000 )} m³</p>
    
          
        </div>
        
      


<div className='grid gap-4 grid-cols-2 md:grid-cols-2 2xl:grid-cols-2'>  

<button
                className=" uppercase font-bold rounded-xl text-right"
                type="button"
                onClick={completarOc}
                >
                    ➕

                </button>



                <button className="text-center" onClick={() => window.print()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                    </svg>

                </button>
        
        
    </div>
    

      
    </div>
    </div>



  )
}

export default Etiquetas