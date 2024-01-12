"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppliersRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Suppliers_1 = require("./Suppliers");
/**
 * Request builder class for operations supported on the {@link Suppliers} entity.
 */
class SuppliersRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Suppliers` entities.
     * @returns A request builder for creating requests to retrieve all `Suppliers` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Suppliers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Suppliers`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Suppliers` entity based on its keys.
     * @param supplierId Key property. See {@link Suppliers.supplierId}.
     * @returns A request builder for creating requests to retrieve one `Suppliers` entity based on its keys.
     */
    getByKey(supplierId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            SupplierID: supplierId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Suppliers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Suppliers`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(supplierIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, supplierIdOrEntity instanceof Suppliers_1.Suppliers
            ? supplierIdOrEntity
            : { SupplierID: supplierIdOrEntity });
    }
}
exports.SuppliersRequestBuilder = SuppliersRequestBuilder;
//# sourceMappingURL=SuppliersRequestBuilder.js.map