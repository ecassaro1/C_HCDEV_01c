/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Products_By_Categories } from './Products_By_Categories';
import { Products_By_CategoriesRequestBuilder } from './Products_By_CategoriesRequestBuilder';
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
export class Products_By_CategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Products_By_Categories<DeSerializersT>, DeSerializersT>
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
  ): Products_By_CategoriesApi<DeSerializersT> {
    return new Products_By_CategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Products_By_Categories;

  requestBuilder(): Products_By_CategoriesRequestBuilder<DeSerializersT> {
    return new Products_By_CategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Products_By_Categories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      Products_By_Categories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Products_By_Categories<DeSerializersT>,
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
    typeof Products_By_Categories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Products_By_Categories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATEGORY_NAME: OrderableEdmTypeField<
      Products_By_Categories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      Products_By_Categories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUANTITY_PER_UNIT: OrderableEdmTypeField<
      Products_By_Categories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNITS_IN_STOCK: OrderableEdmTypeField<
      Products_By_Categories<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      true,
      true
    >;
    DISCONTINUED: OrderableEdmTypeField<
      Products_By_Categories<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Products_By_Categories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
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
         * Static representation of the {@link quantityPerUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_PER_UNIT: fieldBuilder.buildEdmTypeField(
          'QuantityPerUnit',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', Products_By_Categories)
      };
    }

    return this._schema;
  }
}
