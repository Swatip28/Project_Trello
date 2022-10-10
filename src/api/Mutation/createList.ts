import { prisma } from "../../prismaConfig"

export const createList = async(_root, args, context) => {
    let createListResponseObj,createList
    try{
const {title} = args
const getTitle = await prisma.list.count({
    where:{Title : title}
})
if(getTitle && getTitle > 0){
    return { code: 400, message: "List already exists" };
}
else{
    createList = await prisma.list.create({
        data:{
            Title : title
        }
    })
}
createListResponseObj = {code :200 , message : "List created"}
return createListResponseObj
    }
    catch(error){
        createListResponseObj = {code :400 , message : error.message}
        return createListResponseObj
    }
}