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
import type { ProductsApi } from './ProductsApi';
import { Categories, CategoriesType } from './Categories';
import { Order_Details, Order_DetailsType } from './Order_Details';
import { Suppliers, SuppliersType } from './Suppliers';
/**
 * This class represents the entity "Products" of service "Northwind".
 */
export declare class Products<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductsType<T>
{
  /**
   * Technical entity name for Products.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Products entity
   */
  static _keys: string[];
  /**
   * Product Id.
   */
  productId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Name.
   * Maximum length: 40.
   */
  productName: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier Id.
   * @nullable
   */
  supplierId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Category Id.
   * @nullable
   */
  categoryId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Quantity Per Unit.
   * Maximum length: 20.
   * @nullable
   */
  quantityPerUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price.
   * @nullable
   */
  unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Units In Stock.
   * @nullable
   */
  unitsInStock?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Units On Order.
   * @nullable
   */
  unitsOnOrder?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Reorder Level.
   * @nullable
   */
  reorderLevel?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Discontinued.
   */
  discontinued: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * One-to-one navigation property to the {@link Categories} entity.
   */
  category?: Categories<T> | null;
  /**
   * One-to-many navigation property to the {@link Order_Details} entity.
   */
  orderDetails: Order_Details<T>[];
  /**
   * One-to-one navigation property to the {@link Suppliers} entity.
   */
  supplier?: Suppliers<T> | null;
  constructor(_entityApi: ProductsApi<T>);
}
export interface ProductsType<T extends DeSerializers = DefaultDeSerializers> {
  productId: DeserializedType<T, 'Edm.Int32'>;
  productName: DeserializedType<T, 'Edm.String'>;
  supplierId?: DeserializedType<T, 'Edm.Int32'> | null;
  categoryId?: DeserializedType<T, 'Edm.Int32'> | null;
  quantityPerUnit?: DeserializedType<T, 'Edm.String'> | null;
  unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  unitsInStock?: DeserializedType<T, 'Edm.Int16'> | null;
  unitsOnOrder?: DeserializedType<T, 'Edm.Int16'> | null;
  reorderLevel?: DeserializedType<T, 'Edm.Int16'> | null;
  discontinued: DeserializedType<T, 'Edm.Boolean'>;
  category?: CategoriesType<T> | null;
  orderDetails: Order_DetailsType<T>[];
  supplier?: SuppliersType<T> | null;
}
