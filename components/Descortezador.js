import {formatiarFecha} from "helpers/fecha"
import {formatoNumero,formatoNumeroDes} from "helpers/formato"
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { format, parseISO } from 'date-fns';
import useSWR from 'swr'
import React, { useState, useEffect } from 'react';

const ListadoProduccion = ({producciones}) => {
    const {id, cantidad, fecha, nombre,ingreso} = producciones

    const fechaS = typeof fecha === 'string' ? parseISO(fecha) : fecha;
    const fechaFormateada = format(fechaS, 'MMMM dd');


    const fetcherSeco = () => axios('/api/horas').then(datos => datos.data)
  const { data: dataSeco, error: errorSeco, isLoading: isLoadingSeco } = useSWR('/api/horas', fetcherSeco, { refreshInterval: 100 })

  const [data5, setData5] = useState([]);
  const [users5, setUsers5] = useState([]);

    // Función para traer los datos de la API
    const URLSxxxx = '/api/horas';
    const showData5 = async () => {
    const response5 = await fetch(URLSxxxx);
      const data5 = await response5.json();
      setUsers5(data5);
    };

      useEffect(() => {
      showData5();
      }, []);

        // Obtener horas mes y horas trabajadas como enteros
        const horasMes = users5.map(user => parseInt(user.horasmes, 10));
        const horasTrabajadas = users5.map(user => parseInt(user.horastrabajadas, 10));

        // Sumar las horas
        const horasmes = horasMes.reduce((total, hora) => total + hora, 0)
        const horstrabajo = horasTrabajadas.reduce((total, hora) => total + hora, 0);

       
        const TOTAL_ = horasmes;
        const TOTAL = horstrabajo;

        const TotalMinutos = TOTAL * 60

    

    

  return (

    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                
                    <tr className="bg-white border-b hover:bg-lime-300 text-sm">
                        <td className="px-2 py-4 w-1/5 text-center border border-lime-400">{fechaFormateada}</td>
                        <td className="px-2 py-4 w-1/5 text-center border border-lime-400">{cantidad}</td>
                        <td className="px-2 py-4 w-1/5 text-center border border-lime-400">{formatoNumeroDes(cantidad / TotalMinutos)}</td>
                        
                    </tr>
                
            </tbody>
        </table>
    </>
  )
}

export default ListadoProduccion
