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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Products<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ProductsApi<DeSerializersT> {
    return new ProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      CategoriesApi<DeSerializersT>,
      Order_DetailsApi<DeSerializersT>,
      SuppliersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CATEGORY: new OneToOneLink('Category', this, linkedApis[0]),
      ORDER_DETAILS: new OneToManyLink('Order_Details', this, linkedApis[1]),
      SUPPLIER: new OneToOneLink('Supplier', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = Products;

  requestBuilder(): ProductsRequestBuilder<DeSerializersT> {
    return new ProductsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Products<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Products<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Products<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Products, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Products, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_ID: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_ID: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    QUANTITY_PER_UNIT: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    UNITS_IN_STOCK: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      true,
      true
    >;
    UNITS_ON_ORDER: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      true,
      true
    >;
    REORDER_LEVEL: OrderableEdmTypeField<
      Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      true,
      true
    >;
    DISCONTINUED: OrderableEdmTypeField<
      Products<DeSerializers>,
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
    ALL_FIELDS: AllFields<Products<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ProductID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link supplierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_ID: fieldBuilder.buildEdmTypeField(
          'SupplierID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link categoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'CategoryID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link quantityPerUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_PER_UNIT: fieldBuilder.buildEdmTypeField(
          'QuantityPerUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link unitsInStock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNITS_IN_STOCK: fieldBuilder.buildEdmTypeField(
          'UnitsInStock',
          'Edm.Int16',
          true
        ),
        /**
         * Static representation of the {@link unitsOnOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNITS_ON_ORDER: fieldBuilder.buildEdmTypeField(
          'UnitsOnOrder',
          'Edm.Int16',
          true
        ),
        /**
         * Static representation of the {@link reorderLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REORDER_LEVEL: fieldBuilder.buildEdmTypeField(
          'ReorderLevel',
          'Edm.Int16',
          true
        ),
        /**
         * Static representation of the {@link discontinued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCONTINUED: fieldBuilder.buildEdmTypeField(
          'Discontinued',
          'Edm.Boolean',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Products)
      };
    }

    return this._schema;
  }
}
