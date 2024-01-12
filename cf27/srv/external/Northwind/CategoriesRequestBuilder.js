"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Categories_1 = require("./Categories");
/**
 * Request builder class for operations supported on the {@link Categories} entity.
 */
class CategoriesRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Categories` entities.
     * @returns A request builder for creating requests to retrieve all `Categories` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Categories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Categories`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Categories` entity based on its keys.
     * @param categoryId Key property. See {@link Categories.categoryId}.
     * @returns A request builder for creating requests to retrieve one `Categories` entity based on its keys.
     */
    getByKey(categoryId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            CategoryID: categoryId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Categories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Categories`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(categoryIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, categoryIdOrEntity instanceof Categories_1.Categories
            ? categoryIdOrEntity
            : { CategoryID: categoryIdOrEntity });
    }
}
exports.CategoriesRequestBuilder = CategoriesRequestBuilder;
//# sourceMappingURL=CategoriesRequestBuilder.js.map