"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shippers = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "Shippers" of service "Northwind".
 */
class Shippers extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Shippers = Shippers;
/**
 * Technical entity name for Shippers.
 */
Shippers._entityName = 'Shippers';
/**
 * Default url path for the according service.
 */
Shippers._defaultBasePath = '/V4/Northwind/Northwind.svc';
/**
 * All key fields of the Shippers entity
 */
Shippers._keys = ['ShipperID'];
//# sourceMappingURL=Shippers.js.map