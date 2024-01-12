"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_And_Suppliers_By_CitiesRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Customer_And_Suppliers_By_Cities_1 = require("./Customer_And_Suppliers_By_Cities");
/**
 * Request builder class for operations supported on the {@link Customer_And_Suppliers_By_Cities} entity.
 */
class Customer_And_Suppliers_By_CitiesRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Customer_And_Suppliers_By_Cities` entities.
     * @returns A request builder for creating requests to retrieve all `Customer_And_Suppliers_By_Cities` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Customer_And_Suppliers_By_Cities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Customer_And_Suppliers_By_Cities`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Customer_And_Suppliers_By_Cities` entity based on its keys.
     * @param companyName Key property. See {@link Customer_And_Suppliers_By_Cities.companyName}.
     * @param relationship Key property. See {@link Customer_And_Suppliers_By_Cities.relationship}.
     * @returns A request builder for creating requests to retrieve one `Customer_And_Suppliers_By_Cities` entity based on its keys.
     */
    getByKey(companyName, relationship) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            CompanyName: companyName,
            Relationship: relationship
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Customer_And_Suppliers_By_Cities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Customer_And_Suppliers_By_Cities`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(companyNameOrEntity, relationship) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, companyNameOrEntity instanceof Customer_And_Suppliers_By_Cities_1.Customer_And_Suppliers_By_Cities
            ? companyNameOrEntity
            : {
                CompanyName: companyNameOrEntity,
                Relationship: relationship
            });
    }
}
exports.Customer_And_Suppliers_By_CitiesRequestBuilder = Customer_And_Suppliers_By_CitiesRequestBuilder;
//# sourceMappingURL=Customer_And_Suppliers_By_CitiesRequestBuilder.js.map