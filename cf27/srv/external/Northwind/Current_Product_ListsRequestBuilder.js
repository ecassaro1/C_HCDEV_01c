"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Current_Product_ListsRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Current_Product_Lists_1 = require("./Current_Product_Lists");
/**
 * Request builder class for operations supported on the {@link Current_Product_Lists} entity.
 */
class Current_Product_ListsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Current_Product_Lists` entities.
     * @returns A request builder for creating requests to retrieve all `Current_Product_Lists` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Current_Product_Lists` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Current_Product_Lists`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Current_Product_Lists` entity based on its keys.
     * @param productId Key property. See {@link Current_Product_Lists.productId}.
     * @param productName Key property. See {@link Current_Product_Lists.productName}.
     * @returns A request builder for creating requests to retrieve one `Current_Product_Lists` entity based on its keys.
     */
    getByKey(productId, productName) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            ProductID: productId,
            ProductName: productName
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Current_Product_Lists`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Current_Product_Lists`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productIdOrEntity, productName) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productIdOrEntity instanceof Current_Product_Lists_1.Current_Product_Lists
            ? productIdOrEntity
            : {
                ProductID: productIdOrEntity,
                ProductName: productName
            });
    }
}
exports.Current_Product_ListsRequestBuilder = Current_Product_ListsRequestBuilder;
//# sourceMappingURL=Current_Product_ListsRequestBuilder.js.map