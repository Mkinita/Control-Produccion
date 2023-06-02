import Image from "next/image";
import Link from "next/link"
import { useEffect, useCallback, useState } from "react"

const Sidebar = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const date = new Date();
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        setCurrentMonth(monthNames[date.getMonth()]);
    }, []);

       
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return(
        <>
            <Image width={280} height={100} src="/assets/img/AGRF.png" alt="logo" className="m-auto"/>
            <div class="px-3 py-4 overflow-y-auto rounded bg-white">
                <ul class="space-y-2">
                    <li>
                        <button
                            className="flex w-full items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase"
                            onClick={toggleVisibility}
                                            
                        >
                            {isVisible ? '➖ CLASIFICACION' : '📋 CLASIFICACION'}
                        </button>
                        {isVisible && (
                            <div className="p-2 space-y-1">
                                

                                <li>
                                    <Link href="/" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ➕
                                        <span class="ml-3">Ingresar Produccion</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/saldos" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ➕
                                        <span class="ml-3">Ingresar Saldos</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/listado-producciones" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📆
                                        <span class="ml-3">Produccion Actual</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/listado-produciones-fecha" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📅
                                        <span class="ml-3">Producciones</span>
                                    </Link>                                   
                                </li>


                                <li>
                                    <Link href="/acumulado" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📅
                                        <span class="ml-3">Acumulado {currentMonth}</span>
                                        
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/listado-producciones.-saldo" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📝
                                        <span class="ml-3">Saldos Actual</span>
                                    </Link>
                                </li>


                                <li>
                                    <Link href="/imprecion-etiqueta" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        🎫
                                        <span class="ml-3">Etiquetas</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/imprecion-etiqueta-saldo" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        🎫
                                        <span class="ml-3">Etiquetas Saldo</span>
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