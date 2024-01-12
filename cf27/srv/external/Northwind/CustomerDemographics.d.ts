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
import type { CustomerDemographicsApi } from './CustomerDemographicsApi';
import { Customers, CustomersType } from './Customers';
/**
 * This class represents the entity "CustomerDemographics" of service "Northwind".
 */
export declare class CustomerDemographics<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerDemographicsType<T>
{
  /**
   * Technical entity name for CustomerDemographics.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the CustomerDemographics entity
   */
  static _keys: string[];
  /**
   * Customer Type Id.
   * Maximum length: 10.
   */
  customerTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Desc.
   * Maximum length: max.
   * @nullable
   */
  customerDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Customers} entity.
   */
  customers: Customers<T>[];
  constructor(_entityApi: CustomerDemographicsApi<T>);
}
export interface CustomerDemographicsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customerTypeId: DeserializedType<T, 'Edm.String'>;
  customerDesc?: DeserializedType<T, 'Edm.String'> | null;
  customers: CustomersType<T>[];
}
