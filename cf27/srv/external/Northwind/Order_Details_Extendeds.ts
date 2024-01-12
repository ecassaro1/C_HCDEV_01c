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
import type { Order_Details_ExtendedsApi } from './Order_Details_ExtendedsApi';

/**
 * This class represents the entity "Order_Details_Extendeds" of service "Northwind".
 */
export class Order_Details_Extendeds<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Order_Details_ExtendedsType<T>
{
  /**
   * Technical entity name for Order_Details_Extendeds.
   */
  static _entityName = 'Order_Details_Extendeds';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Order_Details_Extendeds entity
   */
  static _keys = [
    'Discount',
    'OrderID',
    'ProductID',
    'ProductName',
    'Quantity',
    'UnitPrice'
  ];
  /**
   * Order Id.
   */
  declare orderId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Id.
   */
  declare productId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Name.
   * Maximum length: 40.
   */
  declare productName: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Int16'>;
  /**
   * Discount.
   */
  declare discount: DeserializedType<T, 'Edm.Single'>;
  /**
   * Extended Price.
   * @nullable
   */
  declare extendedPrice?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(_entityApi: Order_Details_ExtendedsApi<T>) {
    super(_entityApi);
  }
}

export interface Order_Details_ExtendedsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  orderId: DeserializedType<T, 'Edm.Int32'>;
  productId: DeserializedType<T, 'Edm.Int32'>;
  productName: DeserializedType<T, 'Edm.String'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Int16'>;
  discount: DeserializedType<T, 'Edm.Single'>;
  extendedPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
}
