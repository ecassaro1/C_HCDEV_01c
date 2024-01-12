"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alphabetical_List_Of_ProductsRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Alphabetical_List_Of_Products_1 = require("./Alphabetical_List_Of_Products");
/**
 * Request builder class for operations supported on the {@link Alphabetical_List_Of_Products} entity.
 */
class Alphabetical_List_Of_ProductsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Alphabetical_List_Of_Products` entities.
     * @returns A request builder for creating requests to retrieve all `Alphabetical_List_Of_Products` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Alphabetical_List_Of_Products` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Alphabetical_List_Of_Products`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Alphabetical_List_Of_Products` entity based on its keys.
     * @param categoryName Key property. See {@link Alphabetical_List_Of_Products.categoryName}.
     * @param discontinued Key property. See {@link Alphabetical_List_Of_Products.discontinued}.
     * @param productId Key property. See {@link Alphabetical_List_Of_Products.productId}.
     * @param productName Key property. See {@link Alphabetical_List_Of_Products.productName}.
     * @returns A request builder for creating requests to retrieve one `Alphabetical_List_Of_Products` entity based on its keys.
     */
    getByKey(categoryName, discontinued, productId, productName) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            CategoryName: categoryName,
            Discontinued: discontinued,
            ProductID: productId,
            ProductName: productName
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Alphabetical_List_Of_Products`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Alphabetical_List_Of_Products`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(categoryNameOrEntity, discontinued, productId, productName) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, categoryNameOrEntity instanceof Alphabetical_List_Of_Products_1.Alphabetical_List_Of_Products
            ? categoryNameOrEntity
            : {
                CategoryName: categoryNameOrEntity,
                Discontinued: discontinued,
                ProductID: productId,
                ProductName: productName
            });
    }
}
exports.Alphabetical_List_Of_ProductsRequestBuilder = Alphabetical_List_Of_ProductsRequestBuilder;
//# sourceMappingURL=Alphabetical_List_Of_ProductsRequestBuilder.js.map