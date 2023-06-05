import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const parti = await prisma.partidoras.findMany({
    orderBy: {
        id: "asc",
      },
  })

  res.status(200).json(parti);




  //Crear saldoes
  if (req.method === "POST") {
    const partidoras = await prisma.partidoras.create({
      data: {
        volumen: req.body.volumen,
        fecha: req.body.fecha,
      },
    });
    res.json(partidoras);
  }
}