"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultNorthwindPath = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const util_1 = require("@sap-cloud-sdk/util");
function batch(first, ...rest) {
    return new odata_v4_1.ODataBatchRequestBuilder(exports.defaultNorthwindPath, (0, util_1.transformVariadicArgumentToArray)(first, rest));
}
exports.batch = batch;
function changeset(first, ...rest) {
    return new odata_v4_1.BatchChangeSet((0, util_1.transformVariadicArgumentToArray)(first, rest));
}
exports.changeset = changeset;
exports.defaultNorthwindPath = '/V4/Northwind/Northwind.svc';
//# sourceMappingURL=BatchRequest.js.map