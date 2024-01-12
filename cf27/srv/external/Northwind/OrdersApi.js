"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Orders_1 = require("./Orders");
const OrdersRequestBuilder_1 = require("./OrdersRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class OrdersApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Orders_1.Orders;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new OrdersApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            CUSTOMER: new odata_v4_1.OneToOneLink('Customer', this, linkedApis[0]),
            EMPLOYEE: new odata_v4_1.OneToOneLink('Employee', this, linkedApis[1]),
            ORDER_DETAILS: new odata_v4_1.OneToManyLink('Order_Details', this, linkedApis[2]),
            SHIPPER: new odata_v4_1.OneToOneLink('Shipper', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new OrdersRequestBuilder_1.OrdersRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Orders_1.Orders, this.deSerializers);
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
                 * Static representation of the {@link customerId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_ID: fieldBuilder.buildEdmTypeField('CustomerID', 'Edm.String', true),
                /**
                 * Static representation of the {@link employeeId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMPLOYEE_ID: fieldBuilder.buildEdmTypeField('EmployeeID', 'Edm.Int32', true),
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
                 * Static representation of the {@link shipVia} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIP_VIA: fieldBuilder.buildEdmTypeField('ShipVia', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link freight} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FREIGHT: fieldBuilder.buildEdmTypeField('Freight', 'Edm.Decimal', true),
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
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Orders_1.Orders)
            };
        }
        return this._schema;
    }
}
exports.OrdersApi = OrdersApi;
//# sourceMappingURL=OrdersApi.js.map