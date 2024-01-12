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
import type { Products_Above_Average_PricesApi } from './Products_Above_Average_PricesApi';
/**
 * This class represents the entity "Products_Above_Average_Prices" of service "Northwind".
 */
export declare class Products_Above_Average_Prices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Products_Above_Average_PricesType<T>
{
  /**
   * Technical entity name for Products_Above_Average_Prices.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Products_Above_Average_Prices entity
   */
  static _keys: string[];
  /**
   * Product Name.
   * Maximum length: 40.
   */
  productName: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Price.
   * @nullable
   */
  unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  constructor(_entityApi: Products_Above_Average_PricesApi<T>);
}
export interface Products_Above_Average_PricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productName: DeserializedType<T, 'Edm.String'>;
  unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
}
