// import { PrismaClient } from "@prisma/client";

// export default async function handler(req, res) {
//   const prisma = new PrismaClient();
//   //Obtener Ordenes
//   const emps = await prisma.emp.findMany({
//   })

//   res.status(200).json(emps);




//   //Crear saldoes
//   if (req.method === "POST") {
//     const emp = await prisma.emp.create({
//       data: {
//         espesor: req.body.espesor,
//         ancho: req.body.ancho,
//         largo: req.body.largo,
//         piezas: req.body.piezas,
//         calidad: req.body.calidad,
//         cantidad: req.body.cantidad,
//         fecha: req.body.fecha,
//       },
//     });
//     res.json(emp);
//   }
// }


import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  // Obtener Ordenes
  const emps = await prisma.emp.findMany({});

  // Enviar respuesta para obtener Ordenes
  res.status(200).json(emps);

  // Crear saldoes
  if (req.method === "POST") {
    const emp = await prisma.emp.create({
      data: {
        fecha01: req.body.fecha01,
        espesor: req.body.espesor,
        ancho: req.body.ancho,
        largo: req.body.largo,
        piezas: req.body.piezas,
        calidad: req.body.calidad,
        cantidad: req.body.cantidad,
        fecha: req.body.fecha,
      },
    });
    res.json(emp);
  }
}
