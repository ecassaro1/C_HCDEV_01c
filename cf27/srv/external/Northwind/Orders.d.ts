/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { OrdersApi } from './OrdersApi';
import { Customers, CustomersType } from './Customers';
import { Employees, EmployeesType } from './Employees';
import { Order_Details, Order_DetailsType } from './Order_Details';
import { Shippers, ShippersType } from './Shippers';
/**
 * This class represents the entity "Orders" of service "Northwind".
 */
export declare class Orders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OrdersType<T>
{
  /**
   * Technical entity name for Orders.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Orders entity
   */
  static _keys: string[];
  /**
   * Order Id.
   */
  orderId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer Id.
   * Maximum length: 5.
   * @nullable
   */
  customerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Order Date.
   * @nullable
   */
  orderDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Required Date.
   * @nullable
   */
  requiredDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Shipped Date.
   * @nullable
   */
  shippedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Ship Via.
   * @nullable
   */
  shipVia?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Freight.
   * @nullable
   */
  freight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Ship Name.
   * Maximum length: 40.
   * @nullable
   */
  shipName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Address.
   * Maximum length: 60.
   * @nullable
   */
  shipAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship City.
   * Maximum length: 15.
   * @nullable
   */
  shipCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Region.
   * Maximum length: 15.
   * @nullable
   */
  shipRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  shipPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Country.
   * Maximum length: 15.
   * @nullable
   */
  shipCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Customers} entity.
   */
  customer?: Customers<T> | null;
  /**
   * One-to-one navigation property to the {@link Employees} entity.
   */
  employee?: Employees<T> | null;
  /**
   * One-to-many navigation property to the {@link Order_Details} entity.
   */
  orderDetails: Order_Details<T>[];
  /**
   * One-to-one navigation property to the {@link Shippers} entity.
   */
  shipper?: Shippers<T> | null;
  constructor(_entityApi: OrdersApi<T>);
}
export interface OrdersType<T extends DeSerializers = DefaultDeSerializers> {
  orderId: DeserializedType<T, 'Edm.Int32'>;
  customerId?: DeserializedType<T, 'Edm.String'> | null;
  employeeId?: DeserializedType<T, 'Edm.Int32'> | null;
  orderDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  requiredDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  shippedDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  shipVia?: DeserializedType<T, 'Edm.Int32'> | null;
  freight?: DeserializedType<T, 'Edm.Decimal'> | null;
  shipName?: DeserializedType<T, 'Edm.String'> | null;
  shipAddress?: DeserializedType<T, 'Edm.String'> | null;
  shipCity?: DeserializedType<T, 'Edm.String'> | null;
  shipRegion?: DeserializedType<T, 'Edm.String'> | null;
  shipPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  shipCountry?: DeserializedType<T, 'Edm.String'> | null;
  customer?: CustomersType<T> | null;
  employee?: EmployeesType<T> | null;
  orderDetails: Order_DetailsType<T>[];
  shipper?: ShippersType<T> | null;
}
