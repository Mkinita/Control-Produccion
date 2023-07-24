// import { PrismaClient } from "@prisma/client";

// export default async function handler(req, res) {
//   const prisma = new PrismaClient();
//   const fecha = new Date();
//   const year = fecha.getFullYear();
//   const month = fecha.getMonth();
//   const day = fecha.getDate();
//   // Obtener emps
//   const emps = await prisma.emp.findMany({
//     where: {
//       estado: false,
//       AND: [
//         {
//           fecha01: {
//             gt: new Date(year, month, day),
//           },
//         },
//       ],
//     },
//   });
//   res.status(200).json(emps);
// }


import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  // Obtener la fecha actual en formato "yyyy-mm-dd"
  const currentDate = new Date().toISOString().split('T')[0];

  // Obtener emps donde fecha01 sea igual a la fecha actual
  const emps = await prisma.emp.findMany({
    where: {
      estado: false,
      fecha01: currentDate,
    },
  });

  // Responder con los registros encontrados
  res.status(200).json(emps);
}



