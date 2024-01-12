"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary_Of_Sales_By_YearsRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Summary_Of_Sales_By_Years_1 = require("./Summary_Of_Sales_By_Years");
/**
 * Request builder class for operations supported on the {@link Summary_Of_Sales_By_Years} entity.
 */
class Summary_Of_Sales_By_YearsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Summary_Of_Sales_By_Years` entities.
     * @returns A request builder for creating requests to retrieve all `Summary_Of_Sales_By_Years` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Summary_Of_Sales_By_Years` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Summary_Of_Sales_By_Years`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Summary_Of_Sales_By_Years` entity based on its keys.
     * @param orderId Key property. See {@link Summary_Of_Sales_By_Years.orderId}.
     * @returns A request builder for creating requests to retrieve one `Summary_Of_Sales_By_Years` entity based on its keys.
     */
    getByKey(orderId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, { OrderID: orderId });
    }
    /**
     * Returns a request builder for updating an entity of type `Summary_Of_Sales_By_Years`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Summary_Of_Sales_By_Years`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(orderIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, orderIdOrEntity instanceof Summary_Of_Sales_By_Years_1.Summary_Of_Sales_By_Years
            ? orderIdOrEntity
            : { OrderID: orderIdOrEntity });
    }
}
exports.Summary_Of_Sales_By_YearsRequestBuilder = Summary_Of_Sales_By_YearsRequestBuilder;
//# sourceMappingURL=Summary_Of_Sales_By_YearsRequestBuilder.js.map