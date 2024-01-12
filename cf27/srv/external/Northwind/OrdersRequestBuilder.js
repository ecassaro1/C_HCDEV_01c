"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Orders_1 = require("./Orders");
/**
 * Request builder class for operations supported on the {@link Orders} entity.
 */
class OrdersRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Orders` entities.
     * @returns A request builder for creating requests to retrieve all `Orders` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Orders` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Orders`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Orders` entity based on its keys.
     * @param orderId Key property. See {@link Orders.orderId}.
     * @returns A request builder for creating requests to retrieve one `Orders` entity based on its keys.
     */
    getByKey(orderId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            OrderID: orderId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Orders`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Orders`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(orderIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, orderIdOrEntity instanceof Orders_1.Orders
            ? orderIdOrEntity
            : { OrderID: orderIdOrEntity });
    }
}
exports.OrdersRequestBuilder = OrdersRequestBuilder;
//# sourceMappingURL=OrdersRequestBuilder.js.map