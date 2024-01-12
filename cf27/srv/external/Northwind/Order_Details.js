"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_Details = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Order_Details" of service "Northwind".
 */
class Order_Details extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Order_Details = Order_Details;
/**
 * Technical entity name for Order_Details.
 */
Order_Details._entityName = 'Order_Details';
/**
 * Default url path for the according service.
 */
Order_Details._defaultBasePath = '/V4/Northwind/Northwind.svc';
/**
 * All key fields of the Order_Details entity
 */
Order_Details._keys = ['OrderID', 'ProductID'];
//# sourceMappingURL=Order_Details.js.map