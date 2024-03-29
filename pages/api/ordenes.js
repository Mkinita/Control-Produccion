import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const ordenes = await prisma.orden.findMany({
   where:  {
      estado:false,
    },
    orderBy: {
      id: "desc",
    },
  })

  res.status(200).json(ordenes);




  //Crear Ordenes
  if (req.method === "POST") {
    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        cantidad: req.body.cantidad,
        operador: req.body.operador,
        pedido: req.body.pedido,
        cliente: req.body.cliente
      },
    });
    res.json(orden);
  }
}
