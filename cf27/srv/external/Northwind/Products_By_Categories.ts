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
import type { Products_By_CategoriesApi } from './Products_By_CategoriesApi';

/**
 * This class represents the entity "Products_by_Categories" of service "Northwind".
 */
export class Products_By_Categories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Products_By_CategoriesType<T>
{
  /**
   * Technical entity name for Products_By_Categories.
   */
  static _entityName = 'Products_by_Categories';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Products_By_Categories entity
   */
  static _keys = ['CategoryName', 'Discontinued', 'ProductName'];
  /**
   * Category Name.
   * Maximum length: 15.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Name.
   * Maximum length: 40.
   */
  declare productName: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity Per Unit.
   * Maximum length: 20.
   * @nullable
   */
  declare quantityPerUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Units In Stock.
   * @nullable
   */
  declare unitsInStock?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Discontinued.
   */
  declare discontinued: DeserializedType<T, 'Edm.Boolean'>;

  constructor(_entityApi: Products_By_CategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface Products_By_CategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryName: DeserializedType<T, 'Edm.String'>;
  productName: DeserializedType<T, 'Edm.String'>;
  quantityPerUnit?: DeserializedType<T, 'Edm.String'> | null;
  unitsInStock?: DeserializedType<T, 'Edm.Int16'> | null;
  discontinued: DeserializedType<T, 'Edm.Boolean'>;
}
