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
import type { SuppliersApi } from './SuppliersApi';
import { Products, ProductsType } from './Products';
/**
 * This class represents the entity "Suppliers" of service "Northwind".
 */
export declare class Suppliers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SuppliersType<T>
{
  /**
   * Technical entity name for Suppliers.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Suppliers entity
   */
  static _keys: string[];
  /**
   * Supplier Id.
   */
  supplierId: DeserializedType<T, 'Edm.Int32'>;
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
   * Contact Title.
   * Maximum length: 30.
   * @nullable
   */
  contactTitle?: DeserializedType<T, 'Edm.String'> | null;
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
   * Phone.
   * Maximum length: 24.
   * @nullable
   */
  phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax.
   * Maximum length: 24.
   * @nullable
   */
  fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Page.
   * Maximum length: max.
   * @nullable
   */
  homePage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Products} entity.
   */
  products: Products<T>[];
  constructor(_entityApi: SuppliersApi<T>);
}
export interface SuppliersType<T extends DeSerializers = DefaultDeSerializers> {
  supplierId: DeserializedType<T, 'Edm.Int32'>;
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
  homePage?: DeserializedType<T, 'Edm.String'> | null;
  products: ProductsType<T>[];
}
