"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_SubtotalsRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Order_Subtotals_1 = require("./Order_Subtotals");
/**
 * Request builder class for operations supported on the {@link Order_Subtotals} entity.
 */
class Order_SubtotalsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Order_Subtotals` entities.
     * @returns A request builder for creating requests to retrieve all `Order_Subtotals` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Order_Subtotals` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Order_Subtotals`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Order_Subtotals` entity based on its keys.
     * @param orderId Key property. See {@link Order_Subtotals.orderId}.
     * @returns A request builder for creating requests to retrieve one `Order_Subtotals` entity based on its keys.
     */
    getByKey(orderId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            OrderID: orderId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Order_Subtotals`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Order_Subtotals`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(orderIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, orderIdOrEntity instanceof Order_Subtotals_1.Order_Subtotals
            ? orderIdOrEntity
            : { OrderID: orderIdOrEntity });
    }
}
exports.Order_SubtotalsRequestBuilder = Order_SubtotalsRequestBuilder;
//# sourceMappingURL=Order_SubtotalsRequestBuilder.js.map