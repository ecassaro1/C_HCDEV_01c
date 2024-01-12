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
import { Sales_Totals_By_Amounts } from './Sales_Totals_By_Amounts';
/**
 * Request builder class for operations supported on the {@link Sales_Totals_By_Amounts} entity.
 */
export declare class Sales_Totals_By_AmountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Sales_Totals_By_Amounts<T>, T> {
  /**
   * Returns a request builder for querying all `Sales_Totals_By_Amounts` entities.
   * @returns A request builder for creating requests to retrieve all `Sales_Totals_By_Amounts` entities.
   */
  getAll(): GetAllRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
  /**
   * Returns a request builder for creating a `Sales_Totals_By_Amounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Sales_Totals_By_Amounts`.
   */
  create(
    entity: Sales_Totals_By_Amounts<T>
  ): CreateRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
  /**
   * Returns a request builder for retrieving one `Sales_Totals_By_Amounts` entity based on its keys.
   * @param companyName Key property. See {@link Sales_Totals_By_Amounts.companyName}.
   * @param orderId Key property. See {@link Sales_Totals_By_Amounts.orderId}.
   * @returns A request builder for creating requests to retrieve one `Sales_Totals_By_Amounts` entity based on its keys.
   */
  getByKey(
    companyName: DeserializedType<T, 'Edm.String'>,
    orderId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Sales_Totals_By_Amounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Sales_Totals_By_Amounts`.
   */
  update(
    entity: Sales_Totals_By_Amounts<T>
  ): UpdateRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Sales_Totals_By_Amounts`.
   * @param companyName Key property. See {@link Sales_Totals_By_Amounts.companyName}.
   * @param orderId Key property. See {@link Sales_Totals_By_Amounts.orderId}.
   * @returns A request builder for creating requests that delete an entity of type `Sales_Totals_By_Amounts`.
   */
  delete(
    companyName: string,
    orderId: number
  ): DeleteRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Sales_Totals_By_Amounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Sales_Totals_By_Amounts` by taking the entity as a parameter.
   */
  delete(
    entity: Sales_Totals_By_Amounts<T>
  ): DeleteRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
}
