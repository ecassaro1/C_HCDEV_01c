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
import type { Alphabetical_List_Of_ProductsApi } from './Alphabetical_List_Of_ProductsApi';

/**
 * This class represents the entity "Alphabetical_list_of_products" of service "Northwind".
 */
export class Alphabetical_List_Of_Products<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Alphabetical_List_Of_ProductsType<T>
{
  /**
   * Technical entity name for Alphabetical_List_Of_Products.
   */
  static _entityName = 'Alphabetical_list_of_products';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Alphabetical_List_Of_Products entity
   */
  static _keys = ['CategoryName', 'Discontinued', 'ProductID', 'ProductName'];
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
   * Category Name.
   * Maximum length: 15.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Alphabetical_List_Of_ProductsApi<T>) {
    super(_entityApi);
  }
}

export interface Alphabetical_List_Of_ProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
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
  categoryName: DeserializedType<T, 'Edm.String'>;
}
