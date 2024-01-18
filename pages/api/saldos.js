// import { PrismaClient } from "@prisma/client";

// export default async function handler(req, res) {
//   const prisma = new PrismaClient();
//   //Obtener Ordenes
//   const saldos = await prisma.saldo.findMany({
//   })

//   res.status(200).json(saldos);




//   //Crear saldoes
//   if (req.method === "POST") {
//     const saldo = await prisma.saldo.create({
//       data: {
//         espesor: req.body.espesor,
//         ancho: req.body.ancho,
//         largo: req.body.largo,
//         piezas: req.body.piezas,
//         calidad: req.body.calidad,
//         fecha: req.body.fecha,
//       },
//     });
//     res.json(saldo);
//   }
// }


import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  
  if (req.method === "POST") {
    // Crear saldoes si la solicitud es un POST
    try {
      const saldo = await prisma.saldo.create({
        data: {
          espesor: req.body.espesor,
          ancho: req.body.ancho,
          largo: req.body.largo,
          piezas: req.body.piezas,
          calidad: req.body.calidad,
          calle:req.body.calle,
          fecha: req.body.fecha,
        },
      });
      res.status(201).json(saldo); // Usar 201 Created para respuestas de creación exitosa
    } catch (error) {
      console.error("Error al crear saldo:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    // Obtener Saldos
    const saldos = await prisma.saldo.findMany({});
    res.status(200).json(saldos);
  }
}
