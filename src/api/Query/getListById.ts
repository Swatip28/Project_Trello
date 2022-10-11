import { prisma } from "../../prismaConfig"

export const getListByID = async (_root,args,context) => {
    let listByIdResponseObj
    const {id} = args
try{
    const getListByID =  await prisma.card.groupBy({
        by : ['ListId'],
        where : {ListId : id}
    })
    listByIdResponseObj = {code :200 , message: "Details Fetched", List : getListByID}
    return listByIdResponseObj
}
catch(error){
    listByIdResponseObj = {code : 400 ,message : error.message}
    return listByIdResponseObj
}
}