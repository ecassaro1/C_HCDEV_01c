"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDemographics = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "CustomerDemographics" of service "Northwind".
 */
class CustomerDemographics extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.CustomerDemographics = CustomerDemographics;
/**
 * Technical entity name for CustomerDemographics.
 */
CustomerDemographics._entityName = 'CustomerDemographics';
/**
 * Default url path for the according service.
 */
CustomerDemographics._defaultBasePath = '/V4/Northwind/Northwind.svc';
/**
 * All key fields of the CustomerDemographics entity
 */
CustomerDemographics._keys = ['CustomerTypeID'];
//# sourceMappingURL=CustomerDemographics.js.map