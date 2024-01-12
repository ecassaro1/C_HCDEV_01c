/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Order_Details_Extendeds } from './Order_Details_Extendeds';
import { Order_Details_ExtendedsRequestBuilder } from './Order_Details_ExtendedsRequestBuilder';
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
export class Order_Details_ExtendedsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Order_Details_Extendeds<DeSerializersT>, DeSerializersT>
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
  ): Order_Details_ExtendedsApi<DeSerializersT> {
    return new Order_Details_ExtendedsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Order_Details_Extendeds;

  requestBuilder(): Order_Details_ExtendedsRequestBuilder<DeSerializersT> {
    return new Order_Details_ExtendedsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Order_Details_Extendeds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      Order_Details_Extendeds<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Order_Details_Extendeds<DeSerializersT>,
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
    typeof Order_Details_Extendeds,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Order_Details_Extendeds,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ORDER_ID: OrderableEdmTypeField<
      Order_Details_Extendeds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      Order_Details_Extendeds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      Order_Details_Extendeds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      Order_Details_Extendeds<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      Order_Details_Extendeds<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      false,
      true
    >;
    DISCOUNT: OrderableEdmTypeField<
      Order_Details_Extendeds<DeSerializers>,
      DeSerializersT,
      'Edm.Single',
      false,
      true
    >;
    EXTENDED_PRICE: OrderableEdmTypeField<
      Order_Details_Extendeds<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Order_Details_Extendeds<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link orderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ID: fieldBuilder.buildEdmTypeField('OrderID', 'Edm.Int32', false),
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
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Int16',
          false
        ),
        /**
         * Static representation of the {@link discount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT: fieldBuilder.buildEdmTypeField(
          'Discount',
          'Edm.Single',
          false
        ),
        /**
         * Static representation of the {@link extendedPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENDED_PRICE: fieldBuilder.buildEdmTypeField(
          'ExtendedPrice',
          'Edm.Decimal',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Order_Details_Extendeds)
      };
    }

    return this._schema;
  }
}
