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
import { Customer_And_Suppliers_By_Cities } from './Customer_And_Suppliers_By_Cities';

/**
 * Request builder class for operations supported on the {@link Customer_And_Suppliers_By_Cities} entity.
 */
export class Customer_And_Suppliers_By_CitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Customer_And_Suppliers_By_Cities<T>, T> {
  /**
   * Returns a request builder for querying all `Customer_And_Suppliers_By_Cities` entities.
   * @returns A request builder for creating requests to retrieve all `Customer_And_Suppliers_By_Cities` entities.
   */
  getAll(): GetAllRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T> {
    return new GetAllRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `Customer_And_Suppliers_By_Cities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Customer_And_Suppliers_By_Cities`.
   */
  create(
    entity: Customer_And_Suppliers_By_Cities<T>
  ): CreateRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T> {
    return new CreateRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Customer_And_Suppliers_By_Cities` entity based on its keys.
   * @param companyName Key property. See {@link Customer_And_Suppliers_By_Cities.companyName}.
   * @param relationship Key property. See {@link Customer_And_Suppliers_By_Cities.relationship}.
   * @returns A request builder for creating requests to retrieve one `Customer_And_Suppliers_By_Cities` entity based on its keys.
   */
  getByKey(
    companyName: DeserializedType<T, 'Edm.String'>,
    relationship: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T> {
    return new GetByKeyRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T>(
      this.entityApi,
      {
        CompanyName: companyName,
        Relationship: relationship
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Customer_And_Suppliers_By_Cities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Customer_And_Suppliers_By_Cities`.
   */
  update(
    entity: Customer_And_Suppliers_By_Cities<T>
  ): UpdateRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T> {
    return new UpdateRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Customer_And_Suppliers_By_Cities`.
   * @param companyName Key property. See {@link Customer_And_Suppliers_By_Cities.companyName}.
   * @param relationship Key property. See {@link Customer_And_Suppliers_By_Cities.relationship}.
   * @returns A request builder for creating requests that delete an entity of type `Customer_And_Suppliers_By_Cities`.
   */
  delete(
    companyName: string,
    relationship: string
  ): DeleteRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Customer_And_Suppliers_By_Cities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Customer_And_Suppliers_By_Cities` by taking the entity as a parameter.
   */
  delete(
    entity: Customer_And_Suppliers_By_Cities<T>
  ): DeleteRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T>;
  delete(
    companyNameOrEntity: any,
    relationship?: string
  ): DeleteRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T> {
    return new DeleteRequestBuilder<Customer_And_Suppliers_By_Cities<T>, T>(
      this.entityApi,
      companyNameOrEntity instanceof Customer_And_Suppliers_By_Cities
        ? companyNameOrEntity
        : {
            CompanyName: companyNameOrEntity!,
            Relationship: relationship!
          }
    );
  }
}
