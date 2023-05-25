import Image from "next/image";
import Link from "next/link"
import { useEffect, useCallback, useState } from "react"

const Sidebar = () => {

    const [isVisible2, setIsVisible2] = useState(false);
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const date = new Date();
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        setCurrentMonth(monthNames[date.getMonth()]);
    }, []);

    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };

    return(
        <>
            <Image width={280} height={100} src="/assets/img/AGRF.png" alt="logo" className="m-auto"/>
            <div class="px-3 py-4 overflow-y-auto rounded bg-white">
                <ul class="space-y-2">
                    <li>
                        <button
                            className="flex w-full items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase"
                            onClick={toggleVisibility2}
                                            
                        >
                            {isVisible2 ? '➖ SECADO' : '📋 SECADO'}
                        </button>
                        {isVisible2 && (
                            <div className="p-2 space-y-1">
                                <li>
                                    <Link href="/ingreso-camaras" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        ➕
                                        <span class="ml-3">Ingreso Produccion</span>
                                   </Link>
                                </li>
                                <li>
                                    <Link href="/dentro-camaras" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📋
                                        <span class="ml-3">Dentro Camaras</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/cargas-secado" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📦
                                    <span class="ml-3">Cargas {currentMonth}</span>
                                </Link>  
                                </li>
                                
                                <li>
                                    <Link href="/acumulado-secado" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                                        📅
                                    <span class="ml-3">Acumulado {currentMonth}</span>
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