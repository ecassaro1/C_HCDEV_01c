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
import type { Sales_By_CategoriesApi } from './Sales_By_CategoriesApi';
/**
 * This class represents the entity "Sales_by_Categories" of service "Northwind".
 */
export declare class Sales_By_Categories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Sales_By_CategoriesType<T>
{
  /**
   * Technical entity name for Sales_By_Categories.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Sales_By_Categories entity
   */
  static _keys: string[];
  /**
   * Category Id.
   */
  categoryId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Category Name.
   * Maximum length: 15.
   */
  categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Name.
   * Maximum length: 40.
   */
  productName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Sales.
   * @nullable
   */
  productSales?: DeserializedType<T, 'Edm.Decimal'> | null;
  constructor(_entityApi: Sales_By_CategoriesApi<T>);
}
export interface Sales_By_CategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryId: DeserializedType<T, 'Edm.Int32'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  productName: DeserializedType<T, 'Edm.String'>;
  productSales?: DeserializedType<T, 'Edm.Decimal'> | null;
}
