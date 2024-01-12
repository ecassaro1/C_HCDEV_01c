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
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';

export function northwind<
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
  deSerializers: Partial<
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
  > = defaultDeSerializers as any
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
> {
  return new Northwind(mergeDefaultDeSerializersWith(deSerializers));
}
class Northwind<DeSerializersT extends DeSerializers = DefaultDeSerializers> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get categoriesApi(): CategoriesApi<DeSerializersT> {
    const api = this.initApi('categoriesApi', CategoriesApi);
    const linkedApis = [this.initApi('productsApi', ProductsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get customerDemographicsApi(): CustomerDemographicsApi<DeSerializersT> {
    const api = this.initApi(
      'customerDemographicsApi',
      CustomerDemographicsApi
    );
    const linkedApis = [this.initApi('customersApi', CustomersApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get customersApi(): CustomersApi<DeSerializersT> {
    const api = this.initApi('customersApi', CustomersApi);
    const linkedApis = [
      this.initApi('customerDemographicsApi', CustomerDemographicsApi),
      this.initApi('ordersApi', OrdersApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get employeesApi(): EmployeesApi<DeSerializersT> {
    const api = this.initApi('employeesApi', EmployeesApi);
    const linkedApis = [
      this.initApi('employeesApi', EmployeesApi),
      this.initApi('employeesApi', EmployeesApi),
      this.initApi('ordersApi', OrdersApi),
      this.initApi('territoriesApi', TerritoriesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get order_DetailsApi(): Order_DetailsApi<DeSerializersT> {
    const api = this.initApi('order_DetailsApi', Order_DetailsApi);
    const linkedApis = [
      this.initApi('ordersApi', OrdersApi),
      this.initApi('productsApi', ProductsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get ordersApi(): OrdersApi<DeSerializersT> {
    const api = this.initApi('ordersApi', OrdersApi);
    const linkedApis = [
      this.initApi('customersApi', CustomersApi),
      this.initApi('employeesApi', EmployeesApi),
      this.initApi('order_DetailsApi', Order_DetailsApi),
      this.initApi('shippersApi', ShippersApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productsApi(): ProductsApi<DeSerializersT> {
    const api = this.initApi('productsApi', ProductsApi);
    const linkedApis = [
      this.initApi('categoriesApi', CategoriesApi),
      this.initApi('order_DetailsApi', Order_DetailsApi),
      this.initApi('suppliersApi', SuppliersApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get regionsApi(): RegionsApi<DeSerializersT> {
    const api = this.initApi('regionsApi', RegionsApi);
    const linkedApis = [this.initApi('territoriesApi', TerritoriesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get shippersApi(): ShippersApi<DeSerializersT> {
    const api = this.initApi('shippersApi', ShippersApi);
    const linkedApis = [this.initApi('ordersApi', OrdersApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get suppliersApi(): SuppliersApi<DeSerializersT> {
    const api = this.initApi('suppliersApi', SuppliersApi);
    const linkedApis = [this.initApi('productsApi', ProductsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get territoriesApi(): TerritoriesApi<DeSerializersT> {
    const api = this.initApi('territoriesApi', TerritoriesApi);
    const linkedApis = [
      this.initApi('employeesApi', EmployeesApi),
      this.initApi('regionsApi', RegionsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get alphabetical_List_Of_ProductsApi(): Alphabetical_List_Of_ProductsApi<DeSerializersT> {
    return this.initApi(
      'alphabetical_List_Of_ProductsApi',
      Alphabetical_List_Of_ProductsApi
    );
  }

  get category_Sales_For_1997Api(): Category_Sales_For_1997Api<DeSerializersT> {
    return this.initApi(
      'category_Sales_For_1997Api',
      Category_Sales_For_1997Api
    );
  }

  get current_Product_ListsApi(): Current_Product_ListsApi<DeSerializersT> {
    return this.initApi('current_Product_ListsApi', Current_Product_ListsApi);
  }

  get customer_And_Suppliers_By_CitiesApi(): Customer_And_Suppliers_By_CitiesApi<DeSerializersT> {
    return this.initApi(
      'customer_And_Suppliers_By_CitiesApi',
      Customer_And_Suppliers_By_CitiesApi
    );
  }

  get invoicesApi(): InvoicesApi<DeSerializersT> {
    return this.initApi('invoicesApi', InvoicesApi);
  }

  get order_Details_ExtendedsApi(): Order_Details_ExtendedsApi<DeSerializersT> {
    return this.initApi(
      'order_Details_ExtendedsApi',
      Order_Details_ExtendedsApi
    );
  }

  get order_SubtotalsApi(): Order_SubtotalsApi<DeSerializersT> {
    return this.initApi('order_SubtotalsApi', Order_SubtotalsApi);
  }

  get orders_QriesApi(): Orders_QriesApi<DeSerializersT> {
    return this.initApi('orders_QriesApi', Orders_QriesApi);
  }

  get product_Sales_For_1997Api(): Product_Sales_For_1997Api<DeSerializersT> {
    return this.initApi('product_Sales_For_1997Api', Product_Sales_For_1997Api);
  }

  get products_Above_Average_PricesApi(): Products_Above_Average_PricesApi<DeSerializersT> {
    return this.initApi(
      'products_Above_Average_PricesApi',
      Products_Above_Average_PricesApi
    );
  }

  get products_By_CategoriesApi(): Products_By_CategoriesApi<DeSerializersT> {
    return this.initApi('products_By_CategoriesApi', Products_By_CategoriesApi);
  }

  get sales_By_CategoriesApi(): Sales_By_CategoriesApi<DeSerializersT> {
    return this.initApi('sales_By_CategoriesApi', Sales_By_CategoriesApi);
  }

  get sales_Totals_By_AmountsApi(): Sales_Totals_By_AmountsApi<DeSerializersT> {
    return this.initApi(
      'sales_Totals_By_AmountsApi',
      Sales_Totals_By_AmountsApi
    );
  }

  get summary_Of_Sales_By_QuartersApi(): Summary_Of_Sales_By_QuartersApi<DeSerializersT> {
    return this.initApi(
      'summary_Of_Sales_By_QuartersApi',
      Summary_Of_Sales_By_QuartersApi
    );
  }

  get summary_Of_Sales_By_YearsApi(): Summary_Of_Sales_By_YearsApi<DeSerializersT> {
    return this.initApi(
      'summary_Of_Sales_By_YearsApi',
      Summary_Of_Sales_By_YearsApi
    );
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
