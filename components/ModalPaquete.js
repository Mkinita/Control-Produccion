import { useState, useEffect } from "react";
import Image from "next/image";
import useCombustible from "../hooks/useCombustible";

const ModalEquipo = () => {
  const { paquete, handleChangeModal, handleAgregarPaquete, pedido02 } = useCombustible();
  

  return (
    <div className="md:flex gap-10">

      <div className="md:w-">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-2xl font-bold mt-1 text-center pb-4 py-2">{paquete.detalle}</h1>

              
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => handleAgregarPaquete({ ...paquete})}
        >
          {"Agregar"}
        </button>
      </div>
    </div>
  );
};

export default ModalEquipo;