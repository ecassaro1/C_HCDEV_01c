"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_Sales_For_1997RequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Product_Sales_For_1997_1 = require("./Product_Sales_For_1997");
/**
 * Request builder class for operations supported on the {@link Product_Sales_For_1997} entity.
 */
class Product_Sales_For_1997RequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Product_Sales_For_1997` entities.
     * @returns A request builder for creating requests to retrieve all `Product_Sales_For_1997` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Product_Sales_For_1997` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Product_Sales_For_1997`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Product_Sales_For_1997` entity based on its keys.
     * @param categoryName Key property. See {@link Product_Sales_For_1997.categoryName}.
     * @param productName Key property. See {@link Product_Sales_For_1997.productName}.
     * @returns A request builder for creating requests to retrieve one `Product_Sales_For_1997` entity based on its keys.
     */
    getByKey(categoryName, productName) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            CategoryName: categoryName,
            ProductName: productName
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Product_Sales_For_1997`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Product_Sales_For_1997`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(categoryNameOrEntity, productName) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, categoryNameOrEntity instanceof Product_Sales_For_1997_1.Product_Sales_For_1997
            ? categoryNameOrEntity
            : {
                CategoryName: categoryNameOrEntity,
                ProductName: productName
            });
    }
}
exports.Product_Sales_For_1997RequestBuilder = Product_Sales_For_1997RequestBuilder;
//# sourceMappingURL=Product_Sales_For_1997RequestBuilder.js.map