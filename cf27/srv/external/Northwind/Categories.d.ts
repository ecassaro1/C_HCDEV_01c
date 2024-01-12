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
import type { CategoriesApi } from './CategoriesApi';
import { Products, ProductsType } from './Products';
/**
 * This class represents the entity "Categories" of service "Northwind".
 */
export declare class Categories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CategoriesType<T>
{
  /**
   * Technical entity name for Categories.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Categories entity
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
   * Description.
   * Maximum length: max.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picture.
   * Maximum length: max.
   * @nullable
   */
  picture?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * One-to-many navigation property to the {@link Products} entity.
   */
  products: Products<T>[];
  constructor(_entityApi: CategoriesApi<T>);
}
export interface CategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryId: DeserializedType<T, 'Edm.Int32'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  picture?: DeserializedType<T, 'Edm.Binary'> | null;
  products: ProductsType<T>[];
}
