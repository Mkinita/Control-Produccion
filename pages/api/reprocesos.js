import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const saldos = await prisma.saldo.findMany({
    where:  {
        estado:true,
      },
      orderBy: {
        id: "desc",
      },
  })

  res.status(200).json(saldos);
}