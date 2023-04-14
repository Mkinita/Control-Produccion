import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';
import EtiquetaImprecionEnlace from '@/components/EtiquetaImprecionEnlace'

const prisma = new PrismaClient();

export default function OrdenPage({ orden }) {

    const [fecha, setFecha] = useState('');
    

    useEffect(() => {
      const date = new Date(orden.fecha);
      setFecha(date.toLocaleDateString());
    }, []);

  return (
    <>
        <div className='m-auto'>
        <EtiquetaImprecionEnlace orden={orden} />
        </div>


       
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const orden = await prisma.orden.findUnique({
    where: { id: parseInt(id) }
  });

  return { props: { orden: { ...orden, fecha: orden.fecha.toISOString() } } };
}
