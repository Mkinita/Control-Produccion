
import useSWR from 'swr'
import axios from 'axios'
import LayoutAsr from "../layout/LayoutAsr"
import ListadoProduccionFechaAsr from '../components/ListadoProduccionFechaAsr'
import * as XLSX from 'xlsx'
import { useState, useEffect } from 'react'
import { formatoNumero } from "helpers/formato"

export default function AdminProducciones() {

    const fetcher = () => axios('/api/listado-produccion-fecha-asr')
        .then(datos => datos.data)

    const { data, error, isLoading } = useSWR(
        '/api/listado-produccion-fecha-asr',
        fetcher,
        { refreshInterval: 100 }
    )

    const [users, setUsers] = useState([])
    const [fechaDesde, setFechaDesde] = useState('')
    const [fechaHasta, setFechaHasta] = useState('')
    const [totalVolumen, setTotalVolumen] = useState(0)

    // Traer producciones
    const URL = '/api/listado-produccion-fecha-asr'

    const showData = async () => {
        try {
            const response = await fetch(URL)
            const datos = await response.json()
            setUsers(datos)
        } catch (error) {
            console.error('Error al cargar producciones:', error)
        }
    }

    useEffect(() => {
        showData()
    }, [])

    // Convertir fecha a formato comparable YYYY-MM-DD
    const convertirFecha = (fecha) => {
        if (!fecha) return ''

        const valor = String(fecha).substring(0, 10)

        if (/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
            return valor
        }

        const partes = valor.split('-')

        if (partes.length === 3) {
            return `${partes[2]}-${partes[1]}-${partes[0]}`
        }

        return valor
    }

    // Filtrar entre fechas
    const results = users.filter((dato) => {
        const fecha = convertirFecha(dato.fecha)

        if (!fechaDesde && !fechaHasta) return true
        if (fechaDesde && fecha < fechaDesde) return false
        if (fechaHasta && fecha > fechaHasta) return false

        return true
    })

    // Calcular volumen
    const sumarVolumenes = () => {
        let suma = 0

        results.forEach((asr) => {
            asr.pedido02.forEach((oc) => {
                suma += (
                    oc.espesor *
                    oc.ancho *
                    oc.largo *
                    oc.piezas
                ) / 1000000
            })
        })

        setTotalVolumen(suma)
    }

    // Exportar Excel
    const exportarExcel = () => {

        if (!results.length) {
            alert('No hay producciones para exportar')
            return
        }

        const datosExcel = []

        results.forEach((asr) => {

            asr.pedido02.forEach((oc) => {

                const volumen = (
                    oc.espesor *
                    oc.ancho *
                    oc.largo *
                    oc.piezas
                ) / 1000000

                datosExcel.push({
                    Fecha: convertirFecha(asr.fecha),
                    Espesor: oc.espesor,
                    Ancho: oc.ancho,
                    Largo: oc.largo,
                    Piezas: oc.piezas,
                    'Volumen m3': Number(volumen.toFixed(4)),
                    Calidad: oc.calidad || ''
                })

            })

        })

        const hoja = XLSX.utils.json_to_sheet(datosExcel)

        const libro = XLSX.utils.book_new()

        XLSX.utils.book_append_sheet(libro, hoja, 'Producciones')

        XLSX.writeFile(
            libro,
            `Producciones_${fechaDesde || 'inicio'}_hasta_${fechaHasta || 'fin'}.xlsx`
        )
    }

    // Limpiar filtros
    const limpiarFiltros = () => {
        setFechaDesde('')
        setFechaHasta('')
        setTotalVolumen(0)
    }

    return (
        <LayoutAsr pagina={'Produccion-fecha'}>

            <h1 className="text-xl font-black text-center">
                BUSCAR PRODUCCION POR FECHA
            </h1>

            {/* FILTRO DE FECHAS */}

            <div className="flex flex-wrap justify-center items-end gap-4 my-8 p-5 border border-amber-400 rounded-xl">

                <div className="flex flex-col">
                    <label className="text-sm font-bold mb-2">
                        Fecha desde
                    </label>

                    <input
                        type="date"
                        value={fechaDesde}
                        onChange={(e) => setFechaDesde(e.target.value)}
                        className="border border-gray-400 rounded p-2 text-gray-700"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-bold mb-2">
                        Fecha hasta
                    </label>

                    <input
                        type="date"
                        value={fechaHasta}
                        min={fechaDesde || undefined}
                        onChange={(e) => setFechaHasta(e.target.value)}
                        className="border border-gray-400 rounded p-2 text-gray-700"
                    />
                </div>

                <button
                    onClick={limpiarFiltros}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                    Limpiar
                </button>

                <button
                    onClick={exportarExcel}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded font-bold"
                >
                    Exportar Excel
                </button>

            </div>

            {/* RESUMEN */}

            <div className="flex justify-center items-center gap-4 m-auto my-5">

                <button
                    className="py-2 px-4 text-black border border-amber-400 rounded-xl"
                    onClick={sumarVolumenes}
                >
                    Resumen
                </button>

                <p className="font-bold">
                    {formatoNumero(totalVolumen)} m³
                </p>

            </div>

            {/* RESULTADOS */}

            <p className="text-center text-gray-600 mb-3">
                Producciones encontradas: {results.length}
            </p>

            <table className="table-auto w-full text-center bg-white text-gray-700">
                <tbody>
                    <tr className="bg-white border-b text-sm">
                        <td className="px-6 py-4 border border-amber-400">Fecha</td>
                        <td className="px-6 py-4 border border-amber-400">Espesor</td>
                        <td className="px-6 py-4 border border-amber-400">Ancho</td>
                        <td className="px-6 py-4 border border-amber-400">Largo</td>
                        <td className="px-6 py-4 border border-amber-400">m³</td>
                        <td className="px-6 py-4 border border-amber-400">Calidad</td>
                    </tr>
                </tbody>
            </table>

            {isLoading ? (
                <p className="text-center m-10">
                    Cargando producciones...
                </p>
            ) : results.length > 0 ? (
                results.map(asr => (
                    <ListadoProduccionFechaAsr
                        key={asr.id}
                        asr={asr}
                    />
                ))
            ) : (
                <p className="text-center m-10">
                    Sin Produccion en el rango seleccionado
                </p>
            )}

        </LayoutAsr>
    )
}
