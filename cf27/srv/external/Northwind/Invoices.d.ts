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
import type { InvoicesApi } from './InvoicesApi';
/**
 * This class represents the entity "Invoices" of service "Northwind".
 */
export declare class Invoices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InvoicesType<T>
{
  /**
   * Technical entity name for Invoices.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Invoices entity
   */
  static _keys: string[];
  /**
   * Ship Name.
   * Maximum length: 40.
   * @nullable
   */
  shipName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Address.
   * Maximum length: 60.
   * @nullable
   */
  shipAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship City.
   * Maximum length: 15.
   * @nullable
   */
  shipCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Region.
   * Maximum length: 15.
   * @nullable
   */
  shipRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  shipPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Country.
   * Maximum length: 15.
   * @nullable
   */
  shipCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Id.
   * Maximum length: 5.
   * @nullable
   */
  customerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Name.
   * Maximum length: 40.
   */
  customerName: DeserializedType<T, 'Edm.String'>;
  /**
   * Address.
   * Maximum length: 60.
   * @nullable
   */
  address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * Maximum length: 15.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region.
   * Maximum length: 15.
   * @nullable
   */
  region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * Maximum length: 15.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Salesperson.
   * Maximum length: 31.
   */
  salesperson: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Id.
   */
  orderId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Order Date.
   * @nullable
   */
  orderDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Required Date.
   * @nullable
   */
  requiredDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Shipped Date.
   * @nullable
   */
  shippedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Shipper Name.
   * Maximum length: 40.
   */
  shipperName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Id.
   */
  productId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Name.
   * Maximum length: 40.
   */
  productName: DeserializedType<T, 'Edm.String'>;
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
   * Extended Price.
   * @nullable
   */
  extendedPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Freight.
   * @nullable
   */
  freight?: DeserializedType<T, 'Edm.Decimal'> | null;
  constructor(_entityApi: InvoicesApi<T>);
}
export interface InvoicesType<T extends DeSerializers = DefaultDeSerializers> {
  shipName?: DeserializedType<T, 'Edm.String'> | null;
  shipAddress?: DeserializedType<T, 'Edm.String'> | null;
  shipCity?: DeserializedType<T, 'Edm.String'> | null;
  shipRegion?: DeserializedType<T, 'Edm.String'> | null;
  shipPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  shipCountry?: DeserializedType<T, 'Edm.String'> | null;
  customerId?: DeserializedType<T, 'Edm.String'> | null;
  customerName: DeserializedType<T, 'Edm.String'>;
  address?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  region?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  salesperson: DeserializedType<T, 'Edm.String'>;
  orderId: DeserializedType<T, 'Edm.Int32'>;
  orderDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  requiredDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  shippedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  shipperName: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.Int32'>;
  productName: DeserializedType<T, 'Edm.String'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Int16'>;
  discount: DeserializedType<T, 'Edm.Single'>;
  extendedPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  freight?: DeserializedType<T, 'Edm.Decimal'> | null;
}
