"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suppliers = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Suppliers" of service "Northwind".
 */
class Suppliers extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Suppliers = Suppliers;
/**
 * Technical entity name for Suppliers.
 */
Suppliers._entityName = 'Suppliers';
/**
 * Default url path for the according service.
 */
Suppliers._defaultBasePath = '/V4/Northwind/Northwind.svc';
/**
 * All key fields of the Suppliers entity
 */
Suppliers._keys = ['SupplierID'];
//# sourceMappingURL=Suppliers.js.map