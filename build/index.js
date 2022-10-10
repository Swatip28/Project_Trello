/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/Mutation/createCard.ts":
/*!****************************************!*\
  !*** ./src/api/Mutation/createCard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCard": () => (/* binding */ createCard)
/* harmony export */ });
/* harmony import */ var _prismaConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prismaConfig */ "./src/prismaConfig.ts");

const createCard = async (_root, args, context) => {
    let createcardResponseObj, createcard;
    const { title, listtitle, position } = args;
    try {
        const getlist = await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.list.findFirst({
            where: { Title: listtitle }
        });
        const getposition = await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.card.count({
            where: { Pos: position },
        });
        if (getposition && getposition > 1) {
            return { code: 400, message: "Card is already present at this position" };
        }
        else {
            createcard = await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.card.create({
                data: {
                    Title: title,
                    Status: "To Do",
                    Pos: position,
                    ListId: getlist.Id
                },
            });
        }
        createcardResponseObj = { code: 200, message: "Card created", cardDetails: createcard };
        return createcardResponseObj;
    }
    catch (error) {
        createcardResponseObj = { code: 400, message: error.message };
        return createcardResponseObj;
    }
};


/***/ }),

/***/ "./src/api/Mutation/createList.ts":
/*!****************************************!*\
  !*** ./src/api/Mutation/createList.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var _prismaConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prismaConfig */ "./src/prismaConfig.ts");

const createList = async (_root, args, context) => {
    let createListResponseObj, createList;
    try {
        const { title } = args;
        const getTitle = await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.list.count({
            where: { Title: title }
        });
        if (getTitle && getTitle > 0) {
            return { code: 400, message: "List already exists" };
        }
        else {
            createList = await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.list.create({
                data: {
                    Title: title
                }
            });
        }
        createListResponseObj = { code: 200, message: "List created" };
        return createListResponseObj;
    }
    catch (error) {
        createListResponseObj = { code: 400, message: error.message };
        return createListResponseObj;
    }
};


/***/ }),

/***/ "./src/api/Mutation/moveCard.ts":
/*!**************************************!*\
  !*** ./src/api/Mutation/moveCard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveCard": () => (/* binding */ moveCard)
/* harmony export */ });
/* harmony import */ var _prismaConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prismaConfig */ "./src/prismaConfig.ts");

const moveCard = async (_root, args, context) => {
    let moveCardResponseObject;
    const { id, pos } = args;
    try {
        const getPosition = await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.card.findFirst({
            where: { Id: id },
        });
        const getSwappedPosition = await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.card.findFirst({
            where: { Pos: pos }
        });
        await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.card.update({
            where: { Id: getSwappedPosition.Id },
            data: { Pos: getPosition.Pos }
        });
        const moveCard = await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.card.update({
            where: { Id: id },
            data: { Pos: pos }
        });
        moveCardResponseObject = { code: 200, message: "Card has been moved" };
        return moveCardResponseObject;
    }
    catch (error) {
        moveCardResponseObject = { code: 400, message: error.message };
        return moveCardResponseObject;
    }
};


/***/ }),

/***/ "./src/api/Mutation/updateCard.ts":
/*!****************************************!*\
  !*** ./src/api/Mutation/updateCard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateCard": () => (/* binding */ updateCard)
/* harmony export */ });
/* harmony import */ var _prismaConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prismaConfig */ "./src/prismaConfig.ts");

const updateCard = async (_root, args, context) => {
    let updateCardResponseObj;
    try {
        const { id, title, status } = args;
        const updatecard = await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.card.update({
            where: { Id: id },
            data: { Title: title, Status: status }
        });
        updateCardResponseObj = { code: 200, message: "Card Updated", Card: updatecard };
        return updateCardResponseObj;
    }
    catch (error) {
        updateCardResponseObj = { code: 400, message: error.message };
        return updateCardResponseObj;
    }
};


/***/ }),

