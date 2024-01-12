"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerritoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Territories_1 = require("./Territories");
/**
 * Request builder class for operations supported on the {@link Territories} entity.
 */
class TerritoriesRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Territories` entities.
     * @returns A request builder for creating requests to retrieve all `Territories` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Territories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Territories`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Territories` entity based on its keys.
     * @param territoryId Key property. See {@link Territories.territoryId}.
     * @returns A request builder for creating requests to retrieve one `Territories` entity based on its keys.
     */
    getByKey(territoryId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            TerritoryID: territoryId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Territories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Territories`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(territoryIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, territoryIdOrEntity instanceof Territories_1.Territories
            ? territoryIdOrEntity
            : { TerritoryID: territoryIdOrEntity });
    }
}
exports.TerritoriesRequestBuilder = TerritoriesRequestBuilder;
//# sourceMappingURL=TerritoriesRequestBuilder.js.map