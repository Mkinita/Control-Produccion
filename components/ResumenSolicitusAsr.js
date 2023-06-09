import Image from "next/image"
import useCombustible from "../hooks/useCombustible"
import {formatoNumero} from "helpers/formato";

const ResumenSolicitud = ({paquet}) => {

  const {handleElimanarSolicitudAsr,} = useCombustible()

  return (
    <div className="shadow p-5 mb-3 grid gap-1 grid-cols-1 items-center">
        <div className="flex justify-end">
          <button onClick={() => handleElimanarSolicitudAsr (paquet.id) }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
        <div className="md:w-4/6">
            <p className="text-lg font-bold text-center">{paquet.espesor01} x {paquet.detalle}</p>
            <p className="text-sm font-bold mt-2 text-center">Cantidad: 1</p>
            <p className="text-lg font-bold text-center">{formatoNumero( paquet.espesor * paquet.ancho * paquet.largo * paquet.piezas * 1 / 1000000)} m³</p>
        </div>
    </div>
  )
}

export default ResumenSolicitud