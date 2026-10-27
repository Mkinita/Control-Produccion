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


//import { PrismaClient } from "@prisma/client";

//export default async function handler(req, res) {
  //const prisma = new PrismaClient();

  // Obtener Ordenes
  //const emps = await prisma.emp.findMany({});

  // Enviar respuesta para obtener Ordenes
  //res.status(200).json(emps);

  // Crear saldoes
  //if (req.method === "POST") {
   // const emp = await prisma.emp.create({
     // data: {
      //  fecha01: req.body.fecha01,
      //  espesor: req.body.espesor,
       // ancho: req.body.ancho,
      //  largo: req.body.largo,
     //   piezas: req.body.piezas,
    //    calidad: req.body.calidad,
    //    cantidad: req.body.cantidad,
    //    fecha: req.body.fecha,
   //   },
 //   });
 //   res.json(emp);
//  }
//}




import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Obtener órdenes
    if (req.method === "GET") {
      const emps = await prisma.emp.findMany({});

      return res.status(200).json(emps);
    }

    // Crear saldos
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

      return res.status(201).json(emp);
    }

    // Métodos no permitidos
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({
      error: "Método no permitido",
    });
  } catch (error) {
    console.error("Error en /api/empalillado:", error);

    return res.status(500).json({
      error: "Error interno del servidor",
    });
  }
}

