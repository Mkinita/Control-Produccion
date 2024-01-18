import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fecha = new Date();
  const year = fecha.getFullYear();
  const month = fecha.getMonth();
  const day = fecha.getDate();
  // Obtener Saldo con estado "false"
  const saldo = await prisma.saldo.findMany({
    where: {
        estado: true,
    },
      orderBy: {
        id: "desc",
      },
  });
  res.status(200).json(saldo);
}
