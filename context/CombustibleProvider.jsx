import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const CombustibleContext = createContext()


const CombustibleProvider = ({children}) => {
    const [faenas, setFaenas] = useState([])
    const [orden, setOrden] = useState([])
    const [faenaActual, setFaenaActual] = useState({})
    const [equipo, setEquipo] = useState({})
    const [paquete, setPaquete] = useState({})
    const [saldo, setSaldo] = useState([])
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [pedido02, setPedido02] = useState([])
    const [pedidose, setPedidose] = useState([])
    const [nombre, setNombre] = useState('')
    const [id, setId] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [detalle, setDetalle] = useState('')
    const [total, setTotal] = useState(0)
    const [totalasr, setTotalasr] = useState(0)
    const [espesor, setEspesor] = useState('')
    const [espesor01, setEspesor01] = useState('')
    const [ancho, setAncho] = useState('')
    const [largo, setLargo] = useState('')
    const [piezas, setPiezas] = useState('')
    const [calidad, setCalidad] = useState('')
    const [totalsaldo, setTotalSaldo] = useState(0)


    const [pedidos, setPedidos] = useState({})
    const [tipo, setTipo] = useState('')
    const [cliente, setCliente] = useState('')
    const [oc, setOc] = useState('')
    const [producto, setProducto] = useState('')
    const [solicitud, setSolicitud] = useState('')
    const [despacho, setDespacho] = useState('')
    const [imagen, setImagen] = useState(null);
    const [file, setFile] = useState(null)



    const [volumen, setVolumen] = useState('')
    const [fecha, setFecha] = useState('')
    const [fecha01, setFecha01] = useState('')
    const [ingreso, setIngreso] = useState('')
    const [ingreso01, setIngreso01] = useState('')

    const [horasmes, setHorasmes] = useState('')
    const [horastrabajadas, setHorastrabajadas] = useState('')

    const [horasmesseco, setHorasmesseco] = useState('')
    const [horastrabajadasseco, setHorastrabajadasseco] = useState('')
    const [calle, setCalle] = useState('')





    

    const router = useRouter()
    
    // const [paso, setPaso] = useState(1)

    const obtenerFaenas = async () => {
        const {data} = await axios('/api/faenas')
        setFaenas(data)
    }
    useEffect(() => {
        obtenerFaenas()
    },[])


    useEffect(() => {
        setFaenaActual(faenas[0])
    },[faenas])



    useEffect(() => {
        setFaenaActual(faenas[0])
    },[faenas])


    


    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.espesor * producto.ancho * producto.largo * producto.piezas*producto.cantidad / 1000000 ) + total, 0)

        setTotal(nuevoTotal)
    }, [pedido])


    





    // useEffect(() => {
    //     const nuevoTotalSaldo = ((totalSaldo, producto) => (producto.espesor * producto.ancho * producto.largo * producto.piezas*producto.cantidad / 1000000 ) + total, 0)

    //     setTotal(nuevoTotalSaldo)
    // }, [pedido])



    


    
    


   


    

    const handleClickFaena = id =>{
        const faena = faenas.filter(cat => cat.id === id)
        setFaenaActual(faena[0])
        router.push('/')
    }


    const handlesetEquipo = equipo => {
        setEquipo(equipo)
    }

    const handlesetPaquete = paquete => {
        setPaquete(paquete)
    }

    const handlesetPedidos = pedidos => {
        setPedidos(pedidos)
        console.log('agregando orden')
    }


    const handlesetSaldo = saldo => {
        setSaldo(saldo)
    }


    const handleChangeModal = () => {
        setModal(!modal)
    }


    const handleAgregarPedido = ({faenaId, ...equipo}) => {
        if(pedido.some(equipoState => equipoState.id === equipo.id)) {
           // Actualizar la cantidad
           const pedidoActualizado = pedido.map(equipoState => equipoState.id === equipo.id ? equipo : equipoState)
           setPedido(pedidoActualizado)

           toast.success('Guardado Correctamente')
           setTimeout(() =>{
            router.push('/resumen')
        },500)
        } else {
            setPedido([...pedido, equipo])
            toast.success('Agregado Solicitud')

            setTimeout(() =>{
                router.push('/resumen')
            },500)
        }

        setModal(false)
        
    }


    const handleAgregarPaquete = ({...paquete}) => {
        if(pedido02.some(paqueteState => paqueteState.id === paquete.id)) {
           // Actualizar la cantidad
           const pedido02Actualizado = pedido02.map(paqueteState => paqueteState.id === paquete.id ? paquete : paqueteState)
           setPedido02(pedido02Actualizado)

           toast.success('Guardado Correctamente')
           setTimeout(() =>{
            router.push('/resumen-asr')
        },500)
        } else {
            setPedido02([...pedido02, paquete])
            toast.success('Agregado Solicitud')

            setTimeout(() =>{
                router.push('/resumen-asr')
            },500)
        }

        setModal(false)
        
    }



    const handleAgregarPedidos = () => {
        if(pedidose.some(equipoState => equipoState.id === equipo.id)) {
        } else {
            toast.success('Generando PDF')
            setTimeout(() =>{
                router.push('/imagenoc')
            },1000)
        }

        setModal(false)
        
    }



    


    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter( equipo => equipo.id === id)
        setEquipo(productoActualizar[0])
        setModal(!modal)
    }



    const handleElimanarSolicitud = id => {
        const pedidoActualizado = pedido.filter( equipo => equipo.id !== id)
        setPedido(pedidoActualizado)
        toast.error('Solicitud Eliminada')

        setTimeout(() =>{
            router.push('/')
        },1000)
    }


    const handleElimanarSolicitudAsr = id => {
        const pedidoActualizados = pedido02.filter( paquete => paquete.id !== id)
        setPedido02(pedidoActualizados)
        toast.error('Solicitud Eliminada')

        setTimeout(() =>{
            router.push('/ingreso-aserradero')
        },1000)
    }



    const colocarOrden = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/ordenes',{pedido,nombre,cantidad,cliente,fecha: new Date()})
           await axios.post('/api/stock',{pedido,nombre,cantidad,cliente,fecha: new Date()})
            // Resetear la app
            setFaenaActual(faenas[0])
            setPedido([])
            setNombre('')
            setCalidad('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/imprecion-etiqueta')
            },1000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }


    const colocarSaldo = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/saldos',{espesor,ancho,largo,piezas,calidad,calle,fecha: new Date()})
            // Resetear la app
            setEspesor('')
            setAncho('')
            setLargo('')
            setPiezas('')
            setCalidad('')
            setCalle('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/imprecion-etiqueta-saldo')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }




    const colocarEmpalilado = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/empalillado',{espesor,ancho,largo,piezas,calidad,cantidad,fecha01,fecha: new Date()})
            // Resetear la app
            setEspesor('')
            setAncho('')
            setLargo('')
            setPiezas('')
            setCalidad('')
            setCantidad('')
            setFecha01('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/empalillado-actual')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }



    const colocarPedido = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/pedidos',{tipo,cliente,oc,producto,solicitud,despacho,imagen})
            // Resetear la app
            setTipo('')
            setCliente('')
            setOc('')
            setProducto('')
            setSolicitud('')
            setImagen(null)
            toast.success('Agregando Pedido⏳')

            setTimeout(() =>{
                router.push('/lista-pedidos')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }


    const colocarProduccion = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/producciones',{nombre,volumen,fecha,ingreso,ingreso01})
            // Resetear la app
            setNombre('')
            setVolumen('')
            setFecha('')
            setIngreso('')
            setIngreso01('')
            toast.success('Agregando Produccion⏳')

            setTimeout(() =>{
                router.push('/listado-aserradero')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }


    const colocarSecado = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/secado',{nombre,espesor,ancho,largo,piezas,calidad,cantidad,fecha})
            // Resetear la app
            setNombre('')
            setFecha('')
            setEspesor('')
            setAncho('')
            setLargo('')
            setPiezas('')
            setCalidad('')
            setCantidad('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/dentro-camaras')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }



    const colocarAserradero = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/aserradero',{pedido02,cantidad,fecha: new Date()})
            // Resetear la app
            setCantidad('')
            setPedido02([])
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/imprecion-etiqueta-asr')
            },2000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }


    const colocarHoras = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/horas',{horasmes,horastrabajadas})
           await axios.post('/api/horasseco',{horasmesseco,horastrabajadasseco})
            // Resetear la app
            setHorasmes('')
            setHorastrabajadas('')
            setHorasmesseco('')
            setHorastrabajadasseco('')
            toast.success('Agregando ⏳')
            setTimeout(() =>{
                router.push('/editar-horas')
            },2000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }


    const colocarDescortezador = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/descortezador',{cantidad,fecha})
            // Resetear la app
            setCantidad('')
            setFecha('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/acumulado-descortezador')
            },2000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }



    const colocarPartidoras = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/partidoras',{volumen,fecha})
            // Resetear la app
            setVolumen('')
            setFecha('')
            toast.success('Agregando ⏳')

            setTimeout(() =>{
                router.push('/acumulado-partidoras')
            },2000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }



    const colocarPaquete = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/paquetes',{espesor,espesor01,ancho,largo,piezas,detalle,calidad})
            // Resetear la app
            setEspesor('')
            setEspesor01('')
            setAncho('')
            setLargo('')
            setPiezas('')
            setCalidad('')
            setDetalle('')
            toast.success('Agregando⏳')

            setTimeout(() =>{
                router.push('/ingreso-aserradero')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }



    return(
        <CombustibleContext.Provider
        value={{
            faenas,
            faenaActual,
            handleClickFaena,
            equipo,
            saldo,
            handlesetEquipo,
            handlesetSaldo,
            modal,
            handleChangeModal,
            pedido,
            handleAgregarPedido,
            handleElimanarSolicitud,
            handleEditarCantidades,
            nombre,
            setNombre,
            colocarOrden,
            colocarSaldo,
            total,
            espesor,
            setEspesor,
            ancho,
            setAncho,
            largo,
            setLargo,
            piezas,
            setPiezas,
            calidad,
            setCalidad,
            setCantidad,
            colocarPedido,
            tipo,setTipo,
            cliente,setCliente,
            oc,setOc,
            producto,setProducto,
            solicitud,setSolicitud,
            despacho,setDespacho,
            handlesetPedidos,
            pedidos,setPedidos,
            handleAgregarPedidos,
            imagen,setImagen,
            id,
            orden,setOrden,colocarEmpalilado,
            fecha,setFecha,
            volumen,setVolumen,
            colocarProduccion,
            ingreso,setIngreso,
            ingreso01,setIngreso01,
            colocarSecado,
            colocarAserradero,
            colocarHoras,
            horasmes,setHorasmes,
            horasmesseco,setHorasmesseco,
            horastrabajadas,setHorastrabajadas,
            colocarDescortezador,
            colocarPartidoras,
            handlesetPaquete,
            paquete, setPaquete,
            handleAgregarPaquete,
            pedido02,setPedido02,
            totalasr,
            handleElimanarSolicitudAsr,
            colocarPaquete,
            detalle,setDetalle,
            espesor01,setEspesor01,
            fecha01,setFecha01,
            // pedidos,
            // fechas,
            // fechauno,
            // fechados
        }}
        
        
        >
            {children}
        </CombustibleContext.Provider>
    )
}
export {
    CombustibleProvider
}


export default CombustibleContext