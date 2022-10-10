import { prisma } from "../../prismaConfig"

export const createCard = async (_root, args, context) => {
    let createcardResponseObj,createcard
    const {title,listtitle,position} = args
try{
    const getlist = await prisma.list.findFirst({
        where:{Title : listtitle}
    })
    const getposition = await prisma.card.count({
        where:{Pos : position},
    })
    if(getposition && getposition > 1)
    {
        return { code: 400, message: "Card is already present at this position" };
    }
    else{
     createcard = await prisma.card.create({
        data:{
            Title : title,
            Status : "To Do",
            Pos: position,
            ListId : getlist.Id
        },
    })
}
createcardResponseObj = { code: 200, message: "Card created", cardDetails: createcard };
return createcardResponseObj;
}
catch (error) {
    createcardResponseObj = { code: 400, message: error.message };
    return createcardResponseObj;
  }
}
