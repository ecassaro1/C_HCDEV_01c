"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Products_1 = require("./Products");
/**
 * Request builder class for operations supported on the {@link Products} entity.
 */
class ProductsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Products` entities.
     * @returns A request builder for creating requests to retrieve all `Products` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Products` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Products`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Products` entity based on its keys.
     * @param productId Key property. See {@link Products.productId}.
     * @returns A request builder for creating requests to retrieve one `Products` entity based on its keys.
     */
    getByKey(productId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            ProductID: productId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Products`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Products`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productIdOrEntity instanceof Products_1.Products
            ? productIdOrEntity
            : { ProductID: productIdOrEntity });
    }
}
exports.ProductsRequestBuilder = ProductsRequestBuilder;
//# sourceMappingURL=ProductsRequestBuilder.js.map