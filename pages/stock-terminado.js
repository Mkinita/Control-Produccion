
import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from '../layout/AdminLayout'
import StockTerminado from '../components/StockTerminado'
import TablaTerminado from '@/components/TablaTerminado'
import * as XLSX from 'xlsx'
import { useMemo, useState } from 'react'
import { formatoNumero } from 'helpers/formato'
import Head from 'next/head'

export default function AdminProducciones() {

  const [search, setSearch] = useState('')

  // Obtener información de la API
  const fetcher = (url) =>
    axios.get(url).then(res => res.data)

  const {
    data,
    error,
    isLoading
  } = useSWR('/api/stock', fetcher, {
    refreshInterval: 30000
  })

  const users = Array.isArray(data) ? data : []

  // Buscador
  const results = useMemo(() => {

    if (!search.trim()) return users

    return users.filter((orden) =>
      JSON.stringify(orden)
        .toLowerCase()
        .includes(search.toLowerCase())
    )

  }, [users, search])

  // Preparar registros y calcular volumen
  const detalles = useMemo(() => {

    return results.flatMap((orden) => {

      const pedidos = Array.isArray(orden.pedido)
        ? orden.pedido
        : []

      return pedidos.map((oc) => {

        const espesor = Number(oc.espesor || 0)
        const ancho = Number(oc.ancho || 0)
        const largo = Number(oc.largo || 0)
        const piezas = Number(oc.piezas || 0)
        const cantidad = Number(oc.cantidad || 0)
        const cantidadOrden = Number(orden.cantidad || 0)

        const volumen =
          espesor *
          ancho *
          largo *
          piezas *
          (cantidad - cantidadOrden) / 1000000

        return {
          numero: orden.id,
          espesor,
          ancho,
          largo,
          volumen,
          cantidad,
          calidad: orden.nombre || '',
          cliente: orden.cliente || ''
        }

      })

    })

  }, [results])

  // Resumen automático
  const totalVolumen = detalles.reduce(
    (total, item) => total + item.volumen,
    0
  )

  const totalCantidad = detalles.reduce(
    (total, item) => total + item.cantidad,
    0
  )

  // Descargar Excel
  const descargarExcel = () => {

    if (!detalles.length) {
      alert('No hay registros para descargar')
      return
    }

    const filasExcel = detalles.map((item) => ({
      'N°': item.numero,
      'Espesor': item.espesor,
      'Ancho': item.ancho,
      'Largo': item.largo,
      'm³': Number(item.volumen.toFixed(3)),
      'Cantidad': item.cantidad,
      'Calidad': item.calidad,
      'Cliente': item.cliente
    }))

    // Crear hoja Excel
    const hoja = XLSX.utils.json_to_sheet(filasExcel)

    // Ancho de columnas
    hoja['!cols'] = [
      { wch: 14 },
      { wch: 12 },
      { wch: 12 },
      { wch: 12 },
      { wch: 14 },
      { wch: 14 },
      { wch: 20 },
      { wch: 25 }
    ]

    // Crear libro
    const libro = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(
      libro,
      hoja,
      'Stock Terminado'
    )

    // Descargar archivo
    const fecha = new Date().toISOString().slice(0, 10)

    XLSX.writeFile(
      libro,
      `Stock_Terminado_${fecha}.xlsx`
    )

  }

  return (

    <AdminLayout pagina={'Produccion-fecha'}>

      <Head>
        <meta
          name="description"
          content="Control Producción AGRIFOR"
        />

        <link rel="icon" href="/CJ.png" />

        <title>Stock Terminado | AGRIFOR</title>
      </Head>

      <div className="w-full max-w-7xl mx-auto px-4 py-6">

        {/* TITULO */}

        <h1 className="text-3xl font-black text-center text-gray-800 mb-8">
          Stock Terminado
        </h1>

        {/* RESUMEN */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

          <div className="bg-white border border-lime-400 rounded-xl p-5 shadow-sm">

            <p className="text-sm font-bold text-gray-500">
              VOLUMEN TOTAL
            </p>

            <p className="text-3xl font-black text-gray-800 mt-2">
              {formatoNumero(totalVolumen)} m³
            </p>

          </div>

          <div className="bg-white border border-lime-400 rounded-xl p-5 shadow-sm">

            <p className="text-sm font-bold text-gray-500">
              CANTIDAD TOTAL
            </p>

            <p className="text-3xl font-black text-gray-800 mt-2">
              {formatoNumero(totalCantidad)}
            </p>

          </div>

        </div>

        {/* BUSCADOR Y EXCEL */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-5">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Buscar por fecha, número, cliente o calidad..."
            className="w-full md:w-2/3 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-100"
          />

          <button
            onClick={descargarExcel}
            disabled={!detalles.length}
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold px-6 py-3 rounded-lg shadow-sm transition flex items-center justify-center gap-2"
          >
            📥 Descargar Excel
          </button>

        </div>

        {/* TABLA */}

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px] table-fixed border-collapse text-gray-700">

              <colgroup>
                <col className="w-[14%]" />
                <col className="w-[12%]" />
                <col className="w-[12%]" />
                <col className="w-[12%]" />
                <col className="w-[12%]" />
                <col className="w-[19%]" />
                <col className="w-[19%]" />
              </colgroup>

              <TablaTerminado />

              <tbody>

                {isLoading ? (

                  <tr>
                    <td colSpan={7} className="text-center py-10">
                      Cargando información...
                    </td>
                  </tr>

                ) : error ? (

                  <tr>
                    <td colSpan={7} className="text-center py-10 text-red-500">
                      Error al cargar el stock.
                    </td>
                  </tr>

                ) : results.length > 0 ? (

                  results.map((orden) => (

                    <StockTerminado
                      key={orden.id}
                      orden={orden}
                    />

                  ))

                ) : (

                  <tr>
                    <td colSpan={7} className="text-center py-10 text-gray-500">
                      Sin producción registrada.
                    </td>
                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

        {/* PIE DE TABLA */}

        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">

          <p>
            Registros encontrados: {detalles.length}
          </p>

          <p>
            AGRIFOR - Control de Producción
          </p>

        </div>

      </div>

    </AdminLayout>

  )

}
