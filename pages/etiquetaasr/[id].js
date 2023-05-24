import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';
import EtiquetaImprecionEnlaceAsr from '@/components/EtiquetaImprecionEnlaceAsr'

const prisma = new PrismaClient();

export default function OrdenPage({ asr }) {

    const [fecha, setFecha] = useState('');
    

    useEffect(() => {
      const date = new Date(asr.fecha);
      setFecha(date.toLocaleDateString());
    }, []);

  return (
    <>
        <div className='m-auto'>
        <EtiquetaImprecionEnlaceAsr asr={asr} />
        </div>


       
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const asr = await prisma.asr.findUnique({
    where: { id: parseInt(id) }
  });

  return { props: { asr: { ...asr, fecha: asr.fecha.toISOString() } } };
}
