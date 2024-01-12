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
import { Product_Sales_For_1997 } from './Product_Sales_For_1997';
/**
 * Request builder class for operations supported on the {@link Product_Sales_For_1997} entity.
 */
export declare class Product_Sales_For_1997RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Product_Sales_For_1997<T>, T> {
  /**
   * Returns a request builder for querying all `Product_Sales_For_1997` entities.
   * @returns A request builder for creating requests to retrieve all `Product_Sales_For_1997` entities.
   */
  getAll(): GetAllRequestBuilder<Product_Sales_For_1997<T>, T>;
  /**
   * Returns a request builder for creating a `Product_Sales_For_1997` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Product_Sales_For_1997`.
   */
  create(
    entity: Product_Sales_For_1997<T>
  ): CreateRequestBuilder<Product_Sales_For_1997<T>, T>;
  /**
   * Returns a request builder for retrieving one `Product_Sales_For_1997` entity based on its keys.
   * @param categoryName Key property. See {@link Product_Sales_For_1997.categoryName}.
   * @param productName Key property. See {@link Product_Sales_For_1997.productName}.
   * @returns A request builder for creating requests to retrieve one `Product_Sales_For_1997` entity based on its keys.
   */
  getByKey(
    categoryName: DeserializedType<T, 'Edm.String'>,
    productName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Product_Sales_For_1997<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Product_Sales_For_1997`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Product_Sales_For_1997`.
   */
  update(
    entity: Product_Sales_For_1997<T>
  ): UpdateRequestBuilder<Product_Sales_For_1997<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Product_Sales_For_1997`.
   * @param categoryName Key property. See {@link Product_Sales_For_1997.categoryName}.
   * @param productName Key property. See {@link Product_Sales_For_1997.productName}.
   * @returns A request builder for creating requests that delete an entity of type `Product_Sales_For_1997`.
   */
  delete(
    categoryName: string,
    productName: string
  ): DeleteRequestBuilder<Product_Sales_For_1997<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Product_Sales_For_1997`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Product_Sales_For_1997` by taking the entity as a parameter.
   */
  delete(
    entity: Product_Sales_For_1997<T>
  ): DeleteRequestBuilder<Product_Sales_For_1997<T>, T>;
}
