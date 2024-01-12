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
import { Products_Above_Average_Prices } from './Products_Above_Average_Prices';
/**
 * Request builder class for operations supported on the {@link Products_Above_Average_Prices} entity.
 */
export declare class Products_Above_Average_PricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Products_Above_Average_Prices<T>, T> {
  /**
   * Returns a request builder for querying all `Products_Above_Average_Prices` entities.
   * @returns A request builder for creating requests to retrieve all `Products_Above_Average_Prices` entities.
   */
  getAll(): GetAllRequestBuilder<Products_Above_Average_Prices<T>, T>;
  /**
   * Returns a request builder for creating a `Products_Above_Average_Prices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Products_Above_Average_Prices`.
   */
  create(
    entity: Products_Above_Average_Prices<T>
  ): CreateRequestBuilder<Products_Above_Average_Prices<T>, T>;
  /**
   * Returns a request builder for retrieving one `Products_Above_Average_Prices` entity based on its keys.
   * @param productName Key property. See {@link Products_Above_Average_Prices.productName}.
   * @returns A request builder for creating requests to retrieve one `Products_Above_Average_Prices` entity based on its keys.
   */
  getByKey(
    productName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Products_Above_Average_Prices<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Products_Above_Average_Prices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Products_Above_Average_Prices`.
   */
  update(
    entity: Products_Above_Average_Prices<T>
  ): UpdateRequestBuilder<Products_Above_Average_Prices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Products_Above_Average_Prices`.
   * @param productName Key property. See {@link Products_Above_Average_Prices.productName}.
   * @returns A request builder for creating requests that delete an entity of type `Products_Above_Average_Prices`.
   */
  delete(
    productName: string
  ): DeleteRequestBuilder<Products_Above_Average_Prices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Products_Above_Average_Prices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Products_Above_Average_Prices` by taking the entity as a parameter.
   */
  delete(
    entity: Products_Above_Average_Prices<T>
  ): DeleteRequestBuilder<Products_Above_Average_Prices<T>, T>;
}
