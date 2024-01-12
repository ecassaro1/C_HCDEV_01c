"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products_Above_Average_PricesApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Products_Above_Average_Prices_1 = require("./Products_Above_Average_Prices");
const Products_Above_Average_PricesRequestBuilder_1 = require("./Products_Above_Average_PricesRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class Products_Above_Average_PricesApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Products_Above_Average_Prices_1.Products_Above_Average_Prices;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new Products_Above_Average_PricesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Products_Above_Average_PricesRequestBuilder_1.Products_Above_Average_PricesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Products_Above_Average_Prices_1.Products_Above_Average_Prices, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link productName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_NAME: fieldBuilder.buildEdmTypeField('ProductName', 'Edm.String', false),
                /**
                 * Static representation of the {@link unitPrice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_PRICE: fieldBuilder.buildEdmTypeField('UnitPrice', 'Edm.Decimal', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Products_Above_Average_Prices_1.Products_Above_Average_Prices)
            };
        }
        return this._schema;
    }
}
exports.Products_Above_Average_PricesApi = Products_Above_Average_PricesApi;
//# sourceMappingURL=Products_Above_Average_PricesApi.js.map