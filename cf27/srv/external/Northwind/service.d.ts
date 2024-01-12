/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CategoriesApi } from './CategoriesApi';
import { CustomerDemographicsApi } from './CustomerDemographicsApi';
import { CustomersApi } from './CustomersApi';
import { EmployeesApi } from './EmployeesApi';
import { Order_DetailsApi } from './Order_DetailsApi';
import { OrdersApi } from './OrdersApi';
import { ProductsApi } from './ProductsApi';
import { RegionsApi } from './RegionsApi';
import { ShippersApi } from './ShippersApi';
import { SuppliersApi } from './SuppliersApi';
import { TerritoriesApi } from './TerritoriesApi';
import { Alphabetical_List_Of_ProductsApi } from './Alphabetical_List_Of_ProductsApi';
import { Category_Sales_For_1997Api } from './Category_Sales_For_1997Api';
import { Current_Product_ListsApi } from './Current_Product_ListsApi';
import { Customer_And_Suppliers_By_CitiesApi } from './Customer_And_Suppliers_By_CitiesApi';
import { InvoicesApi } from './InvoicesApi';
import { Order_Details_ExtendedsApi } from './Order_Details_ExtendedsApi';
import { Order_SubtotalsApi } from './Order_SubtotalsApi';
import { Orders_QriesApi } from './Orders_QriesApi';
import { Product_Sales_For_1997Api } from './Product_Sales_For_1997Api';
import { Products_Above_Average_PricesApi } from './Products_Above_Average_PricesApi';
import { Products_By_CategoriesApi } from './Products_By_CategoriesApi';
import { Sales_By_CategoriesApi } from './Sales_By_CategoriesApi';
import { Sales_Totals_By_AmountsApi } from './Sales_Totals_By_AmountsApi';
import { Summary_Of_Sales_By_QuartersApi } from './Summary_Of_Sales_By_QuartersApi';
import { Summary_Of_Sales_By_YearsApi } from './Summary_Of_Sales_By_YearsApi';
import { BigNumber } from 'bignumber.js';
import { Moment, Duration } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';
export declare function northwind<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateT = Moment,
  DurationT = Duration,
  TimeOfDayT = Time,
  EnumT = any
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateT,
      DurationT,
      TimeOfDayT,
      EnumT
    >
  >
): Northwind<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateT,
    DurationT,
    TimeOfDayT,
    EnumT
  >
>;
declare class Northwind<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get categoriesApi(): CategoriesApi<DeSerializersT>;
  get customerDemographicsApi(): CustomerDemographicsApi<DeSerializersT>;
  get customersApi(): CustomersApi<DeSerializersT>;
  get employeesApi(): EmployeesApi<DeSerializersT>;
  get order_DetailsApi(): Order_DetailsApi<DeSerializersT>;
  get ordersApi(): OrdersApi<DeSerializersT>;
  get productsApi(): ProductsApi<DeSerializersT>;
  get regionsApi(): RegionsApi<DeSerializersT>;
  get shippersApi(): ShippersApi<DeSerializersT>;
  get suppliersApi(): SuppliersApi<DeSerializersT>;
  get territoriesApi(): TerritoriesApi<DeSerializersT>;
  get alphabetical_List_Of_ProductsApi(): Alphabetical_List_Of_ProductsApi<DeSerializersT>;
  get category_Sales_For_1997Api(): Category_Sales_For_1997Api<DeSerializersT>;
  get current_Product_ListsApi(): Current_Product_ListsApi<DeSerializersT>;
  get customer_And_Suppliers_By_CitiesApi(): Customer_And_Suppliers_By_CitiesApi<DeSerializersT>;
  get invoicesApi(): InvoicesApi<DeSerializersT>;
  get order_Details_ExtendedsApi(): Order_Details_ExtendedsApi<DeSerializersT>;
  get order_SubtotalsApi(): Order_SubtotalsApi<DeSerializersT>;
  get orders_QriesApi(): Orders_QriesApi<DeSerializersT>;
  get product_Sales_For_1997Api(): Product_Sales_For_1997Api<DeSerializersT>;
  get products_Above_Average_PricesApi(): Products_Above_Average_PricesApi<DeSerializersT>;
  get products_By_CategoriesApi(): Products_By_CategoriesApi<DeSerializersT>;
  get sales_By_CategoriesApi(): Sales_By_CategoriesApi<DeSerializersT>;
  get sales_Totals_By_AmountsApi(): Sales_Totals_By_AmountsApi<DeSerializersT>;
  get summary_Of_Sales_By_QuartersApi(): Summary_Of_Sales_By_QuartersApi<DeSerializersT>;
  get summary_Of_Sales_By_YearsApi(): Summary_Of_Sales_By_YearsApi<DeSerializersT>;
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
