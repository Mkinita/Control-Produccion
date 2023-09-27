// import { PrismaClient } from "@prisma/client";

// export default async function handler(req, res) {
//   const prisma = new PrismaClient();
//   //Obtener Ordenes
//   const asrs = await prisma.asr.findMany({
//   })

//   res.status(200).json(asrs);




//   //Crear saldoes
//   if (req.method === "POST") {
//     const asr = await prisma.asr.create({
//       data: {
//         cantidad: req.body.cantidad,
//         fecha: req.body.fecha,
//         pedido02: req.body.pedido02
//       },
//     });
//     res.json(asr);
//   }
// }


import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  
  // Crear saldoes si la solicitud es un POST
  if (req.method === "POST") {
    try {
      const asr = await prisma.asr.create({
        data: {
          cantidad: req.body.cantidad,
          fecha: req.body.fecha,
          pedido02: req.body.pedido02
        },
      });
      res.status(201).json(asr); // Usar 201 Created para respuestas de creación exitosa
    } catch (error) {
      console.error("Error al crear asr:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    // Obtener Ordenes
    const asrs = await prisma.asr.findMany({});
    res.status(200).json(asrs);
  }
}
