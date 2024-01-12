/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerDemographics } from './CustomerDemographics';
import { CustomerDemographicsRequestBuilder } from './CustomerDemographicsRequestBuilder';
import { CustomersApi } from './CustomersApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export declare class CustomerDemographicsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerDemographics<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): CustomerDemographicsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [CustomersApi<DeSerializersT>]): this;
  entityConstructor: typeof CustomerDemographics;
  requestBuilder(): CustomerDemographicsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    CustomerDemographics<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    CustomerDemographics<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof CustomerDemographics, DeSerializersT>;
  private _schema?;
  get schema(): {
    CUSTOMER_TYPE_ID: OrderableEdmTypeField<
      CustomerDemographics<
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
    CUSTOMER_DESC: OrderableEdmTypeField<
      CustomerDemographics<
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
    /**
     * Static representation of the one-to-many navigation property {@link customers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMERS: OneToManyLink<
      CustomerDemographics<DeSerializersT>,
      DeSerializersT,
      CustomersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      CustomerDemographics<
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
