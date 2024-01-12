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
import { Products_By_Categories } from './Products_By_Categories';
/**
 * Request builder class for operations supported on the {@link Products_By_Categories} entity.
 */
export declare class Products_By_CategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Products_By_Categories<T>, T> {
  /**
   * Returns a request builder for querying all `Products_By_Categories` entities.
   * @returns A request builder for creating requests to retrieve all `Products_By_Categories` entities.
   */
  getAll(): GetAllRequestBuilder<Products_By_Categories<T>, T>;
  /**
   * Returns a request builder for creating a `Products_By_Categories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Products_By_Categories`.
   */
  create(
    entity: Products_By_Categories<T>
  ): CreateRequestBuilder<Products_By_Categories<T>, T>;
  /**
   * Returns a request builder for retrieving one `Products_By_Categories` entity based on its keys.
   * @param categoryName Key property. See {@link Products_By_Categories.categoryName}.
   * @param discontinued Key property. See {@link Products_By_Categories.discontinued}.
   * @param productName Key property. See {@link Products_By_Categories.productName}.
   * @returns A request builder for creating requests to retrieve one `Products_By_Categories` entity based on its keys.
   */
  getByKey(
    categoryName: DeserializedType<T, 'Edm.String'>,
    discontinued: DeserializedType<T, 'Edm.Boolean'>,
    productName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Products_By_Categories<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Products_By_Categories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Products_By_Categories`.
   */
  update(
    entity: Products_By_Categories<T>
  ): UpdateRequestBuilder<Products_By_Categories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Products_By_Categories`.
   * @param categoryName Key property. See {@link Products_By_Categories.categoryName}.
   * @param discontinued Key property. See {@link Products_By_Categories.discontinued}.
   * @param productName Key property. See {@link Products_By_Categories.productName}.
   * @returns A request builder for creating requests that delete an entity of type `Products_By_Categories`.
   */
  delete(
    categoryName: string,
    discontinued: boolean,
    productName: string
  ): DeleteRequestBuilder<Products_By_Categories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Products_By_Categories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Products_By_Categories` by taking the entity as a parameter.
   */
  delete(
    entity: Products_By_Categories<T>
  ): DeleteRequestBuilder<Products_By_Categories<T>, T>;
}
