/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { Invoices } from './Invoices';

/**
 * Request builder class for operations supported on the {@link Invoices} entity.
 */
export class InvoicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Invoices<T>, T> {
  /**
   * Returns a request builder for querying all `Invoices` entities.
   * @returns A request builder for creating requests to retrieve all `Invoices` entities.
   */
  getAll(): GetAllRequestBuilder<Invoices<T>, T> {
    return new GetAllRequestBuilder<Invoices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Invoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Invoices`.
   */
  create(entity: Invoices<T>): CreateRequestBuilder<Invoices<T>, T> {
    return new CreateRequestBuilder<Invoices<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Invoices` entity based on its keys.
   * @param customerName Key property. See {@link Invoices.customerName}.
   * @param discount Key property. See {@link Invoices.discount}.
   * @param orderId Key property. See {@link Invoices.orderId}.
   * @param productId Key property. See {@link Invoices.productId}.
   * @param productName Key property. See {@link Invoices.productName}.
   * @param quantity Key property. See {@link Invoices.quantity}.
   * @param salesperson Key property. See {@link Invoices.salesperson}.
   * @param shipperName Key property. See {@link Invoices.shipperName}.
   * @param unitPrice Key property. See {@link Invoices.unitPrice}.
   * @returns A request builder for creating requests to retrieve one `Invoices` entity based on its keys.
   */
  getByKey(
    customerName: DeserializedType<T, 'Edm.String'>,
    discount: DeserializedType<T, 'Edm.Single'>,
    orderId: DeserializedType<T, 'Edm.Int32'>,
    productId: DeserializedType<T, 'Edm.Int32'>,
    productName: DeserializedType<T, 'Edm.String'>,
    quantity: DeserializedType<T, 'Edm.Int16'>,
    salesperson: DeserializedType<T, 'Edm.String'>,
    shipperName: DeserializedType<T, 'Edm.String'>,
    unitPrice: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<Invoices<T>, T> {
    return new GetByKeyRequestBuilder<Invoices<T>, T>(this.entityApi, {
      CustomerName: customerName,
      Discount: discount,
      OrderID: orderId,
      ProductID: productId,
      ProductName: productName,
      Quantity: quantity,
      Salesperson: salesperson,
      ShipperName: shipperName,
      UnitPrice: unitPrice
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Invoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Invoices`.
   */
  update(entity: Invoices<T>): UpdateRequestBuilder<Invoices<T>, T> {
    return new UpdateRequestBuilder<Invoices<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Invoices`.
   * @param customerName Key property. See {@link Invoices.customerName}.
   * @param discount Key property. See {@link Invoices.discount}.
   * @param orderId Key property. See {@link Invoices.orderId}.
   * @param productId Key property. See {@link Invoices.productId}.
   * @param productName Key property. See {@link Invoices.productName}.
   * @param quantity Key property. See {@link Invoices.quantity}.
   * @param salesperson Key property. See {@link Invoices.salesperson}.
   * @param shipperName Key property. See {@link Invoices.shipperName}.
   * @param unitPrice Key property. See {@link Invoices.unitPrice}.
   * @returns A request builder for creating requests that delete an entity of type `Invoices`.
   */
  delete(
    customerName: string,
    discount: number,
    orderId: number,
    productId: number,
    productName: string,
    quantity: number,
    salesperson: string,
    shipperName: string,
    unitPrice: BigNumber
  ): DeleteRequestBuilder<Invoices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Invoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Invoices` by taking the entity as a parameter.
   */
  delete(entity: Invoices<T>): DeleteRequestBuilder<Invoices<T>, T>;
  delete(
    customerNameOrEntity: any,
    discount?: number,
    orderId?: number,
    productId?: number,
    productName?: string,
    quantity?: number,
    salesperson?: string,
    shipperName?: string,
    unitPrice?: BigNumber
  ): DeleteRequestBuilder<Invoices<T>, T> {
    return new DeleteRequestBuilder<Invoices<T>, T>(
      this.entityApi,
      customerNameOrEntity instanceof Invoices
        ? customerNameOrEntity
        : {
            CustomerName: customerNameOrEntity!,
            Discount: discount!,
            OrderID: orderId!,
            ProductID: productId!,
            ProductName: productName!,
            Quantity: quantity!,
            Salesperson: salesperson!,
            ShipperName: shipperName!,
            UnitPrice: unitPrice!
          }
    );
  }
}
