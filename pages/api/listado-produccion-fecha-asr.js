import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fecha = new Date();
  //Obtener asrss
  const asrss = await prisma.asr.findMany({
   where:  {
      estado:true,
    }
  })

  res.status(200).json(asrss);
}
