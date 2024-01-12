/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Alphabetical_List_Of_Products } from './Alphabetical_List_Of_Products';
import { Alphabetical_List_Of_ProductsRequestBuilder } from './Alphabetical_List_Of_ProductsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class Alphabetical_List_Of_ProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<Alphabetical_List_Of_Products<DeSerializersT>, DeSerializersT>
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
  ): Alphabetical_List_Of_ProductsApi<DeSerializersT> {
    return new Alphabetical_List_Of_ProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Alphabetical_List_Of_Products;

  requestBuilder(): Alphabetical_List_Of_ProductsRequestBuilder<DeSerializersT> {
    return new Alphabetical_List_Of_ProductsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    Alphabetical_List_Of_Products<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      Alphabetical_List_Of_Products<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Alphabetical_List_Of_Products<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof Alphabetical_List_Of_Products,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Alphabetical_List_Of_Products,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_ID: OrderableEdmTypeField<
      Alphabetical_List_Of_Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      Alphabetical_List_Of_Products<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_ID: OrderableEdmTypeField<
      Alphabetical_List_Of_Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      Alphabetical_List_Of_Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    QUANTITY_PER_UNIT: OrderableEdmTypeField<
      Alphabetical_List_Of_Products<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      Alphabetical_List_Of_Products<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    UNITS_IN_STOCK: OrderableEdmTypeField<
      Alphabetical_List_Of_Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      true,
      true
    >;
    UNITS_ON_ORDER: OrderableEdmTypeField<
      Alphabetical_List_Of_Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      true,
      true
    >;
    REORDER_LEVEL: OrderableEdmTypeField<
      Alphabetical_List_Of_Products<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      true,
      true
    >;
    DISCONTINUED: OrderableEdmTypeField<
      Alphabetical_List_Of_Products<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      Alphabetical_List_Of_Products<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Alphabetical_List_Of_Products<DeSerializers>>;
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
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Alphabetical_List_Of_Products)
      };
    }

    return this._schema;
  }
}
