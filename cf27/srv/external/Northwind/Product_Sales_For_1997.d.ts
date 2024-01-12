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
import type { Product_Sales_For_1997Api } from './Product_Sales_For_1997Api';
/**
 * This class represents the entity "Product_Sales_for_1997" of service "Northwind".
 */
export declare class Product_Sales_For_1997<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Product_Sales_For_1997Type<T>
{
  /**
   * Technical entity name for Product_Sales_For_1997.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Product_Sales_For_1997 entity
   */
  static _keys: string[];
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
  constructor(_entityApi: Product_Sales_For_1997Api<T>);
}
export interface Product_Sales_For_1997Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryName: DeserializedType<T, 'Edm.String'>;
  productName: DeserializedType<T, 'Edm.String'>;
  productSales?: DeserializedType<T, 'Edm.Decimal'> | null;
}