/***/ "./src/api/Query/getAllLists.ts":
/*!**************************************!*\
  !*** ./src/api/Query/getAllLists.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllList": () => (/* binding */ getAllList)
/* harmony export */ });
/* harmony import */ var _prismaConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prismaConfig */ "./src/prismaConfig.ts");

const getAllList = async (_root, args, context) => {
    let allListResponseObj;
    try {
        const getlists = await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.card.groupBy({
            by: ['ListId']
        });
        allListResponseObj = { code: 200, message: "Details Fetched", List: getlists };
        return allListResponseObj;
    }
    catch (error) {
        allListResponseObj = { code: 400, message: error.message };
        return allListResponseObj;
    }
};


/***/ }),

/***/ "./src/api/Query/getListById.ts":
/*!**************************************!*\
  !*** ./src/api/Query/getListById.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getListByID": () => (/* binding */ getListByID)
/* harmony export */ });
/* harmony import */ var _prismaConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prismaConfig */ "./src/prismaConfig.ts");

const getListByID = async (_root, args, context) => {
    let listByIdResponseObj;
    const { id } = args;
    try {
        const getListByID = await _prismaConfig__WEBPACK_IMPORTED_MODULE_0__.prisma.card.groupBy({
            by: ['ListId'],
            where: { Id: id }
        });
        listByIdResponseObj = { code: 200, message: "Details Fetched", List: getListByID };
        return listByIdResponseObj;
    }
    catch (error) {
        listByIdResponseObj = { code: 400, message: error.message };
        return listByIdResponseObj;
    }
};


/***/ }),

/***/ "./src/api/resolver.ts":
/*!*****************************!*\
  !*** ./src/api/resolver.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trelloResolver": () => (/* binding */ trelloResolver)
/* harmony export */ });
/* harmony import */ var _Mutation_createCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mutation/createCard */ "./src/api/Mutation/createCard.ts");
/* harmony import */ var _Mutation_createList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mutation/createList */ "./src/api/Mutation/createList.ts");
/* harmony import */ var _Mutation_moveCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mutation/moveCard */ "./src/api/Mutation/moveCard.ts");
/* harmony import */ var _Mutation_updateCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mutation/updateCard */ "./src/api/Mutation/updateCard.ts");
/* harmony import */ var _Query_getAllLists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Query/getAllLists */ "./src/api/Query/getAllLists.ts");
/* harmony import */ var _Query_getListById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Query/getListById */ "./src/api/Query/getListById.ts");






const trelloResolver = {
    Query: {
        createCard: async (parent, _args, context) => (0,_Mutation_createCard__WEBPACK_IMPORTED_MODULE_0__.createCard)(parent, _args, context),
        createList: async (parent, _args, context) => (0,_Mutation_createList__WEBPACK_IMPORTED_MODULE_1__.createList)(parent, _args, context),
        moveCard: async (parent, _args, context) => (0,_Mutation_moveCard__WEBPACK_IMPORTED_MODULE_2__.moveCard)(parent, _args, context),
        updateCard: async (parent, _args, context) => (0,_Mutation_updateCard__WEBPACK_IMPORTED_MODULE_3__.updateCard)(parent, _args, context)
    },
    Mutation: {
        getAllList: async (parent, _args, context) => (0,_Query_getAllLists__WEBPACK_IMPORTED_MODULE_4__.getAllList)(parent, _args, context),
        getListByID: async (parent, _args, context) => (0,_Query_getListById__WEBPACK_IMPORTED_MODULE_5__.getListByID)(parent, _args, context)
    }
};


/***/ }),

/***/ "./src/api/schema.ts":
/*!***************************!*\
  !*** ./src/api/schema.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schema": () => (/* binding */ schema)
/* harmony export */ });
/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolver */ "./src/api/resolver.ts");
/* harmony import */ var _typedefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typedefs */ "./src/api/typedefs.ts");



const schema = (0,_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_0__.makeExecutableSchema)({
    typeDefs: [
        _typedefs__WEBPACK_IMPORTED_MODULE_2__.trelloTypeDefs
    ],
    resolvers: [
        _resolver__WEBPACK_IMPORTED_MODULE_1__.trelloResolver
    ]
});


