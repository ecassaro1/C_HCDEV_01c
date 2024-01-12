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
import type { Order_SubtotalsApi } from './Order_SubtotalsApi';

/**
 * This class represents the entity "Order_Subtotals" of service "Northwind".
 */
export class Order_Subtotals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Order_SubtotalsType<T>
{
  /**
   * Technical entity name for Order_Subtotals.
   */
  static _entityName = 'Order_Subtotals';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Order_Subtotals entity
   */
  static _keys = ['OrderID'];
  /**
   * Order Id.
   */
  declare orderId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Subtotal.
   * @nullable
   */
  declare subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(_entityApi: Order_SubtotalsApi<T>) {
    super(_entityApi);
  }
}

export interface Order_SubtotalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  orderId: DeserializedType<T, 'Edm.Int32'>;
  subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;
}
