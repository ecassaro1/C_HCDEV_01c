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
import type { Current_Product_ListsApi } from './Current_Product_ListsApi';

/**
 * This class represents the entity "Current_Product_Lists" of service "Northwind".
 */
export class Current_Product_Lists<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Current_Product_ListsType<T>
{
  /**
   * Technical entity name for Current_Product_Lists.
   */
  static _entityName = 'Current_Product_Lists';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Current_Product_Lists entity
   */
  static _keys = ['ProductID', 'ProductName'];
  /**
   * Product Id.
   */
  declare productId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Name.
   * Maximum length: 40.
   */
  declare productName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Current_Product_ListsApi<T>) {
    super(_entityApi);
  }
}

export interface Current_Product_ListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productId: DeserializedType<T, 'Edm.Int32'>;
  productName: DeserializedType<T, 'Edm.String'>;
}
