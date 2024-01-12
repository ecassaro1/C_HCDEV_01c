"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Products_1 = require("./Products");
const ProductsRequestBuilder_1 = require("./ProductsRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductsApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Products_1.Products;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            CATEGORY: new odata_v4_1.OneToOneLink('Category', this, linkedApis[0]),
            ORDER_DETAILS: new odata_v4_1.OneToManyLink('Order_Details', this, linkedApis[1]),
            SUPPLIER: new odata_v4_1.OneToOneLink('Supplier', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new ProductsRequestBuilder_1.ProductsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Products_1.Products, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
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
                 * Static representation of the {@link supplierId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_ID: fieldBuilder.buildEdmTypeField('SupplierID', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link categoryId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CATEGORY_ID: fieldBuilder.buildEdmTypeField('CategoryID', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link quantityPerUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY_PER_UNIT: fieldBuilder.buildEdmTypeField('QuantityPerUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link unitPrice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_PRICE: fieldBuilder.buildEdmTypeField('UnitPrice', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link unitsInStock} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNITS_IN_STOCK: fieldBuilder.buildEdmTypeField('UnitsInStock', 'Edm.Int16', true),
                /**
                 * Static representation of the {@link unitsOnOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNITS_ON_ORDER: fieldBuilder.buildEdmTypeField('UnitsOnOrder', 'Edm.Int16', true),
                /**
                 * Static representation of the {@link reorderLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REORDER_LEVEL: fieldBuilder.buildEdmTypeField('ReorderLevel', 'Edm.Int16', true),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', Products_1.Products)
            };
        }
        return this._schema;
    }
}
exports.ProductsApi = ProductsApi;
//# sourceMappingURL=ProductsApi.js.map