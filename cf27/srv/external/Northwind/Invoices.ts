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
export class Invoices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InvoicesType<T>
{
  /**
   * Technical entity name for Invoices.
   */
  static _entityName = 'Invoices';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Invoices entity
   */
  static _keys = [
    'CustomerName',
    'Discount',
    'OrderID',
    'ProductID',
    'ProductName',
    'Quantity',
    'Salesperson',
    'ShipperName',
    'UnitPrice'
  ];
  /**
   * Ship Name.
   * Maximum length: 40.
   * @nullable
   */
  declare shipName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Address.
   * Maximum length: 60.
   * @nullable
   */
  declare shipAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship City.
   * Maximum length: 15.
   * @nullable
   */
  declare shipCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Region.
   * Maximum length: 15.
   * @nullable
   */
  declare shipRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  declare shipPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Country.
   * Maximum length: 15.
   * @nullable
   */
  declare shipCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Id.
   * Maximum length: 5.
   * @nullable
   */
  declare customerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Name.
   * Maximum length: 40.
   */
  declare customerName: DeserializedType<T, 'Edm.String'>;
  /**
   * Address.
   * Maximum length: 60.
   * @nullable
   */
  declare address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * Maximum length: 15.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region.
   * Maximum length: 15.
   * @nullable
   */
  declare region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  declare postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * Maximum length: 15.
   * @nullable
   */
  declare country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Salesperson.
   * Maximum length: 31.
   */
  declare salesperson: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Id.
   */
  declare orderId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Order Date.
   * @nullable
   */
  declare orderDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Required Date.
   * @nullable
   */
  declare requiredDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Shipped Date.
   * @nullable
   */
  declare shippedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Shipper Name.
   * Maximum length: 40.
   */
  declare shipperName: DeserializedType<T, 'Edm.String'>;
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
  /**
   * Freight.
   * @nullable
   */
  declare freight?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(_entityApi: InvoicesApi<T>) {
    super(_entityApi);
  }
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
