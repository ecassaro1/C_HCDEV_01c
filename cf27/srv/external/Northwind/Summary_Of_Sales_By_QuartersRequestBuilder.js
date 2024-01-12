"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary_Of_Sales_By_QuartersRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Summary_Of_Sales_By_Quarters_1 = require("./Summary_Of_Sales_By_Quarters");
/**
 * Request builder class for operations supported on the {@link Summary_Of_Sales_By_Quarters} entity.
 */
class Summary_Of_Sales_By_QuartersRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Summary_Of_Sales_By_Quarters` entities.
     * @returns A request builder for creating requests to retrieve all `Summary_Of_Sales_By_Quarters` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Summary_Of_Sales_By_Quarters` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Summary_Of_Sales_By_Quarters`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Summary_Of_Sales_By_Quarters` entity based on its keys.
     * @param orderId Key property. See {@link Summary_Of_Sales_By_Quarters.orderId}.
     * @returns A request builder for creating requests to retrieve one `Summary_Of_Sales_By_Quarters` entity based on its keys.
     */
    getByKey(orderId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, { OrderID: orderId });
    }
    /**
     * Returns a request builder for updating an entity of type `Summary_Of_Sales_By_Quarters`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Summary_Of_Sales_By_Quarters`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(orderIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, orderIdOrEntity instanceof Summary_Of_Sales_By_Quarters_1.Summary_Of_Sales_By_Quarters
            ? orderIdOrEntity
            : { OrderID: orderIdOrEntity });
    }
}
exports.Summary_Of_Sales_By_QuartersRequestBuilder = Summary_Of_Sales_By_QuartersRequestBuilder;
//# sourceMappingURL=Summary_Of_Sales_By_QuartersRequestBuilder.js.map