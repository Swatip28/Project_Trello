export const trelloTypeDefs = `
type card {
    Title : String
    Status : String
    Pos: Int
    ListId : Int
}
type updatecard {
    Title : String
    Status : String
}
type list {
    Id : Int
    Title : String
    Status : String
    ListId : Int
    Pos : Int
}
type createcardResponseObj {
    code : Int
    message : String
    cardDetails : card
}
type createListResponseObj {
    code : Int
    message : String
}
type moveCardResponseObject {
    code : Int
    message : String
}
type updateCardResponseObj {
    code : Int
    message : String
    Card : updatecard
}
type allListResponseObj {
    code : Int
    message : String
    List : list
}
type listByIdResponseObj {
    code : Int
    message : String
    List : list
}
type Query {
    createCard : createcardResponseObj
    createList : createListResponseObj
    moveCard : moveCardResponseObject
    updateCard : updateCardResponseObj
}
type Mutation {
    getAllList : allListResponseObj
    getListByID(
        id : String
    ):listByIdResponseObj
}
`