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
import { Employees } from './Employees';

/**
 * Request builder class for operations supported on the {@link Employees} entity.
 */
export class EmployeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Employees<T>, T> {
  /**
   * Returns a request builder for querying all `Employees` entities.
   * @returns A request builder for creating requests to retrieve all `Employees` entities.
   */
  getAll(): GetAllRequestBuilder<Employees<T>, T> {
    return new GetAllRequestBuilder<Employees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Employees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Employees`.
   */
  create(entity: Employees<T>): CreateRequestBuilder<Employees<T>, T> {
    return new CreateRequestBuilder<Employees<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Employees` entity based on its keys.
   * @param employeeId Key property. See {@link Employees.employeeId}.
   * @returns A request builder for creating requests to retrieve one `Employees` entity based on its keys.
   */
  getByKey(
    employeeId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Employees<T>, T> {
    return new GetByKeyRequestBuilder<Employees<T>, T>(this.entityApi, {
      EmployeeID: employeeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Employees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Employees`.
   */
  update(entity: Employees<T>): UpdateRequestBuilder<Employees<T>, T> {
    return new UpdateRequestBuilder<Employees<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Employees`.
   * @param employeeId Key property. See {@link Employees.employeeId}.
   * @returns A request builder for creating requests that delete an entity of type `Employees`.
   */
  delete(employeeId: number): DeleteRequestBuilder<Employees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Employees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Employees` by taking the entity as a parameter.
   */
  delete(entity: Employees<T>): DeleteRequestBuilder<Employees<T>, T>;
  delete(employeeIdOrEntity: any): DeleteRequestBuilder<Employees<T>, T> {
    return new DeleteRequestBuilder<Employees<T>, T>(
      this.entityApi,
      employeeIdOrEntity instanceof Employees
        ? employeeIdOrEntity
        : { EmployeeID: employeeIdOrEntity! }
    );
  }
}
