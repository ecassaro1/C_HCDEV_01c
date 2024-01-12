"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_Totals_By_AmountsApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Sales_Totals_By_Amounts_1 = require("./Sales_Totals_By_Amounts");
const Sales_Totals_By_AmountsRequestBuilder_1 = require("./Sales_Totals_By_AmountsRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class Sales_Totals_By_AmountsApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Sales_Totals_By_Amounts_1.Sales_Totals_By_Amounts;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new Sales_Totals_By_AmountsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Sales_Totals_By_AmountsRequestBuilder_1.Sales_Totals_By_AmountsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Sales_Totals_By_Amounts_1.Sales_Totals_By_Amounts, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link saleAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALE_AMOUNT: fieldBuilder.buildEdmTypeField('SaleAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link orderId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_ID: fieldBuilder.buildEdmTypeField('OrderID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link companyName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_NAME: fieldBuilder.buildEdmTypeField('CompanyName', 'Edm.String', false),
                /**
                 * Static representation of the {@link shippedDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPED_DATE: fieldBuilder.buildEdmTypeField('ShippedDate', 'Edm.DateTimeOffset', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Sales_Totals_By_Amounts_1.Sales_Totals_By_Amounts)
            };
        }
        return this._schema;
    }
}
exports.Sales_Totals_By_AmountsApi = Sales_Totals_By_AmountsApi;
//# sourceMappingURL=Sales_Totals_By_AmountsApi.js.map