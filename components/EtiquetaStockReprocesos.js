import React from 'react';
import QRGenerator from './QRGenerator';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const EtiquetaStock = ({ saldo }) => {
  const { nombre, id, calidad, espesor, ancho, largo, piezas } = saldo;
  const router = useRouter();

  const eliminarRegistro = async () => {
    try {
      const response = await fetch(`/api/eliminarreproceso/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success(`Etiqueta ${id} eliminada`);
        setTimeout(() => {
          router.push('/etiqueta-saldo-control');
        }, 1000);
      } else {
        throw new Error('Error al eliminar la etiqueta');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border p-3 w-full h-full">
      <div className="p-5 text-center border">
        <p className="text-lg font-bold py-1">{nombre}</p>
        <p className="text-lg font-bold py-1">{calidad}</p>
        <p className="text-m font-bold py-1">
          {espesor}x{ancho}x{largo}
        </p>
        <p className="text-m font-bold py-1">Piezas: {piezas}</p>
        <div className="py-2">
          <QRGenerator
            saldo={('-Calidad:') + nombre + ('/') + ('/calidad:') + calidad + ('/N°:') + id}
          />
          <p className="text-sm font-bold py-1">N°: {id}</p>
        </div>
      </div>
      <button
        type="button"
        className="bg-lime-400 hover:bg-lime-500 text-white w-full mt-5 p-3 uppercase font-bold"
        onClick={eliminarRegistro}
      >
        Eliminar
      </button>
    </div>
  );
};

export default EtiquetaStock;
