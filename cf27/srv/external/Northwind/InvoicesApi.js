"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Invoices_1 = require("./Invoices");
const InvoicesRequestBuilder_1 = require("./InvoicesRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class InvoicesApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Invoices_1.Invoices;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new InvoicesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new InvoicesRequestBuilder_1.InvoicesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Invoices_1.Invoices, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link shipName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIP_NAME: fieldBuilder.buildEdmTypeField('ShipName', 'Edm.String', true),
                /**
                 * Static representation of the {@link shipAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIP_ADDRESS: fieldBuilder.buildEdmTypeField('ShipAddress', 'Edm.String', true),
                /**
                 * Static representation of the {@link shipCity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIP_CITY: fieldBuilder.buildEdmTypeField('ShipCity', 'Edm.String', true),
                /**
                 * Static representation of the {@link shipRegion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIP_REGION: fieldBuilder.buildEdmTypeField('ShipRegion', 'Edm.String', true),
                /**
                 * Static representation of the {@link shipPostalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIP_POSTAL_CODE: fieldBuilder.buildEdmTypeField('ShipPostalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link shipCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIP_COUNTRY: fieldBuilder.buildEdmTypeField('ShipCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_ID: fieldBuilder.buildEdmTypeField('CustomerID', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_NAME: fieldBuilder.buildEdmTypeField('CustomerName', 'Edm.String', false),
                /**
                 * Static representation of the {@link address} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
                /**
                 * Static representation of the {@link city} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
                /**
                 * Static representation of the {@link region} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
                /**
                 * Static representation of the {@link postalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POSTAL_CODE: fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesperson} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALESPERSON: fieldBuilder.buildEdmTypeField('Salesperson', 'Edm.String', false),
                /**
                 * Static representation of the {@link orderId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_ID: fieldBuilder.buildEdmTypeField('OrderID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link orderDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_DATE: fieldBuilder.buildEdmTypeField('OrderDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link requiredDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REQUIRED_DATE: fieldBuilder.buildEdmTypeField('RequiredDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link shippedDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPED_DATE: fieldBuilder.buildEdmTypeField('ShippedDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link shipperName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPER_NAME: fieldBuilder.buildEdmTypeField('ShipperName', 'Edm.String', false),
                /**
                 * Static representation of the {@link productId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_ID: fieldBuilder.buildEdmTypeField('ProductID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link productName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_NAME: fieldBuilder.buildEdmTypeField('ProductName', 'Edm.String', false),
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
                /**
                 * Static representation of the {@link extendedPrice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTENDED_PRICE: fieldBuilder.buildEdmTypeField('ExtendedPrice', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link freight} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FREIGHT: fieldBuilder.buildEdmTypeField('Freight', 'Edm.Decimal', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Invoices_1.Invoices)
            };
        }
        return this._schema;
    }
}
exports.InvoicesApi = InvoicesApi;
//# sourceMappingURL=InvoicesApi.js.map