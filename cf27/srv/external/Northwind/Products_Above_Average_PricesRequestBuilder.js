"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products_Above_Average_PricesRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Products_Above_Average_Prices_1 = require("./Products_Above_Average_Prices");
/**
 * Request builder class for operations supported on the {@link Products_Above_Average_Prices} entity.
 */
class Products_Above_Average_PricesRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Products_Above_Average_Prices` entities.
     * @returns A request builder for creating requests to retrieve all `Products_Above_Average_Prices` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Products_Above_Average_Prices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Products_Above_Average_Prices`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Products_Above_Average_Prices` entity based on its keys.
     * @param productName Key property. See {@link Products_Above_Average_Prices.productName}.
     * @returns A request builder for creating requests to retrieve one `Products_Above_Average_Prices` entity based on its keys.
     */
    getByKey(productName) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, { ProductName: productName });
    }
    /**
     * Returns a request builder for updating an entity of type `Products_Above_Average_Prices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Products_Above_Average_Prices`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productNameOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productNameOrEntity instanceof Products_Above_Average_Prices_1.Products_Above_Average_Prices
            ? productNameOrEntity
            : { ProductName: productNameOrEntity });
    }
}
exports.Products_Above_Average_PricesRequestBuilder = Products_Above_Average_PricesRequestBuilder;
//# sourceMappingURL=Products_Above_Average_PricesRequestBuilder.js.map