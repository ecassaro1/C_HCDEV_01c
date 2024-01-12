"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders_Qries = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Orders_Qries" of service "Northwind".
 */
class Orders_Qries extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Orders_Qries = Orders_Qries;
/**
 * Technical entity name for Orders_Qries.
 */
Orders_Qries._entityName = 'Orders_Qries';
/**
 * Default url path for the according service.
 */
Orders_Qries._defaultBasePath = '/V4/Northwind/Northwind.svc';
/**
 * All key fields of the Orders_Qries entity
 */
Orders_Qries._keys = ['CompanyName', 'OrderID'];
//# sourceMappingURL=Orders_Qries.js.map