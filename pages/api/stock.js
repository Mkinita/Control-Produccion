// import { PrismaClient } from "@prisma/client";

// export default async function handler(req, res) {
//   const prisma = new PrismaClient();

//   // Obtener Ordenes
//   const stocks = await prisma.stock.findMany({
//     where:  {
//       estado: false,
//     },
//     orderBy: {
//       id: "desc",
//     },
//   });

//   res.status(200).json(stocks);

//   // Crear stockes
//   if (req.method === "POST") {
//     const stock = await prisma.stock.create({
//       data: {
//         nombre: req.body.nombre,
//         fecha: req.body.fecha,
//         cantidad: req.body.cantidad,
//         pedido: req.body.pedido,
//         cliente: req.body.cliente,
//       },
//     });

  

//     res.json(stock);
//   }
// }



import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  // Crear stockes si la solicitud es un POST
  if (req.method === "POST") {
    try {
      const stock = await prisma.stock.create({
        data: {
          nombre: req.body.nombre,
          fecha: req.body.fecha,
          cantidad: req.body.cantidad,
          pedido: req.body.pedido,
          cliente: req.body.cliente,
        },
      });

      res.status(201).json(stock); // Usar 201 Created para respuestas de creación exitosa
    } catch (error) {
      console.error("Error al crear stock:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    // Obtener Stocks
    const stocks = await prisma.stock.findMany({
      where: {
        estado: false,
      },
      orderBy: {
        id: "desc",
      },
    });

    res.status(200).json(stocks);
  }
}
