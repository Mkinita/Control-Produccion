// import { PrismaClient } from "@prisma/client";

// export default async function handler(req, res) {
//   const prisma = new PrismaClient();
//   const fecha = new Date();
//   const year = fecha.getFullYear();
//   const month = fecha.getMonth();
//   const day = fecha.getDate();
//   // Obtener Ordenes
//   const ordenes = await prisma.orden.findMany({
//     where: {
//       estado: true,
//       AND: [
//         {
//           fecha: {
//             gt: new Date(year, month, day),
//           },
//         },
//       ],
//     },
//   });
//   res.status(200).json(ordenes);
// }



import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fecha = new Date();
  const year = fecha.getFullYear();
  const month = fecha.getMonth();
  const day = fecha.getDate();

  // Calcular la fecha límite (2:00 AM del día siguiente)
  const limite = new Date(year, month, day + 1, 2, 0, 0);

  // Obtener Ordenes hasta las 2:00 AM del día actual
  const ordenes = await prisma.orden.findMany({
    where: {
      estado: true,
      fecha: {
        gte: new Date(year, month, day, 0, 0, 0), // Desde las 00:00:00 del día actual
        lt: limite, // Hasta las 2:00 AM del día siguiente
      },
    },
  });

  res.status(200).json(ordenes);
}


