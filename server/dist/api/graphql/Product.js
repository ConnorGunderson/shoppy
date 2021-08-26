"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMutations = exports.ProductQuerys = exports.Product = void 0;
var nexus_1 = require("nexus");
exports.Product = nexus_1.objectType({
    name: 'Product',
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.price();
        t.model.image();
    },
});
exports.ProductQuerys = nexus_1.extendType({
    type: 'Query',
    definition: function (t) {
        t.crud.product();
        t.crud.products({
            filtering: true,
        });
    },
});
exports.ProductMutations = nexus_1.extendType({
    type: 'Mutation',
    definition: function (t) {
        t.crud.createOneProduct();
        t.crud.deleteOneProduct();
    },
});
//# sourceMappingURL=Product.js.map