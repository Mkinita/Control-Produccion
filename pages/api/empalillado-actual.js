import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fecha = new Date();
  const year = fecha.getFullYear();
  const month = fecha.getMonth();
  const day = fecha.getDate();
  // Obtener emps
  const emps = await prisma.emp.findMany({
    where: {
      estado: false,
      AND: [
        {
          fecha: {
            gt: new Date(year, month, day),
          },
        },
      ],
    },
  });
  res.status(200).json(emps);
}
