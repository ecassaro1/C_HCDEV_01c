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
import type { CustomersApi } from './CustomersApi';
import {
  CustomerDemographics,
  CustomerDemographicsType
} from './CustomerDemographics';
import { Orders, OrdersType } from './Orders';

/**
 * This class represents the entity "Customers" of service "Northwind".
 */
export class Customers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomersType<T>
{
  /**
   * Technical entity name for Customers.
   */
  static _entityName = 'Customers';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Customers entity
   */
  static _keys = ['CustomerID'];
  /**
   * Customer Id.
   * Maximum length: 5.
   */
  declare customerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Name.
   * Maximum length: 40.
   */
  declare companyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Name.
   * Maximum length: 30.
   * @nullable
   */
  declare contactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Title.
   * Maximum length: 30.
   * @nullable
   */
  declare contactTitle?: DeserializedType<T, 'Edm.String'> | null;
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
   * Phone.
   * Maximum length: 24.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax.
   * Maximum length: 24.
   * @nullable
   */
  declare fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CustomerDemographics} entity.
   */
  declare customerDemographics: CustomerDemographics<T>[];
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  declare orders: Orders<T>[];

  constructor(_entityApi: CustomersApi<T>) {
    super(_entityApi);
  }
}

export interface CustomersType<T extends DeSerializers = DefaultDeSerializers> {
  customerId: DeserializedType<T, 'Edm.String'>;
  companyName: DeserializedType<T, 'Edm.String'>;
  contactName?: DeserializedType<T, 'Edm.String'> | null;
  contactTitle?: DeserializedType<T, 'Edm.String'> | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  region?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  customerDemographics: CustomerDemographicsType<T>[];
  orders: OrdersType<T>[];
}
