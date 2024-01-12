"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_By_CategoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Sales_By_Categories_1 = require("./Sales_By_Categories");
/**
 * Request builder class for operations supported on the {@link Sales_By_Categories} entity.
 */
class Sales_By_CategoriesRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Sales_By_Categories` entities.
     * @returns A request builder for creating requests to retrieve all `Sales_By_Categories` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Sales_By_Categories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Sales_By_Categories`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Sales_By_Categories` entity based on its keys.
     * @param categoryId Key property. See {@link Sales_By_Categories.categoryId}.
     * @param categoryName Key property. See {@link Sales_By_Categories.categoryName}.
     * @param productName Key property. See {@link Sales_By_Categories.productName}.
     * @returns A request builder for creating requests to retrieve one `Sales_By_Categories` entity based on its keys.
     */
    getByKey(categoryId, categoryName, productName) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            CategoryID: categoryId,
            CategoryName: categoryName,
            ProductName: productName
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Sales_By_Categories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Sales_By_Categories`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(categoryIdOrEntity, categoryName, productName) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, categoryIdOrEntity instanceof Sales_By_Categories_1.Sales_By_Categories
            ? categoryIdOrEntity
            : {
                CategoryID: categoryIdOrEntity,
                CategoryName: categoryName,
                ProductName: productName
            });
    }
}
exports.Sales_By_CategoriesRequestBuilder = Sales_By_CategoriesRequestBuilder;
//# sourceMappingURL=Sales_By_CategoriesRequestBuilder.js.map