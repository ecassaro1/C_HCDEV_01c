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
import { Shippers } from './Shippers';

/**
 * Request builder class for operations supported on the {@link Shippers} entity.
 */
export class ShippersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Shippers<T>, T> {
  /**
   * Returns a request builder for querying all `Shippers` entities.
   * @returns A request builder for creating requests to retrieve all `Shippers` entities.
   */
  getAll(): GetAllRequestBuilder<Shippers<T>, T> {
    return new GetAllRequestBuilder<Shippers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Shippers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Shippers`.
   */
  create(entity: Shippers<T>): CreateRequestBuilder<Shippers<T>, T> {
    return new CreateRequestBuilder<Shippers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Shippers` entity based on its keys.
   * @param shipperId Key property. See {@link Shippers.shipperId}.
   * @returns A request builder for creating requests to retrieve one `Shippers` entity based on its keys.
   */
  getByKey(
    shipperId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Shippers<T>, T> {
    return new GetByKeyRequestBuilder<Shippers<T>, T>(this.entityApi, {
      ShipperID: shipperId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Shippers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Shippers`.
   */
  update(entity: Shippers<T>): UpdateRequestBuilder<Shippers<T>, T> {
    return new UpdateRequestBuilder<Shippers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Shippers`.
   * @param shipperId Key property. See {@link Shippers.shipperId}.
   * @returns A request builder for creating requests that delete an entity of type `Shippers`.
   */
  delete(shipperId: number): DeleteRequestBuilder<Shippers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Shippers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Shippers` by taking the entity as a parameter.
   */
  delete(entity: Shippers<T>): DeleteRequestBuilder<Shippers<T>, T>;
  delete(shipperIdOrEntity: any): DeleteRequestBuilder<Shippers<T>, T> {
    return new DeleteRequestBuilder<Shippers<T>, T>(
      this.entityApi,
      shipperIdOrEntity instanceof Shippers
        ? shipperIdOrEntity
        : { ShipperID: shipperIdOrEntity! }
    );
  }
}
