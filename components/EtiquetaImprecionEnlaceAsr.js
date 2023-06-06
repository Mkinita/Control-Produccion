import React from 'react'
import {formatiarFecha} from "helpers/fecha"
import axios from 'axios';
import QRGeneratorAsr from './QRGeneratorAsr';
import {formatoNumero} from "helpers/formato"
import { useRouter } from 'next/router'
import { toast } from "react-toastify"
import Link from 'next/link';


const Etiquetas = ({asr}) => {



    const {id,pedido,espesor,ancho , largo , piezas ,cantidad,calidad,fecha} = asr;

    const router = useRouter()



  

  


    
    const myNumber = id;

    console.log(myNumber)
  return (

    <div className="w-full h-full">
      
      <div className='text-center'>
                  <p className='text-lg font-bold '>{espesor}x{ancho}x{largo}x{piezas}</p>
                  <p className='text-sm font-bold '>{calidad}</p>
                  <p className='text-sm font-bold'>{formatiarFecha(fecha)}</p>
                  <div className='py-1'>
      <QRGeneratorAsr asr={('https://control-produccion-production.up.railway.app/etiquetaasr')+ ('/')+(id)} />
      <p className='text-sm font-bold py-1'>N°: {id}</p>
      <p className="text-sm text-gray-700 mt-2 font-bold">{formatoNumero(espesor * ancho * largo * piezas *1 / 1000000 )} m³</p>
    </div>
    </div>
    
    </div>



  )
}



export default Etiquetas