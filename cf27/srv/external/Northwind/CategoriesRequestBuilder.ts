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
import { Categories } from './Categories';

/**
 * Request builder class for operations supported on the {@link Categories} entity.
 */
export class CategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Categories<T>, T> {
  /**
   * Returns a request builder for querying all `Categories` entities.
   * @returns A request builder for creating requests to retrieve all `Categories` entities.
   */
  getAll(): GetAllRequestBuilder<Categories<T>, T> {
    return new GetAllRequestBuilder<Categories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Categories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Categories`.
   */
  create(entity: Categories<T>): CreateRequestBuilder<Categories<T>, T> {
    return new CreateRequestBuilder<Categories<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Categories` entity based on its keys.
   * @param categoryId Key property. See {@link Categories.categoryId}.
   * @returns A request builder for creating requests to retrieve one `Categories` entity based on its keys.
   */
  getByKey(
    categoryId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Categories<T>, T> {
    return new GetByKeyRequestBuilder<Categories<T>, T>(this.entityApi, {
      CategoryID: categoryId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Categories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Categories`.
   */
  update(entity: Categories<T>): UpdateRequestBuilder<Categories<T>, T> {
    return new UpdateRequestBuilder<Categories<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Categories`.
   * @param categoryId Key property. See {@link Categories.categoryId}.
   * @returns A request builder for creating requests that delete an entity of type `Categories`.
   */
  delete(categoryId: number): DeleteRequestBuilder<Categories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Categories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Categories` by taking the entity as a parameter.
   */
  delete(entity: Categories<T>): DeleteRequestBuilder<Categories<T>, T>;
  delete(categoryIdOrEntity: any): DeleteRequestBuilder<Categories<T>, T> {
    return new DeleteRequestBuilder<Categories<T>, T>(
      this.entityApi,
      categoryIdOrEntity instanceof Categories
        ? categoryIdOrEntity
        : { CategoryID: categoryIdOrEntity! }
    );
  }
}
