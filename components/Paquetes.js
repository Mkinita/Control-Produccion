import React from 'react'
import Image from "next/image";
import useCombustible from '../hooks/useCombustible';

const Equipo = ({paquet}) => {


  

    const {handlesetPaquete, handleChangeModal} =useCombustible()
    const {detalle} = paquet;
  return (
    <div className="border p-2 w-full h-full">
      
      <div className='p-2 text-center'>
        <h3 className='text-2xl font-bold'>{detalle}</h3>
        
        <button
            type='button'
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-2 uppercase font bold'
            onClick={()=> {
              handleChangeModal();
              handlesetPaquete(paquet)
            }}
        >
            Agregar
        </button>
      </div>
    </div>
  )
}

export default Equipo