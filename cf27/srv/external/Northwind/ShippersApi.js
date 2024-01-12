"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippersApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Shippers_1 = require("./Shippers");
const ShippersRequestBuilder_1 = require("./ShippersRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ShippersApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Shippers_1.Shippers;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ShippersApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ORDERS: new odata_v4_1.OneToManyLink('Orders', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ShippersRequestBuilder_1.ShippersRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Shippers_1.Shippers, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link shipperId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPER_ID: fieldBuilder.buildEdmTypeField('ShipperID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link companyName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_NAME: fieldBuilder.buildEdmTypeField('CompanyName', 'Edm.String', false),
                /**
                 * Static representation of the {@link phone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Shippers_1.Shippers)
            };
        }
        return this._schema;
    }
}
exports.ShippersApi = ShippersApi;
//# sourceMappingURL=ShippersApi.js.map