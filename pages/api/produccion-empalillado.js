//import { PrismaClient } from "@prisma/client";

//export default async function handler(req, res) {
 // const prisma = new PrismaClient();
  //Obtener Ordenes
 // const produc = await prisma.producciones.findMany({
  //  where: {
  //      nombre:'STAKER'
  //    },
  //  orderBy: {
  //    id: "asc",
 //   },

//  })

//  res.status(200).json(produc);
//}



import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({
      error: "Método no permitido",
    });
  }

  try {
    const produc = await prisma.producciones.findMany({
      where: {
        nombre: "STAKER",
      },
      orderBy: {
        id: "asc",
      },
    });

    return res.status(200).json(produc);
  } catch (error) {
    console.error("Error en produccion-empalillado:", error);

    if (res.headersSent) {
      return;
    }

    return res.status(500).json({
      error: "Error al obtener la producción de Stacker",
    });
  }
}
