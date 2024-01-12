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
import type { Summary_Of_Sales_By_YearsApi } from './Summary_Of_Sales_By_YearsApi';

/**
 * This class represents the entity "Summary_of_Sales_by_Years" of service "Northwind".
 */
export class Summary_Of_Sales_By_Years<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Summary_Of_Sales_By_YearsType<T>
{
  /**
   * Technical entity name for Summary_Of_Sales_By_Years.
   */
  static _entityName = 'Summary_of_Sales_by_Years';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Summary_Of_Sales_By_Years entity
   */
  static _keys = ['OrderID'];
  /**
   * Shipped Date.
   * @nullable
   */
  declare shippedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Order Id.
   */
  declare orderId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Subtotal.
   * @nullable
   */
  declare subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(_entityApi: Summary_Of_Sales_By_YearsApi<T>) {
    super(_entityApi);
  }
}

export interface Summary_Of_Sales_By_YearsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  shippedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  orderId: DeserializedType<T, 'Edm.Int32'>;
  subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;
}
