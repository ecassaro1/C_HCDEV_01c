"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_DetailsRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Order_Details_1 = require("./Order_Details");
/**
 * Request builder class for operations supported on the {@link Order_Details} entity.
 */
class Order_DetailsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Order_Details` entities.
     * @returns A request builder for creating requests to retrieve all `Order_Details` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Order_Details` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Order_Details`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Order_Details` entity based on its keys.
     * @param orderId Key property. See {@link Order_Details.orderId}.
     * @param productId Key property. See {@link Order_Details.productId}.
     * @returns A request builder for creating requests to retrieve one `Order_Details` entity based on its keys.
     */
    getByKey(orderId, productId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            OrderID: orderId,
            ProductID: productId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Order_Details`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Order_Details`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(orderIdOrEntity, productId) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, orderIdOrEntity instanceof Order_Details_1.Order_Details
            ? orderIdOrEntity
            : {
                OrderID: orderIdOrEntity,
                ProductID: productId
            });
    }
}
exports.Order_DetailsRequestBuilder = Order_DetailsRequestBuilder;
//# sourceMappingURL=Order_DetailsRequestBuilder.js.map