"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_Totals_By_AmountsRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Sales_Totals_By_Amounts_1 = require("./Sales_Totals_By_Amounts");
/**
 * Request builder class for operations supported on the {@link Sales_Totals_By_Amounts} entity.
 */
class Sales_Totals_By_AmountsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Sales_Totals_By_Amounts` entities.
     * @returns A request builder for creating requests to retrieve all `Sales_Totals_By_Amounts` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Sales_Totals_By_Amounts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Sales_Totals_By_Amounts`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Sales_Totals_By_Amounts` entity based on its keys.
     * @param companyName Key property. See {@link Sales_Totals_By_Amounts.companyName}.
     * @param orderId Key property. See {@link Sales_Totals_By_Amounts.orderId}.
     * @returns A request builder for creating requests to retrieve one `Sales_Totals_By_Amounts` entity based on its keys.
     */
    getByKey(companyName, orderId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            CompanyName: companyName,
            OrderID: orderId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Sales_Totals_By_Amounts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Sales_Totals_By_Amounts`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(companyNameOrEntity, orderId) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, companyNameOrEntity instanceof Sales_Totals_By_Amounts_1.Sales_Totals_By_Amounts
            ? companyNameOrEntity
            : {
                CompanyName: companyNameOrEntity,
                OrderID: orderId
            });
    }
}
exports.Sales_Totals_By_AmountsRequestBuilder = Sales_Totals_By_AmountsRequestBuilder;
//# sourceMappingURL=Sales_Totals_By_AmountsRequestBuilder.js.map