"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// instantiate server on PORT 5000
var server_1 = __importDefault(require("./server"));
server_1.default.listen({ port: 5000 }).then(function (s) {
    console.log("Apollo server currently running at " + s.url);
});
//# sourceMappingURL=index.js.map