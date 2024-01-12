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
import type { Orders_QriesApi } from './Orders_QriesApi';

/**
 * This class represents the entity "Orders_Qries" of service "Northwind".
 */
export class Orders_Qries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Orders_QriesType<T>
{
  /**
   * Technical entity name for Orders_Qries.
   */
  static _entityName = 'Orders_Qries';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Orders_Qries entity
   */
  static _keys = ['CompanyName', 'OrderID'];
  /**
   * Order Id.
   */
  declare orderId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer Id.
   * Maximum length: 5.
   * @nullable
   */
  declare customerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Id.
   * @nullable
   */
  declare employeeId?: DeserializedType<T, 'Edm.Int32'> | null;
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
   * Ship Via.
   * @nullable
   */
  declare shipVia?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Freight.
   * @nullable
   */
  declare freight?: DeserializedType<T, 'Edm.Decimal'> | null;
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
   * Company Name.
   * Maximum length: 40.
   */
  declare companyName: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: Orders_QriesApi<T>) {
    super(_entityApi);
  }
}

export interface Orders_QriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  orderId: DeserializedType<T, 'Edm.Int32'>;
  customerId?: DeserializedType<T, 'Edm.String'> | null;
  employeeId?: DeserializedType<T, 'Edm.Int32'> | null;
  orderDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  requiredDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  shippedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  shipVia?: DeserializedType<T, 'Edm.Int32'> | null;
  freight?: DeserializedType<T, 'Edm.Decimal'> | null;
  shipName?: DeserializedType<T, 'Edm.String'> | null;
  shipAddress?: DeserializedType<T, 'Edm.String'> | null;
  shipCity?: DeserializedType<T, 'Edm.String'> | null;
  shipRegion?: DeserializedType<T, 'Edm.String'> | null;
  shipPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  shipCountry?: DeserializedType<T, 'Edm.String'> | null;
  companyName: DeserializedType<T, 'Edm.String'>;
  address?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  region?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
}
