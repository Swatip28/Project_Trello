import { prisma } from "../../prismaConfig"

export const getAllList = async (_root, args, context) => {
    let allListResponseObj
try{
    const getlists =  await prisma.card.groupBy({
        by : ['ListId']
    })
    allListResponseObj = {code :200 , message: "Details Fetched", List : getlists}
    return allListResponseObj
}
catch(error){
    allListResponseObj = {code : 400 ,message : error.message}
    return allListResponseObj
}
}
