"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Employees_1 = require("./Employees");
const EmployeesRequestBuilder_1 = require("./EmployeesRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class EmployeesApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Employees_1.Employees;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new EmployeesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            EMPLOYEES_1: new odata_v4_1.OneToManyLink('Employees1', this, linkedApis[0]),
            EMPLOYEE_1: new odata_v4_1.OneToOneLink('Employee1', this, linkedApis[1]),
            ORDERS: new odata_v4_1.OneToManyLink('Orders', this, linkedApis[2]),
            TERRITORIES: new odata_v4_1.OneToManyLink('Territories', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new EmployeesRequestBuilder_1.EmployeesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Employees_1.Employees, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link employeeId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMPLOYEE_ID: fieldBuilder.buildEdmTypeField('EmployeeID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link lastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME: fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', false),
                /**
                 * Static representation of the {@link firstName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_NAME: fieldBuilder.buildEdmTypeField('FirstName', 'Edm.String', false),
                /**
                 * Static representation of the {@link title} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
                /**
                 * Static representation of the {@link titleOfCourtesy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TITLE_OF_COURTESY: fieldBuilder.buildEdmTypeField('TitleOfCourtesy', 'Edm.String', true),
                /**
                 * Static representation of the {@link birthDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BIRTH_DATE: fieldBuilder.buildEdmTypeField('BirthDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link hireDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HIRE_DATE: fieldBuilder.buildEdmTypeField('HireDate', 'Edm.DateTimeOffset', true),
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
                 * Static representation of the {@link homePhone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOME_PHONE: fieldBuilder.buildEdmTypeField('HomePhone', 'Edm.String', true),
                /**
                 * Static representation of the {@link extension} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTENSION: fieldBuilder.buildEdmTypeField('Extension', 'Edm.String', true),
                /**
                 * Static representation of the {@link photo} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHOTO: fieldBuilder.buildEdmTypeField('Photo', 'Edm.Binary', true),
                /**
                 * Static representation of the {@link notes} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
                /**
                 * Static representation of the {@link reportsTo} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REPORTS_TO: fieldBuilder.buildEdmTypeField('ReportsTo', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link photoPath} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHOTO_PATH: fieldBuilder.buildEdmTypeField('PhotoPath', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Employees_1.Employees)
            };
        }
        return this._schema;
    }
}
exports.EmployeesApi = EmployeesApi;
//# sourceMappingURL=EmployeesApi.js.map