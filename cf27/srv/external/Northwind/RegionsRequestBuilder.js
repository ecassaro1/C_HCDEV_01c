"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionsRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Regions_1 = require("./Regions");
/**
 * Request builder class for operations supported on the {@link Regions} entity.
 */
class RegionsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Regions` entities.
     * @returns A request builder for creating requests to retrieve all `Regions` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Regions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Regions`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Regions` entity based on its keys.
     * @param regionId Key property. See {@link Regions.regionId}.
     * @returns A request builder for creating requests to retrieve one `Regions` entity based on its keys.
     */
    getByKey(regionId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            RegionID: regionId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Regions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Regions`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(regionIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, regionIdOrEntity instanceof Regions_1.Regions
            ? regionIdOrEntity
            : { RegionID: regionIdOrEntity });
    }
}
exports.RegionsRequestBuilder = RegionsRequestBuilder;
//# sourceMappingURL=RegionsRequestBuilder.js.map