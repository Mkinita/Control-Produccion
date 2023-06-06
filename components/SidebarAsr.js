import Image from "next/image";
import Link from "next/link"
import { useEffect, useCallback, useState } from "react"

const Sidebar = () => {

    const [isVisible3, setIsVisible3] = useState(false);
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const date = new Date();
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        setCurrentMonth(monthNames[date.getMonth()]);
    }, []);

       
    const toggleVisibility3 = () => {
        setIsVisible3(!isVisible3);
    };
    
    return(
        <>
            <Image width={280} height={100} src="/assets/img/AGRF.png" alt="logo" className="m-auto"/>
            <div class="px-3 py-4 overflow-y-auto rounded bg-white">
                <ul class="space-y-2">

                    <li>
                        <button
                            className="flex w-full items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase"
                            onClick={toggleVisibility3}                  
                        >

                        {isVisible3 ? '➖ ASERRADERO' : '📋 ASERRADERO'}
                        </button>
                        {isVisible3 && (
                            <div className="p-2 space-y-1">
                                <li>
                                    <Link href="/ingreso-aserradero" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ➕
                                        <span class="ml-3">Ingreso Produccion</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/ingreso-escuadria" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ➕
                                        <span class="ml-3">Ingresar Escuadria</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/aserradero-actual" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📆
                                        <span class="ml-3">Produccion Actual</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/listado-producciones-fecha-asr" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📅
                                        <span class="ml-3">Producciones</span>
                                    </Link>                                   
                                </li>


                                <li>
                                    <Link href="/acumulado-asr" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📅
                                        <span class="ml-3">Acumulado {currentMonth}</span>
                                        
                                    </Link>  
                                </li>


                                <li>
                                    <Link href="/imprecion-etiqueta-asr" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        🎫
                                        <span class="ml-3">Etiquetas</span>
                                    </Link>
                                </li>
                            </div>
                        
                        )}
                    </li>  
                </ul> 
            </div>
        </>
    )
}


export default Sidebar