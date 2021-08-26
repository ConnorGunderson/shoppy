"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
var faker_1 = __importDefault(require("faker"));
exports.products = Array(8).fill(null).map(function (p) { return ({
    name: faker_1.default.vehicle.vehicle(),
    price: +faker_1.default.commerce.price(),
    image: faker_1.default.image.transport(),
}); });
//# sourceMappingURL=seed.data.js.map