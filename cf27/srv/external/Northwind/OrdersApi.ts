/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Orders } from './Orders';
import { OrdersRequestBuilder } from './OrdersRequestBuilder';
import { CustomersApi } from './CustomersApi';
import { EmployeesApi } from './EmployeesApi';
import { Order_DetailsApi } from './Order_DetailsApi';
import { ShippersApi } from './ShippersApi';
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
export class OrdersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Orders<DeSerializersT>, DeSerializersT>
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
  ): OrdersApi<DeSerializersT> {
    return new OrdersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      CustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orderDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDER_DETAILS: OneToManyLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      Order_DetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipper} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPER: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      ShippersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CustomersApi<DeSerializersT>,
      EmployeesApi<DeSerializersT>,
      Order_DetailsApi<DeSerializersT>,
      ShippersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER: new OneToOneLink('Customer', this, linkedApis[0]),
      EMPLOYEE: new OneToOneLink('Employee', this, linkedApis[1]),
      ORDER_DETAILS: new OneToManyLink('Order_Details', this, linkedApis[2]),
      SHIPPER: new OneToOneLink('Shipper', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = Orders;

  requestBuilder(): OrdersRequestBuilder<DeSerializersT> {
    return new OrdersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Orders<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Orders<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Orders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Orders, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Orders, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ORDER_ID: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_ID: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_ID: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ORDER_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    REQUIRED_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SHIPPED_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SHIP_VIA: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FREIGHT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SHIP_NAME: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_ADDRESS: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CITY: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_REGION: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_POSTAL_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_COUNTRY: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      CustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orderDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDER_DETAILS: OneToManyLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      Order_DetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipper} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPER: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      ShippersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Orders<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Orders)
      };
    }

    return this._schema;
  }
}
