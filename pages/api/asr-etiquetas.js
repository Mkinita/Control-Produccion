import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener asretiquetas
  const asretiquetas = await prisma.asr.findMany({
   where:  {
      estado:false,
    },
    orderBy: {
      id: "desc",
    },
  })

  res.status(200).json(asretiquetas);
}
