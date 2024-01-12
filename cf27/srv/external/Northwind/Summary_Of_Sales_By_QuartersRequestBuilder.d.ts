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
import { Summary_Of_Sales_By_Quarters } from './Summary_Of_Sales_By_Quarters';
/**
 * Request builder class for operations supported on the {@link Summary_Of_Sales_By_Quarters} entity.
 */
export declare class Summary_Of_Sales_By_QuartersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Summary_Of_Sales_By_Quarters<T>, T> {
  /**
   * Returns a request builder for querying all `Summary_Of_Sales_By_Quarters` entities.
   * @returns A request builder for creating requests to retrieve all `Summary_Of_Sales_By_Quarters` entities.
   */
  getAll(): GetAllRequestBuilder<Summary_Of_Sales_By_Quarters<T>, T>;
  /**
   * Returns a request builder for creating a `Summary_Of_Sales_By_Quarters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Summary_Of_Sales_By_Quarters`.
   */
  create(
    entity: Summary_Of_Sales_By_Quarters<T>
  ): CreateRequestBuilder<Summary_Of_Sales_By_Quarters<T>, T>;
  /**
   * Returns a request builder for retrieving one `Summary_Of_Sales_By_Quarters` entity based on its keys.
   * @param orderId Key property. See {@link Summary_Of_Sales_By_Quarters.orderId}.
   * @returns A request builder for creating requests to retrieve one `Summary_Of_Sales_By_Quarters` entity based on its keys.
   */
  getByKey(
    orderId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Summary_Of_Sales_By_Quarters<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Summary_Of_Sales_By_Quarters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Summary_Of_Sales_By_Quarters`.
   */
  update(
    entity: Summary_Of_Sales_By_Quarters<T>
  ): UpdateRequestBuilder<Summary_Of_Sales_By_Quarters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Summary_Of_Sales_By_Quarters`.
   * @param orderId Key property. See {@link Summary_Of_Sales_By_Quarters.orderId}.
   * @returns A request builder for creating requests that delete an entity of type `Summary_Of_Sales_By_Quarters`.
   */
  delete(
    orderId: number
  ): DeleteRequestBuilder<Summary_Of_Sales_By_Quarters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Summary_Of_Sales_By_Quarters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Summary_Of_Sales_By_Quarters` by taking the entity as a parameter.
   */
  delete(
    entity: Summary_Of_Sales_By_Quarters<T>
  ): DeleteRequestBuilder<Summary_Of_Sales_By_Quarters<T>, T>;
}
