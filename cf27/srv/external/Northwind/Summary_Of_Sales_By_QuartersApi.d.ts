/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Summary_Of_Sales_By_Quarters } from './Summary_Of_Sales_By_Quarters';
import { Summary_Of_Sales_By_QuartersRequestBuilder } from './Summary_Of_Sales_By_QuartersRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export declare class Summary_Of_Sales_By_QuartersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<Summary_Of_Sales_By_Quarters<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): Summary_Of_Sales_By_QuartersApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof Summary_Of_Sales_By_Quarters;
  requestBuilder(): Summary_Of_Sales_By_QuartersRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Summary_Of_Sales_By_Quarters<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    Summary_Of_Sales_By_Quarters<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof Summary_Of_Sales_By_Quarters,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    SHIPPED_DATE: OrderableEdmTypeField<
      Summary_Of_Sales_By_Quarters<
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
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ORDER_ID: OrderableEdmTypeField<
      Summary_Of_Sales_By_Quarters<
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
    SUBTOTAL: OrderableEdmTypeField<
      Summary_Of_Sales_By_Quarters<
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
    ALL_FIELDS: AllFields<
      Summary_Of_Sales_By_Quarters<
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
