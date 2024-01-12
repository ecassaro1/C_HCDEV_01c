"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_By_Categories = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Sales_by_Categories" of service "Northwind".
 */
class Sales_By_Categories extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Sales_By_Categories = Sales_By_Categories;
/**
 * Technical entity name for Sales_By_Categories.
 */
Sales_By_Categories._entityName = 'Sales_by_Categories';
/**
 * Default url path for the according service.
 */
Sales_By_Categories._defaultBasePath = '/V4/Northwind/Northwind.svc';
/**
 * All key fields of the Sales_By_Categories entity
 */
Sales_By_Categories._keys = ['CategoryID', 'CategoryName', 'ProductName'];
//# sourceMappingURL=Sales_By_Categories.js.map