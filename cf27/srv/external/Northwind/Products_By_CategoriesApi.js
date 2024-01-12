"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products_By_CategoriesApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Products_By_Categories_1 = require("./Products_By_Categories");
const Products_By_CategoriesRequestBuilder_1 = require("./Products_By_CategoriesRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class Products_By_CategoriesApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Products_By_Categories_1.Products_By_Categories;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new Products_By_CategoriesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Products_By_CategoriesRequestBuilder_1.Products_By_CategoriesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Products_By_Categories_1.Products_By_Categories, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link categoryName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CATEGORY_NAME: fieldBuilder.buildEdmTypeField('CategoryName', 'Edm.String', false),
                /**
                 * Static representation of the {@link productName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_NAME: fieldBuilder.buildEdmTypeField('ProductName', 'Edm.String', false),
                /**
                 * Static representation of the {@link quantityPerUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY_PER_UNIT: fieldBuilder.buildEdmTypeField('QuantityPerUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link unitsInStock} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNITS_IN_STOCK: fieldBuilder.buildEdmTypeField('UnitsInStock', 'Edm.Int16', true),
                /**
                 * Static representation of the {@link discontinued} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISCONTINUED: fieldBuilder.buildEdmTypeField('Discontinued', 'Edm.Boolean', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Products_By_Categories_1.Products_By_Categories)
            };
        }
        return this._schema;
    }
}
exports.Products_By_CategoriesApi = Products_By_CategoriesApi;
//# sourceMappingURL=Products_By_CategoriesApi.js.map