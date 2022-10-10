import { prisma } from "../../prismaConfig"

export const moveCard = async (_root, args, context)=> {
    let moveCardResponseObject
    const {id,pos} =args
    try {
const getPosition = await prisma.card.findFirst({
    where:{Id : id},
})
const getSwappedPosition = await prisma.card.findFirst({
    where:{Pos : pos}
})
await prisma.card.update({
    where:{ Id: getSwappedPosition.Id},
    data :{ Pos : getPosition.Pos}
})
const moveCard = await prisma.card.update({
    where:{Id : id},
    data:{Pos : pos}
})
moveCardResponseObject = {code : 200 , message : "Card has been moved" }
return moveCardResponseObject
    }
    catch(error){
        moveCardResponseObject = { code: 400, message: error.message };
        return moveCardResponseObject;
    }
}