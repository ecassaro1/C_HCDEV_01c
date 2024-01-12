"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Customers_1 = require("./Customers");
/**
 * Request builder class for operations supported on the {@link Customers} entity.
 */
class CustomersRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Customers` entities.
     * @returns A request builder for creating requests to retrieve all `Customers` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Customers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Customers`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Customers` entity based on its keys.
     * @param customerId Key property. See {@link Customers.customerId}.
     * @returns A request builder for creating requests to retrieve one `Customers` entity based on its keys.
     */
    getByKey(customerId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            CustomerID: customerId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Customers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Customers`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(customerIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, customerIdOrEntity instanceof Customers_1.Customers
            ? customerIdOrEntity
            : { CustomerID: customerIdOrEntity });
    }
}
exports.CustomersRequestBuilder = CustomersRequestBuilder;
//# sourceMappingURL=CustomersRequestBuilder.js.map