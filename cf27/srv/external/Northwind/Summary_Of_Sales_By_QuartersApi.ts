/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Summary_Of_Sales_By_Quarters } from './Summary_Of_Sales_By_Quarters';
import { Summary_Of_Sales_By_QuartersRequestBuilder } from './Summary_Of_Sales_By_QuartersRequestBuilder';
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
export class Summary_Of_Sales_By_QuartersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<Summary_Of_Sales_By_Quarters<DeSerializersT>, DeSerializersT>
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
  ): Summary_Of_Sales_By_QuartersApi<DeSerializersT> {
    return new Summary_Of_Sales_By_QuartersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Summary_Of_Sales_By_Quarters;

  requestBuilder(): Summary_Of_Sales_By_QuartersRequestBuilder<DeSerializersT> {
    return new Summary_Of_Sales_By_QuartersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Summary_Of_Sales_By_Quarters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      Summary_Of_Sales_By_Quarters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Summary_Of_Sales_By_Quarters<DeSerializersT>,
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
    typeof Summary_Of_Sales_By_Quarters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Summary_Of_Sales_By_Quarters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SHIPPED_DATE: OrderableEdmTypeField<
      Summary_Of_Sales_By_Quarters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ORDER_ID: OrderableEdmTypeField<
      Summary_Of_Sales_By_Quarters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUBTOTAL: OrderableEdmTypeField<
      Summary_Of_Sales_By_Quarters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Summary_Of_Sales_By_Quarters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link shippedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_DATE: fieldBuilder.buildEdmTypeField(
          'ShippedDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link orderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ID: fieldBuilder.buildEdmTypeField('OrderID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link subtotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL: fieldBuilder.buildEdmTypeField(
          'Subtotal',
          'Edm.Decimal',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Summary_Of_Sales_By_Quarters)
      };
    }

    return this._schema;
  }
}
