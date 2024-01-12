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
export class Products<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductsType<T>
{
  /**
   * Technical entity name for Products.
   */
  static _entityName = 'Products';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Products entity
   */
  static _keys = ['ProductID'];
  /**
   * Product Id.
   */
  declare productId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Name.
   * Maximum length: 40.
   */
  declare productName: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier Id.
   * @nullable
   */
  declare supplierId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Category Id.
   * @nullable
   */
  declare categoryId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Quantity Per Unit.
   * Maximum length: 20.
   * @nullable
   */
  declare quantityPerUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price.
   * @nullable
   */
  declare unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Units In Stock.
   * @nullable
   */
  declare unitsInStock?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Units On Order.
   * @nullable
   */
  declare unitsOnOrder?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Reorder Level.
   * @nullable
   */
  declare reorderLevel?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Discontinued.
   */
  declare discontinued: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * One-to-one navigation property to the {@link Categories} entity.
   */
  declare category?: Categories<T> | null;
  /**
   * One-to-many navigation property to the {@link Order_Details} entity.
   */
  declare orderDetails: Order_Details<T>[];
  /**
   * One-to-one navigation property to the {@link Suppliers} entity.
   */
  declare supplier?: Suppliers<T> | null;

  constructor(_entityApi: ProductsApi<T>) {
    super(_entityApi);
  }
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
