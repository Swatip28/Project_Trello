import { createCard } from "./Mutation/createCard";
import { createList } from "./Mutation/createList";
import { moveCard } from "./Mutation/moveCard";
import { updateCard } from "./Mutation/updateCard";
import { getAllList } from "./Query/getAllLists";
import { getListByID} from "./Query/getListById";

export const trelloResolver = {
    Query : {
        createCard : async(parent, _args: { data: any }, context) =>
        createCard(parent, _args, context),
        createList : async(parent, _args: { data: any }, context) =>
        createList(parent, _args, context),
        moveCard : async(parent, _args: { data: any }, context) =>
        moveCard(parent, _args, context),
        updateCard : async(parent, _args: { data: any }, context) =>
        updateCard(parent, _args, context)
    },
    Mutation : {
        getAllList : async(parent, _args: { data: any }, context) =>
        getAllList(parent, _args, context),
        getListByID : async(parent, _args: { data: any }, context) =>
        getListByID(parent, _args, context)
    }
};