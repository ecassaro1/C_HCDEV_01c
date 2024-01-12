"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_Details_Extendeds = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Order_Details_Extendeds" of service "Northwind".
 */
class Order_Details_Extendeds extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Order_Details_Extendeds = Order_Details_Extendeds;
/**
 * Technical entity name for Order_Details_Extendeds.
 */
Order_Details_Extendeds._entityName = 'Order_Details_Extendeds';
/**
 * Default url path for the according service.
 */
Order_Details_Extendeds._defaultBasePath = '/V4/Northwind/Northwind.svc';
/**
 * All key fields of the Order_Details_Extendeds entity
 */
Order_Details_Extendeds._keys = [
    'Discount',
    'OrderID',
    'ProductID',
    'ProductName',
    'Quantity',
    'UnitPrice'
];
//# sourceMappingURL=Order_Details_Extendeds.js.map