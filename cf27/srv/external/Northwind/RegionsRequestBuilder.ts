/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { Regions } from './Regions';

/**
 * Request builder class for operations supported on the {@link Regions} entity.
 */
export class RegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Regions<T>, T> {
  /**
   * Returns a request builder for querying all `Regions` entities.
   * @returns A request builder for creating requests to retrieve all `Regions` entities.
   */
  getAll(): GetAllRequestBuilder<Regions<T>, T> {
    return new GetAllRequestBuilder<Regions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Regions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Regions`.
   */
  create(entity: Regions<T>): CreateRequestBuilder<Regions<T>, T> {
    return new CreateRequestBuilder<Regions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Regions` entity based on its keys.
   * @param regionId Key property. See {@link Regions.regionId}.
   * @returns A request builder for creating requests to retrieve one `Regions` entity based on its keys.
   */
  getByKey(
    regionId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Regions<T>, T> {
    return new GetByKeyRequestBuilder<Regions<T>, T>(this.entityApi, {
      RegionID: regionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Regions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Regions`.
   */
  update(entity: Regions<T>): UpdateRequestBuilder<Regions<T>, T> {
    return new UpdateRequestBuilder<Regions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Regions`.
   * @param regionId Key property. See {@link Regions.regionId}.
   * @returns A request builder for creating requests that delete an entity of type `Regions`.
   */
  delete(regionId: number): DeleteRequestBuilder<Regions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Regions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Regions` by taking the entity as a parameter.
   */
  delete(entity: Regions<T>): DeleteRequestBuilder<Regions<T>, T>;
  delete(regionIdOrEntity: any): DeleteRequestBuilder<Regions<T>, T> {
    return new DeleteRequestBuilder<Regions<T>, T>(
      this.entityApi,
      regionIdOrEntity instanceof Regions
        ? regionIdOrEntity
        : { RegionID: regionIdOrEntity! }
    );
  }
}
