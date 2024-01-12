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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CustomerDemographicsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerDemographics<DeSerializersT>, DeSerializersT>
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
  ): CustomerDemographicsApi<DeSerializersT> {
    return new CustomerDemographicsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link customers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMERS: OneToManyLink<
      CustomerDemographics<DeSerializersT>,
      DeSerializersT,
      CustomersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CustomersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      CUSTOMERS: new OneToManyLink('Customers', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = CustomerDemographics;

  requestBuilder(): CustomerDemographicsRequestBuilder<DeSerializersT> {
    return new CustomerDemographicsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerDemographics<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomerDemographics<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerDemographics<DeSerializersT>,
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
    typeof CustomerDemographics,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerDemographics,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CUSTOMER_TYPE_ID: OrderableEdmTypeField<
      CustomerDemographics<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_DESC: OrderableEdmTypeField<
      CustomerDemographics<DeSerializers>,
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
    ALL_FIELDS: AllFields<CustomerDemographics<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link customerTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CustomerTypeID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DESC: fieldBuilder.buildEdmTypeField(
          'CustomerDesc',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerDemographics)
      };
    }

    return this._schema;
  }
}
