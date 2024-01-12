"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category_Sales_For_1997Api = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Category_Sales_For_1997_1 = require("./Category_Sales_For_1997");
const Category_Sales_For_1997RequestBuilder_1 = require("./Category_Sales_For_1997RequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class Category_Sales_For_1997Api {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Category_Sales_For_1997_1.Category_Sales_For_1997;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new Category_Sales_For_1997Api(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Category_Sales_For_1997RequestBuilder_1.Category_Sales_For_1997RequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Category_Sales_For_1997_1.Category_Sales_For_1997, this.deSerializers);
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
                 * Static representation of the {@link categorySales} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CATEGORY_SALES: fieldBuilder.buildEdmTypeField('CategorySales', 'Edm.Decimal', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Category_Sales_For_1997_1.Category_Sales_For_1997)
            };
        }
        return this._schema;
    }
}
exports.Category_Sales_For_1997Api = Category_Sales_For_1997Api;
//# sourceMappingURL=Category_Sales_For_1997Api.js.map