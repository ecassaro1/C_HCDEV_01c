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
import type { ShippersApi } from './ShippersApi';
import { Orders, OrdersType } from './Orders';
/**
 * This class represents the entity "Shippers" of service "Northwind".
 */
export declare class Shippers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ShippersType<T>
{
  /**
   * Technical entity name for Shippers.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Shippers entity
   */
  static _keys: string[];
  /**
   * Shipper Id.
   */
  shipperId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Company Name.
   * Maximum length: 40.
   */
  companyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Phone.
   * Maximum length: 24.
   * @nullable
   */
  phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  orders: Orders<T>[];
  constructor(_entityApi: ShippersApi<T>);
}
export interface ShippersType<T extends DeSerializers = DefaultDeSerializers> {
  shipperId: DeserializedType<T, 'Edm.Int32'>;
  companyName: DeserializedType<T, 'Edm.String'>;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  orders: OrdersType<T>[];
}
