import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { format, parseISO } from 'date-fns';

const ListadoProduccion = () => {




  return (

    <>
        
    
        <table className="table-auto w-full text-center bg-white text-gray-700 font-bold ">
            <tbody>
                
                    <tr className="bg-white border-b  text-sm">
                        <td className="px-1 py-4 w-1/5 text-center border border-lime-400 ">Fecha</td>
                        <td className="px-1 py-4 w-1/5 text-center border border-lime-400">Ingr.</td>
                        <td className="px-2 py-4 w-1/5 text-center border border-lime-400">m³/hr</td>
                        <td className="px-2 py-4 w-1/5 text-center border border-lime-400">Pro.</td>
                        <td className="px-2 py-4 w-1/5 text-center border border-lime-400">m³/hr</td>
                        <td className="px-5 py-4 w-1/5 text-center border border-lime-400">%</td>
                        
                    </tr>


                    
                
            </tbody>
        </table>
    </>
  )
}

export default ListadoProduccion
