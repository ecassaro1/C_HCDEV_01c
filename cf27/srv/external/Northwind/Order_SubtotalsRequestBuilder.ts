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
import { Order_Subtotals } from './Order_Subtotals';

/**
 * Request builder class for operations supported on the {@link Order_Subtotals} entity.
 */
export class Order_SubtotalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Order_Subtotals<T>, T> {
  /**
   * Returns a request builder for querying all `Order_Subtotals` entities.
   * @returns A request builder for creating requests to retrieve all `Order_Subtotals` entities.
   */
  getAll(): GetAllRequestBuilder<Order_Subtotals<T>, T> {
    return new GetAllRequestBuilder<Order_Subtotals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Order_Subtotals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Order_Subtotals`.
   */
  create(
    entity: Order_Subtotals<T>
  ): CreateRequestBuilder<Order_Subtotals<T>, T> {
    return new CreateRequestBuilder<Order_Subtotals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Order_Subtotals` entity based on its keys.
   * @param orderId Key property. See {@link Order_Subtotals.orderId}.
   * @returns A request builder for creating requests to retrieve one `Order_Subtotals` entity based on its keys.
   */
  getByKey(
    orderId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Order_Subtotals<T>, T> {
    return new GetByKeyRequestBuilder<Order_Subtotals<T>, T>(this.entityApi, {
      OrderID: orderId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Order_Subtotals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Order_Subtotals`.
   */
  update(
    entity: Order_Subtotals<T>
  ): UpdateRequestBuilder<Order_Subtotals<T>, T> {
    return new UpdateRequestBuilder<Order_Subtotals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Order_Subtotals`.
   * @param orderId Key property. See {@link Order_Subtotals.orderId}.
   * @returns A request builder for creating requests that delete an entity of type `Order_Subtotals`.
   */
  delete(orderId: number): DeleteRequestBuilder<Order_Subtotals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Order_Subtotals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Order_Subtotals` by taking the entity as a parameter.
   */
  delete(
    entity: Order_Subtotals<T>
  ): DeleteRequestBuilder<Order_Subtotals<T>, T>;
  delete(orderIdOrEntity: any): DeleteRequestBuilder<Order_Subtotals<T>, T> {
    return new DeleteRequestBuilder<Order_Subtotals<T>, T>(
      this.entityApi,
      orderIdOrEntity instanceof Order_Subtotals
        ? orderIdOrEntity
        : { OrderID: orderIdOrEntity! }
    );
  }
}
