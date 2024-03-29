import Image from "next/image";
import Link from "next/link"
import { useEffect, useCallback, useState } from "react"

const Sidebar = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const date = new Date();
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        setCurrentMonth(monthNames[date.getMonth()]);
    }, []);


    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
      };

      
    return(
        <>
            <Image width={280} height={100} src="/assets/img/AGRF.png" alt="logo" className="m-auto"/>
            <div class="px-3 py-4 overflow-y-auto rounded bg-white">
                <ul class="space-y-2">
                    <li>
                        <button
                            className="flex w-full items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase"
                            onClick={toggleVisibility1}
                                            
                        >
                        {isVisible1 ? '➖ STACKER' : '📋 STACKER'}
                        </button>
                        
                        {isVisible1 && (
                            <div className="p-2 space-y-1">
                                <li>
                                    <Link href="/ingreso-empalillado" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ➕
                                    <span class="ml-3">Ingreso Produccion</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/empalillado-actual" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📆
                                        <span class="ml-3">Produccion Actual</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/listado-produciones-fecha-emp" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📅
                                        <span class="ml-3">Producciones</span>
                                    </Link>  
                                </li>  
                                <li>
                                    <Link href="/acumulado-stacker" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📅
                                        
                                        <span class="ml-3">Acumulado {currentMonth}</span>
                                        
                                    </Link>  
                                </li>

                                <li>
                                    <Link href="/turnos-emp" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📊
                                        <span class="ml-3">Turnos</span>
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