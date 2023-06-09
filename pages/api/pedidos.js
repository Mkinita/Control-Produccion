import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const pedido = await prisma.pedidos.findMany({
    where: { estado: false },
    orderBy: {
      id: "asc",
    },

  })

  res.status(200).json(pedido);




  //Crear pedidoses
  if (req.method === "POST") {

    const pedidos = await prisma.pedidos.create({
    data: {
    tipo: req.body.tipo,
    cliente: req.body.cliente,
    oc: req.body.oc,
    producto: req.body.producto,
    solicitud: req.body.solicitud,
    despacho: req.body.despacho,
    imagen: req.body.imagen,
    ordenar: req.body.ordenar,
      },
    });
    res.json(pedidos);
  }
}