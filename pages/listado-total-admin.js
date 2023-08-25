import Head from 'next/head'
import useSWR from 'swr'
import LayoutIndicadores from "../layout/LayoutIndicadores"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useCallback, useState } from "react"
import {formatoNumero,formatoNumero1,formatoNumero2} from "helpers/formato";
import Produccion from '../components/Produccion'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { Bar } from 'react-chartjs-2';




export default function InformeAgr() {

    const [currentMonth, setCurrentMonth] = useState('');
    useEffect(() => {
        const date = new Date();
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        setCurrentMonth(monthNames[date.getMonth()]);
    }, []);

    const fetcherAsr = () => axios('/api/producion-aserradero').then(datos => datos.data)
    const { data:dataAsr, error:errorAsr, isLoading:isLoadingAsr } = useSWR('/api/producion-aserradero',fetcherAsr,{refreshInterval: 100} )

    const [data1, setData1] = useState([]);
      useEffect(() => {
        async function fetchData() {
        const response1 = await fetch('/api/producion-aserradero');
        const data1 = await response1.json();
        setData1(data1);
      }
  
      fetchData();
    }, []);



    let totalVolumens = 0;
    let totalIngreso = 0;

    data1.forEach((producciones) => {
        totalVolumens += parseFloat(producciones.volumen);
        totalIngreso += parseFloat(producciones.ingreso);
        
    });

    const proyeccion = totalIngreso !== 0 ? (totalVolumens / totalIngreso) * 100 : 0;


    const fetcherClasificado = () => axios('/api/producciones-clasificado').then(datos => datos.data)
    const { data: dataClasificado, error : errorClasificado, isLoading: isLoadingClasificado } = useSWR('/api/producciones-clasificado',fetcherClasificado,{refreshInterval: 100} )

    const [data2, setData2] = useState([]);
      useEffect(() => {
        async function fetchData2() {
        const response2 = await fetch('/api/producciones-clasificado');
        const data2 = await response2.json();
        setData2(data2);
      }
  
      fetchData2();
    }, []);



    let totalVolumenscla = 0;
    let totalIngresocla = 0;

    data2.forEach((produccioness) => {
        totalVolumenscla += parseFloat(produccioness.volumen);
        totalIngresocla += parseFloat(produccioness.ingreso);
        
    });

    const proyeccioncla = totalIngresocla !== 0 ? (totalVolumenscla / totalIngresocla) * 100 : 0;



    const fetcherDesp = () => axios('/api/produccion-despacho').then(datos => datos.data)
    const { data:dataDesp, error:errorDesp, isLoading:isLoadingDesp } = useSWR('/api/produccion-despacho',fetcherDesp,{refreshInterval: 100} )

    const [data7, setData7] = useState([]);
      useEffect(() => {
        async function fetchData7() {
        const response7 = await fetch('/api/produccion-despacho');
        const data7 = await response7.json();
        setData7(data7);
      }
  
      fetchData7();
    }, []);


    let totalVolumensdesp = 0;
    let totalIngresodesp = 0;
    let totalIngreso01desp = 0;

    data7.forEach((produccioness) => {
        totalVolumensdesp += parseFloat(produccioness.volumen);
        totalIngresodesp += parseFloat(produccioness.ingreso);
        totalIngreso01desp += parseFloat(produccioness.ingreso01);
        
    });


    const total_despacho = (totalIngresodesp + totalVolumensdesp + totalIngreso01desp)

    
    


    
    
    
    
    
    
    const fetcherEmpalillado = () => axios('/api/produccion-empalillado').then(datos => datos.data)
    const { data: dataEmpalillado, error: errorEmpalillado, isLoading: isLoadingEmpalillado } = useSWR('/api/produccion-empalillado',fetcherEmpalillado,{refreshInterval: 100} )


    const [data3, setData3] = useState([]);
      useEffect(() => {
        async function fetchData3() {
        const response3 = await fetch('/api/produccion-empalillado');
        const data3 = await response3.json();
        setData3(data3);
      }
  
      fetchData3();
    }, []);



    let totalVolumensemp = 0;
    let totalIngresoemp = 0;

    data3.forEach((produccionesss) => {
        totalVolumensemp += parseFloat(produccionesss.volumen);
        totalIngresoemp += parseFloat(produccionesss.volumen);
        
    });

    const proyeccionemp = totalIngresoemp !== 0 ? (totalVolumensemp / totalIngresoemp) * 100 : 0;


    const dataemp = {
        labels: data3.map((producciones) => producciones.fecha),
        datasets: [
          {
            label: 'Produccion Stacker',
            data: data3.map((producciones) => producciones.volumen),
            backgroundColor: ' #a3e635',
            borderColor: ' #a3e636',
            borderWidth: 1,
            barPercentage: 0.3, // Ancho de las barras
            categoryPercentage: 1, // Espacio entre barras
          },
        ],
      };






      const fetcherSecado = () => axios('/api/produccion-secado').then(datos => datos.data)
      const { data: dataSecado, error: errorSecado, isLoading: isLoadingSecado } = useSWR('/api/produccion-secado',fetcherEmpalillado,{refreshInterval: 100} )
  
  
      const [data4, setData4] = useState([]);
        useEffect(() => {
          async function fetchData4() {
          const response4 = await fetch('/api/produccion-secado');
          const data4 = await response4.json();
          setData4(data4);
        }
    
        fetchData4();
      }, []);
  
  
  
      let totalVolumensseco = 0;
      let totalIngresoseco = 0;
  
      data4.forEach((produccionesss) => {
          totalVolumensseco += parseFloat(produccionesss.volumen);
          totalIngresoseco += parseFloat(produccionesss.ingreso);
          
      });
  
      const proyeccionseco = totalIngresoseco !== 0 ? (totalVolumensseco / totalIngresoseco) * 100 : 0;
  
  
      const dataseco = {
          labels: data4.map((producciones) => producciones.fecha),
          datasets: [
            {
              label: 'secado',
              data: data4.map((producciones) => producciones.volumen),
              backgroundColor: ' #a3e635',
              borderColor: ' #a3e636',
              borderWidth: 1,
              barPercentage: 0.3, // Ancho de las barras
              categoryPercentage: 1, // Espacio entre barras
            },
          ],
        };




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



        const diastotalestrabajados = (TOTAL / 9)

        const graficodesp = (totalIngresodesp + totalVolumensdesp + totalIngreso01desp)/ diastotalestrabajados / 50




    const fetcher = () => axios('/api/descortezador').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/descortezador',fetcher,{refreshInterval: 100} )


        
    const [data8, setData8] = useState([]);
        useEffect(() => {
        async function fetchData() {
        const response8 = await fetch('/api/descortezador');
        const data8 = await response8.json();
        setData8(data8);
        }

        fetchData();
    }, []);


    let totalIngresodzo = 0;

    data8.forEach((produccionesss) => {
        totalIngresodzo += parseFloat(produccionesss.cantidad);
        
    });


    const graficodzo = (totalIngresodzo / (TOTAL * 60))




    const fetcherPrt = () => axios('/api/partidoras').then(datos => datos.data)
    const { data:dataprt, error:errorprt, isLoading:isLoadingprt } = useSWR('/api/partidoras',fetcherPrt,{refreshInterval: 100} )


        
    const [data9, setData9] = useState([]);
        useEffect(() => {
        async function fetchData() {
        const response9 = await fetch('/api/partidoras');
        const data9 = await response9.json();
        setData9(data9);
        }

        fetchData();
    }, []);


    let totalIngresoprt = 0;

    data9.forEach((produccionesss) => {
        totalIngresoprt += parseFloat(produccionesss.volumen);
        
    });




    const dataprts = {
        labels: data9.map((producciones) => producciones.fecha),
        datasets: [
          {
            label: 'secado',
            data: data9.map((producciones) => producciones.volumen),
            backgroundColor: ' #a3e635',
            borderColor: ' #a3e636',
            borderWidth: 1,
            barPercentage: 0.3, // Ancho de las barras
            categoryPercentage: 1, // Espacio entre barras
          },
        ],
      };



   return (
        <>
            <LayoutIndicadores pagina='Informe-agr'>
                <Head>
                    <meta name="description" content="Carlos Jerez" />
                    <link rel="icon" href="/CJ.png" />
                    <title>Control Produccion AGR</title>
                    <meta property="og:image" content="/CJ.png" />
                    <meta name="twitter:image" content="/CJ.png" />
                </Head>
                
                <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Indicadores {currentMonth}</h2>
                        
                        <div className="flex space-x-4">
                        <div className="flex items-center">
                            <span className="bg-green-500 rounded-full w-4 h-4 mr-2"></span>
                            <span>✔️</span>
                        </div>
                        <div className="flex items-center">
                            <span className="bg-red-500 rounded-full w-4 h-4 mr-2"></span>
                            <span>❌</span>
                        </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">



                        <div className="bg-white p-4 rounded-md shadow">
                            <div className='flex items-center'>
                                <h2 className="text-lg font-semibold text-right ml-6">Descortezador</h2>
                                <div style={{ width: '42%', margin: 'auto',}}>
                                    <CircularProgressbar
                                        styles={buildStyles({
                                            pathColor: graficodzo >= 4.5 ? '#22c55e' : '#DC2626',
                                            trailColor: '#F5F5F5',
                                            textColor: '#0a0a0a',
                                            textSize:'14px'
                                            
                                        })}
                                        value={100}
                                        text={`${formatoNumero2(graficodzo)} / Minuto`}
                                    />


                                </div>
                            </div>
                            <div className='flex justify-center py-6'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="4">Real </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Ingreso</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresodzo)}</td> 
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresodzo / (TOTAL * 60))} Trozos / Minuto</td>  
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>







                        <div className="bg-white p-4 rounded-md shadow">
                            <div className='flex items-center'>
                                <h2 className="text-lg font-semibold text-right ml-6">Aserradero</h2>
                                <div style={{ width: '40%', margin: 'auto' }}>
                                    <CircularProgressbar
                                        styles={buildStyles({
                                            pathColor: proyeccion >= 47 ? '#22c55e' : '#DC2626',
                                            trailColor: '#F5F5F5',
                                            textColor: '#0a0a0a',
                                        })}
                                        value={100}
                                        text={`${formatoNumero(proyeccion)}%`}
                                    />


                                </div>
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Ingreso</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngreso)} m³</td> 
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngreso / TOTAL * TOTAL_)} m³</td>  
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumens)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumens / TOTAL * TOTAL_)} m³</td>   
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>



                        <div className="bg-white p-4 rounded-md shadow">
                            <div className=''>
                                <h2 className="text-lg text-center font-semibold">Partidoras</h2>
                                <div className='p-2 m-auto items-center hidden sm:block'>
                                <Bar className='' data={dataprts} />
                                </div>

                               
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresoprt)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresoprt / TOTAL * TOTAL_)} m³</td>   
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>




                        <div className="bg-white p-4 rounded-md shadow">
                            <div className=''>
                                <h2 className="text-lg text-center font-semibold">Stacker</h2>
                                <div className='p-2 m-auto items-center hidden sm:block'>
                                <Bar className='' data={dataemp} />
                                </div>

                               
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                                
                                            </tr>
                                            
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Verde</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresoemp)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumensemp /TOTAL * TOTAL_)} m³</td>   
                                            </tr>
                                            

                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Seco</td>
                                                <td className="border border-lime-200 px-1 py-2">697.1 m³</td>
                                                <td className="border border-lime-200 px-1 py-2">958.5 m³</td>   
                                            </tr>

                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Total</td>
                                                <td className="border border-lime-200 px-1 py-2 text-center">{formatoNumero(totalIngresoemp + 697.1)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2 text-center">{formatoNumero(totalVolumensemp /TOTAL * TOTAL_ + 958.5)} m³</td>
                                               
                                            </tr>

                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>


                        <div className="bg-white p-4 rounded-md shadow">
                            <div className=''>
                                <h2 className="text-lg text-center font-semibold">Secado</h2>
                                <div className='p-2 m-auto items-center hidden sm:block'>
                                <Bar className='' data={dataseco} />
                                </div>

                               
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresoseco)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresoseco  / 432 * 744)} m³</td>   
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>





                        <div className="bg-white p-4 rounded-md shadow">
                            <div className='flex items-center'>
                                <h2 className="text-lg font-semibold text-right ml-6">Clasificacion</h2>
                                <div style={{ width: '40%', margin: 'auto' }}>
                                    <CircularProgressbar
                                        styles={buildStyles({
                                            pathColor: proyeccioncla >= 96.5 ? '#22c55e' : '#DC2626',
                                            trailColor: '#F5F5F5',
                                            textColor: '#0a0a0a',
                                        })}
                                        value={100}
                                        text={`${formatoNumero(proyeccioncla)}%`}
                                    />


                                </div>
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Ingreso</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresocla)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresocla / TOTAL * TOTAL_)} m³</td>   
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumenscla)} m³</td> 
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumenscla / TOTAL * TOTAL_)} m³</td>  
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        {/* //Despacho// */}

                        <div className="bg-white p-4 rounded-md shadow">
                            <div className='flex items-center'>
                                <h2 className="text-lg font-semibold text-right ml-6">Despacho</h2>
                                <div style={{ width: '40%', margin: 'auto' }}>
                                    <CircularProgressbar
                                        styles={buildStyles({
                                            pathColor: graficodesp > 3.0 ?'#22c55e' : '#DC2626',
                                            trailColor: '#F5F5F5',
                                            textColor: '#0a0a0a',
                                        })}
                                        value={100}
                                        text={`${formatoNumero1(graficodesp)} Cargas`}
                                    />


                                </div>
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>

                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2"></td>
                                                <td className="border border-lime-200 px-1 py-2">Seco</td>
                                                <td className="border border-lime-200 px-1 py-2">Verde</td>   
                                                <td className="border border-lime-200 px-1 py-2">Servicio</td>   
                                                <td className="border border-lime-200 px-1 py-2">Total</td>   
                                            </tr>
                                            
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Real</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresodesp)} m³</td> 
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngreso01desp)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumensdesp)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(total_despacho)} m³</td>  
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Proyeccion</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresodesp / TOTAL * TOTAL_)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngreso01desp / TOTAL * TOTAL_)} m³</td> 
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumensdesp/ TOTAL * TOTAL_)} m³</td> 
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(total_despacho / TOTAL * TOTAL_)} m³</td>   
                                            </tr>

                                            

                                            

                                            
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        {/* ///// */}

                        
                        

                        
                        
                        
                    

                        
                        
                        
                    </div>
                    
                    
                </div>

                <div className='py-8 pb-5 m-auto text-center'>
                    <Link href="/stock-terminado" class="border border-lime-400 px-2 p-2">
                        <span class="">🏠 Inicio</span>
                    </Link>
                </div>
            

                
                
                
            
            </LayoutIndicadores>
        
        </>
        
   )
}


            