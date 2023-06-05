import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const descr = await prisma.descortezador.findMany({
    orderBy: {
        id: "asc",
      },
  })

  res.status(200).json(descr);




  //Crear saldoes
  if (req.method === "POST") {
    const descortezador = await prisma.descortezador.create({
      data: {
        cantidad: req.body.cantidad,
        fecha: req.body.fecha,
      },
    });
    res.json(descortezador);
  }
}