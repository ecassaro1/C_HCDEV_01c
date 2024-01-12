"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_And_Suppliers_By_CitiesApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Customer_And_Suppliers_By_Cities_1 = require("./Customer_And_Suppliers_By_Cities");
const Customer_And_Suppliers_By_CitiesRequestBuilder_1 = require("./Customer_And_Suppliers_By_CitiesRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class Customer_And_Suppliers_By_CitiesApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Customer_And_Suppliers_By_Cities_1.Customer_And_Suppliers_By_Cities;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new Customer_And_Suppliers_By_CitiesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Customer_And_Suppliers_By_CitiesRequestBuilder_1.Customer_And_Suppliers_By_CitiesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Customer_And_Suppliers_By_Cities_1.Customer_And_Suppliers_By_Cities, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link city} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_NAME: fieldBuilder.buildEdmTypeField('CompanyName', 'Edm.String', false),
                /**
                 * Static representation of the {@link contactName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTACT_NAME: fieldBuilder.buildEdmTypeField('ContactName', 'Edm.String', true),
                /**
                 * Static representation of the {@link relationship} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RELATIONSHIP: fieldBuilder.buildEdmTypeField('Relationship', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Customer_And_Suppliers_By_Cities_1.Customer_And_Suppliers_By_Cities)
            };
        }
        return this._schema;
    }
}
exports.Customer_And_Suppliers_By_CitiesApi = Customer_And_Suppliers_By_CitiesApi;
//# sourceMappingURL=Customer_And_Suppliers_By_CitiesApi.js.map