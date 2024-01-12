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
import { CustomerDemographics } from './CustomerDemographics';
/**
 * Request builder class for operations supported on the {@link CustomerDemographics} entity.
 */
export declare class CustomerDemographicsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerDemographics<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerDemographics` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerDemographics` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerDemographics<T>, T>;
  /**
   * Returns a request builder for creating a `CustomerDemographics` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerDemographics`.
   */
  create(
    entity: CustomerDemographics<T>
  ): CreateRequestBuilder<CustomerDemographics<T>, T>;
  /**
   * Returns a request builder for retrieving one `CustomerDemographics` entity based on its keys.
   * @param customerTypeId Key property. See {@link CustomerDemographics.customerTypeId}.
   * @returns A request builder for creating requests to retrieve one `CustomerDemographics` entity based on its keys.
   */
  getByKey(
    customerTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerDemographics<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `CustomerDemographics`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerDemographics`.
   */
  update(
    entity: CustomerDemographics<T>
  ): UpdateRequestBuilder<CustomerDemographics<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerDemographics`.
   * @param customerTypeId Key property. See {@link CustomerDemographics.customerTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerDemographics`.
   */
  delete(
    customerTypeId: string
  ): DeleteRequestBuilder<CustomerDemographics<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerDemographics`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerDemographics` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerDemographics<T>
  ): DeleteRequestBuilder<CustomerDemographics<T>, T>;
}
