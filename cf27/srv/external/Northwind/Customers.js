"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Customers" of service "Northwind".
 */
class Customers extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Customers = Customers;
/**
 * Technical entity name for Customers.
 */
Customers._entityName = 'Customers';
/**
 * Default url path for the according service.
 */
Customers._defaultBasePath = '/V4/Northwind/Northwind.svc';
/**
 * All key fields of the Customers entity
 */
Customers._keys = ['CustomerID'];
//# sourceMappingURL=Customers.js.map