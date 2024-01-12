/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  Categories,
  CustomerDemographics,
  Customers,
  Employees,
  Order_Details,
  Orders,
  Products,
  Regions,
  Shippers,
  Suppliers,
  Territories,
  Alphabetical_List_Of_Products,
  Category_Sales_For_1997,
  Current_Product_Lists,
  Customer_And_Suppliers_By_Cities,
  Invoices,
  Order_Details_Extendeds,
  Order_Subtotals,
  Orders_Qries,
  Product_Sales_For_1997,
  Products_Above_Average_Prices,
  Products_By_Categories,
  Sales_By_Categories,
  Sales_Totals_By_Amounts,
  Summary_Of_Sales_By_Quarters,
  Summary_Of_Sales_By_Years
} from './index';

/**
 * Batch builder for operations supported on the Northwind.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    ReadNorthwindRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    ReadNorthwindRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadNorthwindRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadNorthwindRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    ReadNorthwindRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultNorthwindPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Northwind.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteNorthwindRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteNorthwindRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteNorthwindRequestBuilder<DeSerializersT>
    | Array<WriteNorthwindRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteNorthwindRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultNorthwindPath = '/V4/Northwind/Northwind.svc';
export type ReadNorthwindRequestBuilder<DeSerializersT extends DeSerializers> =
  | GetAllRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerDemographics<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Customers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Employees<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Order_Details<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Orders<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Regions<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Shippers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Territories<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      Alphabetical_List_Of_Products<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      Category_Sales_For_1997<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Current_Product_Lists<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      Customer_And_Suppliers_By_Cities<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Invoices<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      Order_Details_Extendeds<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Order_Subtotals<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Orders_Qries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Product_Sales_For_1997<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      Products_Above_Average_Prices<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Products_By_Categories<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Sales_By_Categories<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      Sales_Totals_By_Amounts<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      Summary_Of_Sales_By_Quarters<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      Summary_Of_Sales_By_Years<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CustomerDemographics<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Customers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Employees<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Order_Details<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Orders<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Products<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Regions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Shippers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Territories<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      Alphabetical_List_Of_Products<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      Category_Sales_For_1997<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      Current_Product_Lists<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      Customer_And_Suppliers_By_Cities<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Invoices<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      Order_Details_Extendeds<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Order_Subtotals<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Orders_Qries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      Product_Sales_For_1997<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      Products_Above_Average_Prices<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      Products_By_Categories<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Sales_By_Categories<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      Sales_Totals_By_Amounts<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      Summary_Of_Sales_By_Quarters<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      Summary_Of_Sales_By_Years<DeSerializersT>,
      DeSerializersT
    >;
export type WriteNorthwindRequestBuilder<DeSerializersT extends DeSerializers> =

    | CreateRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Categories<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<CustomerDemographics<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<CustomerDemographics<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<CustomerDemographics<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<Customers<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Customers<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Customers<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<Employees<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Employees<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Employees<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<Order_Details<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Order_Details<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Order_Details<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<Orders<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Orders<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Orders<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<Products<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Products<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Products<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<Regions<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Regions<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Regions<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<Shippers<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Shippers<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Shippers<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Suppliers<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<Territories<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Territories<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Territories<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<
        Alphabetical_List_Of_Products<DeSerializersT>,
        DeSerializersT
      >
    | UpdateRequestBuilder<
        Alphabetical_List_Of_Products<DeSerializersT>,
        DeSerializersT
      >
    | DeleteRequestBuilder<
        Alphabetical_List_Of_Products<DeSerializersT>,
        DeSerializersT
      >
    | CreateRequestBuilder<
        Category_Sales_For_1997<DeSerializersT>,
        DeSerializersT
      >
    | UpdateRequestBuilder<
        Category_Sales_For_1997<DeSerializersT>,
        DeSerializersT
      >
    | DeleteRequestBuilder<
        Category_Sales_For_1997<DeSerializersT>,
        DeSerializersT
      >
    | CreateRequestBuilder<
        Current_Product_Lists<DeSerializersT>,
        DeSerializersT
      >
    | UpdateRequestBuilder<
        Current_Product_Lists<DeSerializersT>,
        DeSerializersT
      >
    | DeleteRequestBuilder<
        Current_Product_Lists<DeSerializersT>,
        DeSerializersT
      >
    | CreateRequestBuilder<
        Customer_And_Suppliers_By_Cities<DeSerializersT>,
        DeSerializersT
      >
    | UpdateRequestBuilder<
        Customer_And_Suppliers_By_Cities<DeSerializersT>,
        DeSerializersT
      >
    | DeleteRequestBuilder<
        Customer_And_Suppliers_By_Cities<DeSerializersT>,
        DeSerializersT
      >
    | CreateRequestBuilder<Invoices<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Invoices<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Invoices<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<
        Order_Details_Extendeds<DeSerializersT>,
        DeSerializersT
      >
    | UpdateRequestBuilder<
        Order_Details_Extendeds<DeSerializersT>,
        DeSerializersT
      >
    | DeleteRequestBuilder<
        Order_Details_Extendeds<DeSerializersT>,
        DeSerializersT
      >
    | CreateRequestBuilder<Order_Subtotals<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Order_Subtotals<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Order_Subtotals<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<Orders_Qries<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Orders_Qries<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Orders_Qries<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<
        Product_Sales_For_1997<DeSerializersT>,
        DeSerializersT
      >
    | UpdateRequestBuilder<
        Product_Sales_For_1997<DeSerializersT>,
        DeSerializersT
      >
    | DeleteRequestBuilder<
        Product_Sales_For_1997<DeSerializersT>,
        DeSerializersT
      >
    | CreateRequestBuilder<
        Products_Above_Average_Prices<DeSerializersT>,
        DeSerializersT
      >
    | UpdateRequestBuilder<
        Products_Above_Average_Prices<DeSerializersT>,
        DeSerializersT
      >
    | DeleteRequestBuilder<
        Products_Above_Average_Prices<DeSerializersT>,
        DeSerializersT
      >
    | CreateRequestBuilder<
        Products_By_Categories<DeSerializersT>,
        DeSerializersT
      >
    | UpdateRequestBuilder<
        Products_By_Categories<DeSerializersT>,
        DeSerializersT
      >
    | DeleteRequestBuilder<
        Products_By_Categories<DeSerializersT>,
        DeSerializersT
      >
    | CreateRequestBuilder<Sales_By_Categories<DeSerializersT>, DeSerializersT>
    | UpdateRequestBuilder<Sales_By_Categories<DeSerializersT>, DeSerializersT>
    | DeleteRequestBuilder<Sales_By_Categories<DeSerializersT>, DeSerializersT>
    | CreateRequestBuilder<
        Sales_Totals_By_Amounts<DeSerializersT>,
        DeSerializersT
      >
    | UpdateRequestBuilder<
        Sales_Totals_By_Amounts<DeSerializersT>,
        DeSerializersT
      >
    | DeleteRequestBuilder<
        Sales_Totals_By_Amounts<DeSerializersT>,
        DeSerializersT
      >
    | CreateRequestBuilder<
        Summary_Of_Sales_By_Quarters<DeSerializersT>,
        DeSerializersT
      >
    | UpdateRequestBuilder<
        Summary_Of_Sales_By_Quarters<DeSerializersT>,
        DeSerializersT
      >
    | DeleteRequestBuilder<
        Summary_Of_Sales_By_Quarters<DeSerializersT>,
        DeSerializersT
      >
    | CreateRequestBuilder<
        Summary_Of_Sales_By_Years<DeSerializersT>,
        DeSerializersT
      >
    | UpdateRequestBuilder<
        Summary_Of_Sales_By_Years<DeSerializersT>,
        DeSerializersT
      >
    | DeleteRequestBuilder<
        Summary_Of_Sales_By_Years<DeSerializersT>,
        DeSerializersT
      >;
