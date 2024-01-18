import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        const { calle } = req.body;
        

        const ordenActualizada = await prisma.saldo.update({
            where: { id: parseInt(id) },
            data: {
              calle: calle,
            },
          });
       
        res.status(200).json(ordenActualizada)

    }

}


