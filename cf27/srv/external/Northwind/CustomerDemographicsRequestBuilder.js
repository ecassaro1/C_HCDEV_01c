"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDemographicsRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const CustomerDemographics_1 = require("./CustomerDemographics");
/**
 * Request builder class for operations supported on the {@link CustomerDemographics} entity.
 */
class CustomerDemographicsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `CustomerDemographics` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerDemographics` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CustomerDemographics` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerDemographics`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `CustomerDemographics` entity based on its keys.
     * @param customerTypeId Key property. See {@link CustomerDemographics.customerTypeId}.
     * @returns A request builder for creating requests to retrieve one `CustomerDemographics` entity based on its keys.
     */
    getByKey(customerTypeId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, { CustomerTypeID: customerTypeId });
    }
    /**
     * Returns a request builder for updating an entity of type `CustomerDemographics`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerDemographics`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(customerTypeIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, customerTypeIdOrEntity instanceof CustomerDemographics_1.CustomerDemographics
            ? customerTypeIdOrEntity
            : { CustomerTypeID: customerTypeIdOrEntity });
    }
}
exports.CustomerDemographicsRequestBuilder = CustomerDemographicsRequestBuilder;
//# sourceMappingURL=CustomerDemographicsRequestBuilder.js.map