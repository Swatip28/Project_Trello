import { prisma } from "../../prismaConfig"

export const updateCard = async(_root,args,context) =>{
let updateCardResponseObj
try {
const {id,title,status} = args
const updatecard = await prisma.card.update({
    where:{ Id : id},
    data:{ Title :title,Status:status}
})
updateCardResponseObj = {code : 200 , message:"Card Updated",Card  : updatecard}
return updateCardResponseObj
}
catch(error){
    updateCardResponseObj = {code :400 , message :error.message}
    return updateCardResponseObj
}
}