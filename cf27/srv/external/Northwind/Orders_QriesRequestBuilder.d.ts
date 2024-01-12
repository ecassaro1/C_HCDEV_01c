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
import { Orders_Qries } from './Orders_Qries';
/**
 * Request builder class for operations supported on the {@link Orders_Qries} entity.
 */
export declare class Orders_QriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Orders_Qries<T>, T> {
  /**
   * Returns a request builder for querying all `Orders_Qries` entities.
   * @returns A request builder for creating requests to retrieve all `Orders_Qries` entities.
   */
  getAll(): GetAllRequestBuilder<Orders_Qries<T>, T>;
  /**
   * Returns a request builder for creating a `Orders_Qries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Orders_Qries`.
   */
  create(entity: Orders_Qries<T>): CreateRequestBuilder<Orders_Qries<T>, T>;
  /**
   * Returns a request builder for retrieving one `Orders_Qries` entity based on its keys.
   * @param companyName Key property. See {@link Orders_Qries.companyName}.
   * @param orderId Key property. See {@link Orders_Qries.orderId}.
   * @returns A request builder for creating requests to retrieve one `Orders_Qries` entity based on its keys.
   */
  getByKey(
    companyName: DeserializedType<T, 'Edm.String'>,
    orderId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Orders_Qries<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Orders_Qries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Orders_Qries`.
   */
  update(entity: Orders_Qries<T>): UpdateRequestBuilder<Orders_Qries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Orders_Qries`.
   * @param companyName Key property. See {@link Orders_Qries.companyName}.
   * @param orderId Key property. See {@link Orders_Qries.orderId}.
   * @returns A request builder for creating requests that delete an entity of type `Orders_Qries`.
   */
  delete(
    companyName: string,
    orderId: number
  ): DeleteRequestBuilder<Orders_Qries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Orders_Qries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Orders_Qries` by taking the entity as a parameter.
   */
  delete(entity: Orders_Qries<T>): DeleteRequestBuilder<Orders_Qries<T>, T>;
}
