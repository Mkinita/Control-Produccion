import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const paquet = await prisma.paquetes.findMany({
  })

  res.status(200).json(paquet);




  //Crear saldoes
  if (req.method === "POST") {
    const paquetes = await prisma.paquetes.create({
      data: {
        espesor: req.body.espesor,
        ancho: req.body.ancho,
        largo: req.body.largo,
        piezas: req.body.piezas,
        calidad: req.body.calidad,
        cantidad: req.body.cantidad,
        fecha: req.body.fecha,
      },
    });
    res.json(paquetes);
  }
}