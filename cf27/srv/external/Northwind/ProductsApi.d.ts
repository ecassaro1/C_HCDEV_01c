/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Products } from './Products';
import { ProductsRequestBuilder } from './ProductsRequestBuilder';
import { CategoriesApi } from './CategoriesApi';
import { Order_DetailsApi } from './Order_DetailsApi';
import { SuppliersApi } from './SuppliersApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export declare class ProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Products<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      CategoriesApi<DeSerializersT>,
      Order_DetailsApi<DeSerializersT>,
      SuppliersApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof Products;
  requestBuilder(): ProductsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<Products<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Products<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Products, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT_ID: OrderableEdmTypeField<
      Products<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      Products<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_ID: OrderableEdmTypeField<
      Products<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      Products<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    QUANTITY_PER_UNIT: OrderableEdmTypeField<
      Products<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      Products<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    UNITS_IN_STOCK: OrderableEdmTypeField<
      Products<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int16',
      true,
      true
    >;
    UNITS_ON_ORDER: OrderableEdmTypeField<
      Products<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int16',
      true,
      true
    >;
    REORDER_LEVEL: OrderableEdmTypeField<
      Products<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int16',
      true,
      true
    >;
    DISCONTINUED: OrderableEdmTypeField<
      Products<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link category} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATEGORY: OneToOneLink<
      Products<DeSerializersT>,
      DeSerializersT,
      CategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orderDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDER_DETAILS: OneToManyLink<
      Products<DeSerializersT>,
      DeSerializersT,
      Order_DetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link supplier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLIER: OneToOneLink<
      Products<DeSerializersT>,
      DeSerializersT,
      SuppliersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      Products<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
