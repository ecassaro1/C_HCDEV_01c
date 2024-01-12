"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionsApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Regions_1 = require("./Regions");
const RegionsRequestBuilder_1 = require("./RegionsRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class RegionsApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Regions_1.Regions;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new RegionsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TERRITORIES: new odata_v4_1.OneToManyLink('Territories', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new RegionsRequestBuilder_1.RegionsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Regions_1.Regions, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link regionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION_ID: fieldBuilder.buildEdmTypeField('RegionID', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link regionDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION_DESCRIPTION: fieldBuilder.buildEdmTypeField('RegionDescription', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', Regions_1.Regions)
            };
        }
        return this._schema;
    }
}
exports.RegionsApi = RegionsApi;
//# sourceMappingURL=RegionsApi.js.map