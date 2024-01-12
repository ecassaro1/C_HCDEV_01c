"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary_Of_Sales_By_YearsApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Summary_Of_Sales_By_Years_1 = require("./Summary_Of_Sales_By_Years");
const Summary_Of_Sales_By_YearsRequestBuilder_1 = require("./Summary_Of_Sales_By_YearsRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class Summary_Of_Sales_By_YearsApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Summary_Of_Sales_By_Years_1.Summary_Of_Sales_By_Years;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new Summary_Of_Sales_By_YearsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Summary_Of_Sales_By_YearsRequestBuilder_1.Summary_Of_Sales_By_YearsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Summary_Of_Sales_By_Years_1.Summary_Of_Sales_By_Years, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link shippedDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPED_DATE: fieldBuilder.buildEdmTypeField('ShippedDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link orderId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_ID: fieldBuilder.buildEdmTypeField('OrderID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link subtotal} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBTOTAL: fieldBuilder.buildEdmTypeField('Subtotal', 'Edm.Decimal', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Summary_Of_Sales_By_Years_1.Summary_Of_Sales_By_Years)
            };
        }
        return this._schema;
    }
}
exports.Summary_Of_Sales_By_YearsApi = Summary_Of_Sales_By_YearsApi;
//# sourceMappingURL=Summary_Of_Sales_By_YearsApi.js.map