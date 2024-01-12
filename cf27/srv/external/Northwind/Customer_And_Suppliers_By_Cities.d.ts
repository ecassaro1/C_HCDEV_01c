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
import type { Customer_And_Suppliers_By_CitiesApi } from './Customer_And_Suppliers_By_CitiesApi';
/**
 * This class represents the entity "Customer_and_Suppliers_by_Cities" of service "Northwind".
 */
export declare class Customer_And_Suppliers_By_Cities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Customer_And_Suppliers_By_CitiesType<T>
{
  /**
   * Technical entity name for Customer_And_Suppliers_By_Cities.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Customer_And_Suppliers_By_Cities entity
   */
  static _keys: string[];
  /**
   * City.
   * Maximum length: 15.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Name.
   * Maximum length: 40.
   */
  companyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Name.
   * Maximum length: 30.
   * @nullable
   */
  contactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relationship.
   * Maximum length: 9.
   */
  relationship: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: Customer_And_Suppliers_By_CitiesApi<T>);
}
export interface Customer_And_Suppliers_By_CitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  city?: DeserializedType<T, 'Edm.String'> | null;
  companyName: DeserializedType<T, 'Edm.String'>;
  contactName?: DeserializedType<T, 'Edm.String'> | null;
  relationship: DeserializedType<T, 'Edm.String'>;
}
