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
export class Products_Above_Average_Prices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Products_Above_Average_PricesType<T>
{
  /**
   * Technical entity name for Products_Above_Average_Prices.
   */
  static _entityName = 'Products_Above_Average_Prices';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Products_Above_Average_Prices entity
   */
  static _keys = ['ProductName'];
  /**
   * Product Name.
   * Maximum length: 40.
   */
  declare productName: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Price.
   * @nullable
   */
  declare unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(_entityApi: Products_Above_Average_PricesApi<T>) {
    super(_entityApi);
  }
}

export interface Products_Above_Average_PricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productName: DeserializedType<T, 'Edm.String'>;
  unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
}
