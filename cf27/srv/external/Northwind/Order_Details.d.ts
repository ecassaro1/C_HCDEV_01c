/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { Order_DetailsApi } from './Order_DetailsApi';
import { Orders, OrdersType } from './Orders';
import { Products, ProductsType } from './Products';
/**
 * This class represents the entity "Order_Details" of service "Northwind".
 */
export declare class Order_Details<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Order_DetailsType<T>
{
  /**
   * Technical entity name for Order_Details.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Order_Details entity
   */
  static _keys: string[];
  /**
   * Order Id.
   */
  orderId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Id.
   */
  productId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Unit Price.
   */
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  quantity: DeserializedType<T, 'Edm.Int16'>;
  /**
   * Discount.
   */
  discount: DeserializedType<T, 'Edm.Single'>;
  /**
   * One-to-one navigation property to the {@link Orders} entity.
   */
  order?: Orders<T> | null;
  /**
   * One-to-one navigation property to the {@link Products} entity.
   */
  product?: Products<T> | null;
  constructor(_entityApi: Order_DetailsApi<T>);
}
export interface Order_DetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  orderId: DeserializedType<T, 'Edm.Int32'>;
  productId: DeserializedType<T, 'Edm.Int32'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Int16'>;
  discount: DeserializedType<T, 'Edm.Single'>;
  order?: OrdersType<T> | null;
  product?: ProductsType<T> | null;
}
