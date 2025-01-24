/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { BooksApi } from './BooksApi';

/**
 * This class represents the entity "Books" of service "CatalogService".
 */
export class Books<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BooksType<T>
{
  /**
   * Technical entity name for Books.
   */
  static override _entityName = 'Books';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/odata/v4/catalog';
  /**
   * All key fields of the Books entity.
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Title.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock.
   * @nullable
   */
  declare stock?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(_entityApi: BooksApi<T>) {
    super(_entityApi);
  }
}

export interface BooksType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Int32'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  stock?: DeserializedType<T, 'Edm.Int32'> | null;
}