/***/ }),

/***/ "./src/api/typedefs.ts":
/*!*****************************!*\
  !*** ./src/api/typedefs.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trelloTypeDefs": () => (/* binding */ trelloTypeDefs)
/* harmony export */ });
const trelloTypeDefs = `
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
`;


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = process.env;
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./src/prismaConfig.ts":
/*!*****************************!*\
  !*** ./src/prismaConfig.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prisma": () => (/* binding */ prisma)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
const changePath = async () => {
    await prisma.$queryRaw `SET search_path TO "$user", public;`;
};
changePath();


/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@graphql-tools/schema");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("apollo-server");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/schema */ "./src/api/schema.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.ts");
const { ApolloServer } = __webpack_require__(/*! apollo-server */ "apollo-server");


(__webpack_require__(/*! dotenv */ "dotenv").config)();
const server = new ApolloServer({
    schema: _api_schema__WEBPACK_IMPORTED_MODULE_0__.schema,
    context: async ({ req }) => req,
    stopGracePeriodMillis: 0
});
server.listen({ port: _config__WEBPACK_IMPORTED_MODULE_1__["default"].PORT }).then(({ url }) => {
    console.log(`:rocket:  Server ready at ${url}`);
});

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsbUJBQU8sQ0FBQyxvQ0FBZSxDQUFDLENBQUM7QUFDWjtBQUNSO0FBQzlCLG9EQUF3QixFQUFFLENBQUM7QUFFM0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUM7SUFDOUIsTUFBTTtJQUNOLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRztJQUMvQixxQkFBcUIsRUFBRyxDQUFDO0NBQzFCLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsb0RBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO0lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDbEQsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0X3RyZWxsby8uL3NyYy9hcGkvTXV0YXRpb24vY3JlYXRlQ2FyZC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RyZWxsby8uL3NyYy9hcGkvTXV0YXRpb24vY3JlYXRlTGlzdC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RyZWxsby8uL3NyYy9hcGkvTXV0YXRpb24vbW92ZUNhcmQudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90cmVsbG8vLi9zcmMvYXBpL011dGF0aW9uL3VwZGF0ZUNhcmQudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90cmVsbG8vLi9zcmMvYXBpL1F1ZXJ5L2dldEFsbExpc3RzLnRzIiwid2VicGFjazovL3Byb2plY3RfdHJlbGxvLy4vc3JjL2FwaS9RdWVyeS9nZXRMaXN0QnlJZC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RyZWxsby8uL3NyYy9hcGkvcmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90cmVsbG8vLi9zcmMvYXBpL3NjaGVtYS50cyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RyZWxsby8uL3NyYy9hcGkvdHlwZWRlZnMudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90cmVsbG8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL3Byb2plY3RfdHJlbGxvLy4vc3JjL3ByaXNtYUNvbmZpZy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RyZWxsby9leHRlcm5hbCBjb21tb25qcyBcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiIiwid2VicGFjazovL3Byb2plY3RfdHJlbGxvL2V4dGVybmFsIGNvbW1vbmpzIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9wcm9qZWN0X3RyZWxsby9leHRlcm5hbCBjb21tb25qcyBcImFwb2xsby1zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9wcm9qZWN0X3RyZWxsby9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL3Byb2plY3RfdHJlbGxvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3RfdHJlbGxvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3RfdHJlbGxvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RyZWxsby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3RfdHJlbGxvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdF90cmVsbG8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uL3ByaXNtYUNvbmZpZ1wiXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYXJkID0gYXN5bmMgKF9yb290LCBhcmdzLCBjb250ZXh0KSA9PiB7XG4gICAgbGV0IGNyZWF0ZWNhcmRSZXNwb25zZU9iaixjcmVhdGVjYXJkXG4gICAgY29uc3Qge3RpdGxlLGxpc3R0aXRsZSxwb3NpdGlvbn0gPSBhcmdzXG50cnl7XG4gICAgY29uc3QgZ2V0bGlzdCA9IGF3YWl0IHByaXNtYS5saXN0LmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOntUaXRsZSA6IGxpc3R0aXRsZX1cbiAgICB9KVxuICAgIGNvbnN0IGdldHBvc2l0aW9uID0gYXdhaXQgcHJpc21hLmNhcmQuY291bnQoe1xuICAgICAgICB3aGVyZTp7UG9zIDogcG9zaXRpb259LFxuICAgIH0pXG4gICAgaWYoZ2V0cG9zaXRpb24gJiYgZ2V0cG9zaXRpb24gPiAxKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHsgY29kZTogNDAwLCBtZXNzYWdlOiBcIkNhcmQgaXMgYWxyZWFkeSBwcmVzZW50IGF0IHRoaXMgcG9zaXRpb25cIiB9O1xuICAgIH1cbiAgICBlbHNle1xuICAgICBjcmVhdGVjYXJkID0gYXdhaXQgcHJpc21hLmNhcmQuY3JlYXRlKHtcbiAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICBUaXRsZSA6IHRpdGxlLFxuICAgICAgICAgICAgU3RhdHVzIDogXCJUbyBEb1wiLFxuICAgICAgICAgICAgUG9zOiBwb3NpdGlvbixcbiAgICAgICAgICAgIExpc3RJZCA6IGdldGxpc3QuSWRcbiAgICAgICAgfSxcbiAgICB9KVxufVxuY3JlYXRlY2FyZFJlc3BvbnNlT2JqID0geyBjb2RlOiAyMDAsIG1lc3NhZ2U6IFwiQ2FyZCBjcmVhdGVkXCIsIGNhcmREZXRhaWxzOiBjcmVhdGVjYXJkIH07XG5yZXR1cm4gY3JlYXRlY2FyZFJlc3BvbnNlT2JqO1xufVxuY2F0Y2ggKGVycm9yKSB7XG4gICAgY3JlYXRlY2FyZFJlc3BvbnNlT2JqID0geyBjb2RlOiA0MDAsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICByZXR1cm4gY3JlYXRlY2FyZFJlc3BvbnNlT2JqO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vcHJpc21hQ29uZmlnXCJcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUxpc3QgPSBhc3luYyhfcm9vdCwgYXJncywgY29udGV4dCkgPT4ge1xuICAgIGxldCBjcmVhdGVMaXN0UmVzcG9uc2VPYmosY3JlYXRlTGlzdFxuICAgIHRyeXtcbmNvbnN0IHt0aXRsZX0gPSBhcmdzXG5jb25zdCBnZXRUaXRsZSA9IGF3YWl0IHByaXNtYS5saXN0LmNvdW50KHtcbiAgICB3aGVyZTp7VGl0bGUgOiB0aXRsZX1cbn0pXG5pZihnZXRUaXRsZSAmJiBnZXRUaXRsZSA+IDApe1xuICAgIHJldHVybiB7IGNvZGU6IDQwMCwgbWVzc2FnZTogXCJMaXN0IGFscmVhZHkgZXhpc3RzXCIgfTtcbn1cbmVsc2V7XG4gICAgY3JlYXRlTGlzdCA9IGF3YWl0IHByaXNtYS5saXN0LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgVGl0bGUgOiB0aXRsZVxuICAgICAgICB9XG4gICAgfSlcbn1cbmNyZWF0ZUxpc3RSZXNwb25zZU9iaiA9IHtjb2RlIDoyMDAgLCBtZXNzYWdlIDogXCJMaXN0IGNyZWF0ZWRcIn1cbnJldHVybiBjcmVhdGVMaXN0UmVzcG9uc2VPYmpcbiAgICB9XG4gICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjcmVhdGVMaXN0UmVzcG9uc2VPYmogPSB7Y29kZSA6NDAwICwgbWVzc2FnZSA6IGVycm9yLm1lc3NhZ2V9XG4gICAgICAgIHJldHVybiBjcmVhdGVMaXN0UmVzcG9uc2VPYmpcbiAgICB9XG59IiwiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uL3ByaXNtYUNvbmZpZ1wiXG5cbmV4cG9ydCBjb25zdCBtb3ZlQ2FyZCA9IGFzeW5jIChfcm9vdCwgYXJncywgY29udGV4dCk9PiB7XG4gICAgbGV0IG1vdmVDYXJkUmVzcG9uc2VPYmplY3RcbiAgICBjb25zdCB7aWQscG9zfSA9YXJnc1xuICAgIHRyeSB7XG5jb25zdCBnZXRQb3NpdGlvbiA9IGF3YWl0IHByaXNtYS5jYXJkLmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6e0lkIDogaWR9LFxufSlcbmNvbnN0IGdldFN3YXBwZWRQb3NpdGlvbiA9IGF3YWl0IHByaXNtYS5jYXJkLmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6e1BvcyA6IHBvc31cbn0pXG5hd2FpdCBwcmlzbWEuY2FyZC51cGRhdGUoe1xuICAgIHdoZXJlOnsgSWQ6IGdldFN3YXBwZWRQb3NpdGlvbi5JZH0sXG4gICAgZGF0YSA6eyBQb3MgOiBnZXRQb3NpdGlvbi5Qb3N9XG59KVxuY29uc3QgbW92ZUNhcmQgPSBhd2FpdCBwcmlzbWEuY2FyZC51cGRhdGUoe1xuICAgIHdoZXJlOntJZCA6IGlkfSxcbiAgICBkYXRhOntQb3MgOiBwb3N9XG59KVxubW92ZUNhcmRSZXNwb25zZU9iamVjdCA9IHtjb2RlIDogMjAwICwgbWVzc2FnZSA6IFwiQ2FyZCBoYXMgYmVlbiBtb3ZlZFwiIH1cbnJldHVybiBtb3ZlQ2FyZFJlc3BvbnNlT2JqZWN0XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgbW92ZUNhcmRSZXNwb25zZU9iamVjdCA9IHsgY29kZTogNDAwLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH07XG4gICAgICAgIHJldHVybiBtb3ZlQ2FyZFJlc3BvbnNlT2JqZWN0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vcHJpc21hQ29uZmlnXCJcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhcmQgPSBhc3luYyhfcm9vdCxhcmdzLGNvbnRleHQpID0+e1xubGV0IHVwZGF0ZUNhcmRSZXNwb25zZU9ialxudHJ5IHtcbmNvbnN0IHtpZCx0aXRsZSxzdGF0dXN9ID0gYXJnc1xuY29uc3QgdXBkYXRlY2FyZCA9IGF3YWl0IHByaXNtYS5jYXJkLnVwZGF0ZSh7XG4gICAgd2hlcmU6eyBJZCA6IGlkfSxcbiAgICBkYXRhOnsgVGl0bGUgOnRpdGxlLFN0YXR1czpzdGF0dXN9XG59KVxudXBkYXRlQ2FyZFJlc3BvbnNlT2JqID0ge2NvZGUgOiAyMDAgLCBtZXNzYWdlOlwiQ2FyZCBVcGRhdGVkXCIsQ2FyZCAgOiB1cGRhdGVjYXJkfVxucmV0dXJuIHVwZGF0ZUNhcmRSZXNwb25zZU9ialxufVxuY2F0Y2goZXJyb3Ipe1xuICAgIHVwZGF0ZUNhcmRSZXNwb25zZU9iaiA9IHtjb2RlIDo0MDAgLCBtZXNzYWdlIDplcnJvci5tZXNzYWdlfVxuICAgIHJldHVybiB1cGRhdGVDYXJkUmVzcG9uc2VPYmpcbn1cbn0iLCJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vcHJpc21hQ29uZmlnXCJcblxuZXhwb3J0IGNvbnN0IGdldEFsbExpc3QgPSBhc3luYyAoX3Jvb3QsIGFyZ3MsIGNvbnRleHQpID0+IHtcbiAgICBsZXQgYWxsTGlzdFJlc3BvbnNlT2JqXG50cnl7XG4gICAgY29uc3QgZ2V0bGlzdHMgPSAgYXdhaXQgcHJpc21hLmNhcmQuZ3JvdXBCeSh7XG4gICAgICAgIGJ5IDogWydMaXN0SWQnXVxuICAgIH0pXG4gICAgYWxsTGlzdFJlc3BvbnNlT2JqID0ge2NvZGUgOjIwMCAsIG1lc3NhZ2U6IFwiRGV0YWlscyBGZXRjaGVkXCIsIExpc3QgOiBnZXRsaXN0c31cbiAgICByZXR1cm4gYWxsTGlzdFJlc3BvbnNlT2JqXG59XG5jYXRjaChlcnJvcil7XG4gICAgYWxsTGlzdFJlc3BvbnNlT2JqID0ge2NvZGUgOiA0MDAgLG1lc3NhZ2UgOiBlcnJvci5tZXNzYWdlfVxuICAgIHJldHVybiBhbGxMaXN0UmVzcG9uc2VPYmpcbn1cbn1cbiIsImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi9wcmlzbWFDb25maWdcIlxuXG5leHBvcnQgY29uc3QgZ2V0TGlzdEJ5SUQgPSBhc3luYyAoX3Jvb3QsYXJncyxjb250ZXh0KSA9PiB7XG4gICAgbGV0IGxpc3RCeUlkUmVzcG9uc2VPYmpcbiAgICBjb25zdCB7aWR9ID0gYXJnc1xudHJ5e1xuICAgIGNvbnN0IGdldExpc3RCeUlEID0gIGF3YWl0IHByaXNtYS5jYXJkLmdyb3VwQnkoe1xuICAgICAgICBieSA6IFsnTGlzdElkJ10sXG4gICAgICAgIHdoZXJlIDoge0lkIDogaWR9XG4gICAgfSlcbiAgICBsaXN0QnlJZFJlc3BvbnNlT2JqID0ge2NvZGUgOjIwMCAsIG1lc3NhZ2U6IFwiRGV0YWlscyBGZXRjaGVkXCIsIExpc3QgOiBnZXRMaXN0QnlJRH1cbiAgICByZXR1cm4gbGlzdEJ5SWRSZXNwb25zZU9ialxufVxuY2F0Y2goZXJyb3Ipe1xuICAgIGxpc3RCeUlkUmVzcG9uc2VPYmogPSB7Y29kZSA6IDQwMCAsbWVzc2FnZSA6IGVycm9yLm1lc3NhZ2V9XG4gICAgcmV0dXJuIGxpc3RCeUlkUmVzcG9uc2VPYmpcbn1cbn0iLCJpbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vTXV0YXRpb24vY3JlYXRlQ2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL011dGF0aW9uL2NyZWF0ZUxpc3RcIjtcbmltcG9ydCB7IG1vdmVDYXJkIH0gZnJvbSBcIi4vTXV0YXRpb24vbW92ZUNhcmRcIjtcbmltcG9ydCB7IHVwZGF0ZUNhcmQgfSBmcm9tIFwiLi9NdXRhdGlvbi91cGRhdGVDYXJkXCI7XG5pbXBvcnQgeyBnZXRBbGxMaXN0IH0gZnJvbSBcIi4vUXVlcnkvZ2V0QWxsTGlzdHNcIjtcbmltcG9ydCB7IGdldExpc3RCeUlEfSBmcm9tIFwiLi9RdWVyeS9nZXRMaXN0QnlJZFwiO1xuXG5leHBvcnQgY29uc3QgdHJlbGxvUmVzb2x2ZXIgPSB7XG4gICAgUXVlcnkgOiB7XG4gICAgICAgIGNyZWF0ZUNhcmQgOiBhc3luYyhwYXJlbnQsIF9hcmdzOiB7IGRhdGE6IGFueSB9LCBjb250ZXh0KSA9PlxuICAgICAgICBjcmVhdGVDYXJkKHBhcmVudCwgX2FyZ3MsIGNvbnRleHQpLFxuICAgICAgICBjcmVhdGVMaXN0IDogYXN5bmMocGFyZW50LCBfYXJnczogeyBkYXRhOiBhbnkgfSwgY29udGV4dCkgPT5cbiAgICAgICAgY3JlYXRlTGlzdChwYXJlbnQsIF9hcmdzLCBjb250ZXh0KSxcbiAgICAgICAgbW92ZUNhcmQgOiBhc3luYyhwYXJlbnQsIF9hcmdzOiB7IGRhdGE6IGFueSB9LCBjb250ZXh0KSA9PlxuICAgICAgICBtb3ZlQ2FyZChwYXJlbnQsIF9hcmdzLCBjb250ZXh0KSxcbiAgICAgICAgdXBkYXRlQ2FyZCA6IGFzeW5jKHBhcmVudCwgX2FyZ3M6IHsgZGF0YTogYW55IH0sIGNvbnRleHQpID0+XG4gICAgICAgIHVwZGF0ZUNhcmQocGFyZW50LCBfYXJncywgY29udGV4dClcbiAgICB9LFxuICAgIE11dGF0aW9uIDoge1xuICAgICAgICBnZXRBbGxMaXN0IDogYXN5bmMocGFyZW50LCBfYXJnczogeyBkYXRhOiBhbnkgfSwgY29udGV4dCkgPT5cbiAgICAgICAgZ2V0QWxsTGlzdChwYXJlbnQsIF9hcmdzLCBjb250ZXh0KSxcbiAgICAgICAgZ2V0TGlzdEJ5SUQgOiBhc3luYyhwYXJlbnQsIF9hcmdzOiB7IGRhdGE6IGFueSB9LCBjb250ZXh0KSA9PlxuICAgICAgICBnZXRMaXN0QnlJRChwYXJlbnQsIF9hcmdzLCBjb250ZXh0KVxuICAgIH1cbn07IiwiaW1wb3J0IHsgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tIFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCI7XG5pbXBvcnQgeyB0cmVsbG9SZXNvbHZlciB9IGZyb20gXCIuL3Jlc29sdmVyXCI7XG5pbXBvcnQgeyB0cmVsbG9UeXBlRGVmcyB9IGZyb20gXCIuL3R5cGVkZWZzXCI7XG5cbmV4cG9ydCBjb25zdCBzY2hlbWEgPSBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7XG4gICAgdHlwZURlZnM6W1xuICAgICAgICB0cmVsbG9UeXBlRGVmc1xuICAgIF0sXG4gICAgcmVzb2x2ZXJzIDpbXG4gICAgICAgIHRyZWxsb1Jlc29sdmVyXG4gICAgXVxufSk7IiwiZXhwb3J0IGNvbnN0IHRyZWxsb1R5cGVEZWZzID0gYFxudHlwZSBjYXJkIHtcbiAgICBUaXRsZSA6IFN0cmluZ1xuICAgIFN0YXR1cyA6IFN0cmluZ1xuICAgIFBvczogSW50XG4gICAgTGlzdElkIDogSW50XG59XG50eXBlIHVwZGF0ZWNhcmQge1xuICAgIFRpdGxlIDogU3RyaW5nXG4gICAgU3RhdHVzIDogU3RyaW5nXG59XG50eXBlIGxpc3Qge1xuICAgIElkIDogSW50XG4gICAgVGl0bGUgOiBTdHJpbmdcbiAgICBTdGF0dXMgOiBTdHJpbmdcbiAgICBMaXN0SWQgOiBJbnRcbiAgICBQb3MgOiBJbnRcbn1cbnR5cGUgY3JlYXRlY2FyZFJlc3BvbnNlT2JqIHtcbiAgICBjb2RlIDogSW50XG4gICAgbWVzc2FnZSA6IFN0cmluZ1xuICAgIGNhcmREZXRhaWxzIDogY2FyZFxufVxudHlwZSBjcmVhdGVMaXN0UmVzcG9uc2VPYmoge1xuICAgIGNvZGUgOiBJbnRcbiAgICBtZXNzYWdlIDogU3RyaW5nXG59XG50eXBlIG1vdmVDYXJkUmVzcG9uc2VPYmplY3Qge1xuICAgIGNvZGUgOiBJbnRcbiAgICBtZXNzYWdlIDogU3RyaW5nXG59XG50eXBlIHVwZGF0ZUNhcmRSZXNwb25zZU9iaiB7XG4gICAgY29kZSA6IEludFxuICAgIG1lc3NhZ2UgOiBTdHJpbmdcbiAgICBDYXJkIDogdXBkYXRlY2FyZFxufVxudHlwZSBhbGxMaXN0UmVzcG9uc2VPYmoge1xuICAgIGNvZGUgOiBJbnRcbiAgICBtZXNzYWdlIDogU3RyaW5nXG4gICAgTGlzdCA6IGxpc3Rcbn1cbnR5cGUgbGlzdEJ5SWRSZXNwb25zZU9iaiB7XG4gICAgY29kZSA6IEludFxuICAgIG1lc3NhZ2UgOiBTdHJpbmdcbiAgICBMaXN0IDogbGlzdFxufVxudHlwZSBRdWVyeSB7XG4gICAgY3JlYXRlQ2FyZCA6IGNyZWF0ZWNhcmRSZXNwb25zZU9ialxuICAgIGNyZWF0ZUxpc3QgOiBjcmVhdGVMaXN0UmVzcG9uc2VPYmpcbiAgICBtb3ZlQ2FyZCA6IG1vdmVDYXJkUmVzcG9uc2VPYmplY3RcbiAgICB1cGRhdGVDYXJkIDogdXBkYXRlQ2FyZFJlc3BvbnNlT2JqXG59XG50eXBlIE11dGF0aW9uIHtcbiAgICBnZXRBbGxMaXN0IDogYWxsTGlzdFJlc3BvbnNlT2JqXG4gICAgZ2V0TGlzdEJ5SUQoXG4gICAgICAgIGlkIDogU3RyaW5nXG4gICAgKTpsaXN0QnlJZFJlc3BvbnNlT2JqXG59XG5gIiwiY29uc3QgY29uZmlnID0gcHJvY2Vzcy5lbnY7XG5cbmlmICghY29uZmlnLk5PREVfRU5WKSB7XG4gIGNvbmZpZy5OT0RFX0VOViA9IFwicHJvZHVjdGlvblwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbmNvbnN0IGNoYW5nZVBhdGggPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHByaXNtYS4kcXVlcnlSYXdgU0VUIHNlYXJjaF9wYXRoIFRPIFwiJHVzZXJcIiwgcHVibGljO2A7XG59O1xuY2hhbmdlUGF0aCgpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgeyBBcG9sbG9TZXJ2ZXIgfSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpO1xuaW1wb3J0IHsgc2NoZW1hIH0gZnJvbSAnLi9hcGkvc2NoZW1hJztcbmltcG9ydCBjb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xuXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgc2NoZW1hLFxuICBjb250ZXh0OiBhc3luYyAoeyByZXEgfSkgPT4gcmVxLFxuICBzdG9wR3JhY2VQZXJpb2RNaWxsaXMgOiAwXG59KTtcbi8vIFRoZSBgbGlzdGVuYCBtZXRob2QgbGF1bmNoZXMgYSB3ZWIgc2VydmVyLlxuc2VydmVyLmxpc3Rlbih7IHBvcnQ6IGNvbmZpZy5QT1JUIH0pLnRoZW4oKHsgdXJsIH0pID0+IHtcbiAgY29uc29sZS5sb2coYDpyb2NrZXQ6ICBTZXJ2ZXIgcmVhZHkgYXQgJHt1cmx9YCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==