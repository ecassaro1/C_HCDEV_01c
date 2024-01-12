/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Orders_Qries } from './Orders_Qries';
import { Orders_QriesRequestBuilder } from './Orders_QriesRequestBuilder';
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
export class Orders_QriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Orders_Qries<DeSerializersT>, DeSerializersT>
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
  ): Orders_QriesApi<DeSerializersT> {
    return new Orders_QriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Orders_Qries;

  requestBuilder(): Orders_QriesRequestBuilder<DeSerializersT> {
    return new Orders_QriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Orders_Qries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Orders_Qries<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Orders_Qries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Orders_Qries, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Orders_Qries, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ORDER_ID: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_ID: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_ID: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ORDER_DATE: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    REQUIRED_DATE: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SHIPPED_DATE: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SHIP_VIA: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FREIGHT: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SHIP_NAME: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_ADDRESS: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CITY: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_REGION: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_POSTAL_CODE: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_COUNTRY: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_NAME: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGION: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTAL_CODE: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      Orders_Qries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Orders_Qries<DeSerializers>>;
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
         * Static representation of the {@link customerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ID: fieldBuilder.buildEdmTypeField(
          'CustomerID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_ID: fieldBuilder.buildEdmTypeField(
          'EmployeeID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link orderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'OrderDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link requiredDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_DATE: fieldBuilder.buildEdmTypeField(
          'RequiredDate',
          'Edm.DateTimeOffset',
          true
        ),
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
         * Static representation of the {@link shipVia} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_VIA: fieldBuilder.buildEdmTypeField('ShipVia', 'Edm.Int32', true),
        /**
         * Static representation of the {@link freight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT: fieldBuilder.buildEdmTypeField('Freight', 'Edm.Decimal', true),
        /**
         * Static representation of the {@link shipName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_NAME: fieldBuilder.buildEdmTypeField(
          'ShipName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ShipAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CITY: fieldBuilder.buildEdmTypeField(
          'ShipCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_REGION: fieldBuilder.buildEdmTypeField(
          'ShipRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipPostalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'ShipPostalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_COUNTRY: fieldBuilder.buildEdmTypeField(
          'ShipCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link region} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
        /**
         * Static representation of the {@link postalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'PostalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Orders_Qries)
      };
    }

    return this._schema;
  }
}
