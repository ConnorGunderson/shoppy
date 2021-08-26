"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
var nexus_1 = require("nexus");
exports.OrderItem = nexus_1.objectType({
    name: 'OrderItem',
    definition: function (t) {
        t.model.id(),
            t.model.price(),
            t.model.product(),
            t.model.order();
    }
});
//# sourceMappingURL=OrderItem.js.map