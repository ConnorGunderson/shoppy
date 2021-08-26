"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMutations = exports.OrderQueries = exports.Order = void 0;
var nexus_1 = require("nexus");
exports.Order = nexus_1.objectType({
    name: 'Order',
    definition: function (t) {
        t.model.id(),
            t.model.email(),
            t.model.subtotal(),
            t.model.tax(),
            t.model.total(),
            t.model.created(),
            t.model.items();
    }
});
exports.OrderQueries = nexus_1.extendType({
    type: 'Query',
    definition: function (t) {
        t.crud.order(),
            t.crud.orders({
                filtering: true
            });
    }
});
exports.OrderMutations = nexus_1.extendType({
    type: 'Mutation',
    definition: function (t) {
        t.crud.createOneOrder();
    }
});
//# sourceMappingURL=Order.js.map