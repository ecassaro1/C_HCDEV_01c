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
import { Orders } from './Orders';
/**
 * Request builder class for operations supported on the {@link Orders} entity.
 */
export declare class OrdersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Orders<T>, T> {
  /**
   * Returns a request builder for querying all `Orders` entities.
   * @returns A request builder for creating requests to retrieve all `Orders` entities.
   */
  getAll(): GetAllRequestBuilder<Orders<T>, T>;
  /**
   * Returns a request builder for creating a `Orders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Orders`.
   */
  create(entity: Orders<T>): CreateRequestBuilder<Orders<T>, T>;
  /**
   * Returns a request builder for retrieving one `Orders` entity based on its keys.
   * @param orderId Key property. See {@link Orders.orderId}.
   * @returns A request builder for creating requests to retrieve one `Orders` entity based on its keys.
   */
  getByKey(
    orderId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Orders<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Orders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Orders`.
   */
  update(entity: Orders<T>): UpdateRequestBuilder<Orders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Orders`.
   * @param orderId Key property. See {@link Orders.orderId}.
   * @returns A request builder for creating requests that delete an entity of type `Orders`.
   */
  delete(orderId: number): DeleteRequestBuilder<Orders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Orders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Orders` by taking the entity as a parameter.
   */
  delete(entity: Orders<T>): DeleteRequestBuilder<Orders<T>, T>;
}
