"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoices = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Invoices" of service "Northwind".
 */
class Invoices extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Invoices = Invoices;
/**
 * Technical entity name for Invoices.
 */
Invoices._entityName = 'Invoices';
/**
 * Default url path for the according service.
 */
Invoices._defaultBasePath = '/V4/Northwind/Northwind.svc';
/**
 * All key fields of the Invoices entity
 */
Invoices._keys = [
    'CustomerName',
    'Discount',
    'OrderID',
    'ProductID',
    'ProductName',
    'Quantity',
    'Salesperson',
    'ShipperName',
    'UnitPrice'
];
//# sourceMappingURL=Invoices.js.map