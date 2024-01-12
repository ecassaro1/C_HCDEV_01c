"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_DetailsApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Order_Details_1 = require("./Order_Details");
const Order_DetailsRequestBuilder_1 = require("./Order_DetailsRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class Order_DetailsApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Order_Details_1.Order_Details;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new Order_DetailsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ORDER: new odata_v4_1.OneToOneLink('Order', this, linkedApis[0]),
            PRODUCT: new odata_v4_1.OneToOneLink('Product', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new Order_DetailsRequestBuilder_1.Order_DetailsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Order_Details_1.Order_Details, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link orderId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_ID: fieldBuilder.buildEdmTypeField('OrderID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link productId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_ID: fieldBuilder.buildEdmTypeField('ProductID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link unitPrice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_PRICE: fieldBuilder.buildEdmTypeField('UnitPrice', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link quantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY: fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Int16', false),
                /**
                 * Static representation of the {@link discount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISCOUNT: fieldBuilder.buildEdmTypeField('Discount', 'Edm.Single', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Order_Details_1.Order_Details)
            };
        }
        return this._schema;
    }
}
exports.Order_DetailsApi = Order_DetailsApi;
//# sourceMappingURL=Order_DetailsApi.js.map