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
      AND: [
        {
          fecha: {
            gt: new Date(year, month, day),
          },
        },
        {
          estado: false, // Agrega esta condición para filtrar por estado "false"
        },
      ],
    },
  });
  res.status(200).json(saldo);
}
