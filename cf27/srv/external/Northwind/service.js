"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.northwind = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CategoriesApi_1 = require("./CategoriesApi");
const CustomerDemographicsApi_1 = require("./CustomerDemographicsApi");
const CustomersApi_1 = require("./CustomersApi");
const EmployeesApi_1 = require("./EmployeesApi");
const Order_DetailsApi_1 = require("./Order_DetailsApi");
const OrdersApi_1 = require("./OrdersApi");
const ProductsApi_1 = require("./ProductsApi");
const RegionsApi_1 = require("./RegionsApi");
const ShippersApi_1 = require("./ShippersApi");
const SuppliersApi_1 = require("./SuppliersApi");
const TerritoriesApi_1 = require("./TerritoriesApi");
const Alphabetical_List_Of_ProductsApi_1 = require("./Alphabetical_List_Of_ProductsApi");
const Category_Sales_For_1997Api_1 = require("./Category_Sales_For_1997Api");
const Current_Product_ListsApi_1 = require("./Current_Product_ListsApi");
const Customer_And_Suppliers_By_CitiesApi_1 = require("./Customer_And_Suppliers_By_CitiesApi");
const InvoicesApi_1 = require("./InvoicesApi");
const Order_Details_ExtendedsApi_1 = require("./Order_Details_ExtendedsApi");
const Order_SubtotalsApi_1 = require("./Order_SubtotalsApi");
const Orders_QriesApi_1 = require("./Orders_QriesApi");
const Product_Sales_For_1997Api_1 = require("./Product_Sales_For_1997Api");
const Products_Above_Average_PricesApi_1 = require("./Products_Above_Average_PricesApi");
const Products_By_CategoriesApi_1 = require("./Products_By_CategoriesApi");
const Sales_By_CategoriesApi_1 = require("./Sales_By_CategoriesApi");
const Sales_Totals_By_AmountsApi_1 = require("./Sales_Totals_By_AmountsApi");
const Summary_Of_Sales_By_QuartersApi_1 = require("./Summary_Of_Sales_By_QuartersApi");
const Summary_Of_Sales_By_YearsApi_1 = require("./Summary_Of_Sales_By_YearsApi");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const BatchRequest_1 = require("./BatchRequest");
function northwind(deSerializers = odata_v4_1.defaultDeSerializers) {
    return new Northwind((0, odata_v4_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.northwind = northwind;
class Northwind {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get categoriesApi() {
        const api = this.initApi('categoriesApi', CategoriesApi_1.CategoriesApi);
        const linkedApis = [this.initApi('productsApi', ProductsApi_1.ProductsApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get customerDemographicsApi() {
        const api = this.initApi('customerDemographicsApi', CustomerDemographicsApi_1.CustomerDemographicsApi);
        const linkedApis = [this.initApi('customersApi', CustomersApi_1.CustomersApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get customersApi() {
        const api = this.initApi('customersApi', CustomersApi_1.CustomersApi);
        const linkedApis = [
            this.initApi('customerDemographicsApi', CustomerDemographicsApi_1.CustomerDemographicsApi),
            this.initApi('ordersApi', OrdersApi_1.OrdersApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get employeesApi() {
        const api = this.initApi('employeesApi', EmployeesApi_1.EmployeesApi);
        const linkedApis = [
            this.initApi('employeesApi', EmployeesApi_1.EmployeesApi),
            this.initApi('employeesApi', EmployeesApi_1.EmployeesApi),
            this.initApi('ordersApi', OrdersApi_1.OrdersApi),
            this.initApi('territoriesApi', TerritoriesApi_1.TerritoriesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get order_DetailsApi() {
        const api = this.initApi('order_DetailsApi', Order_DetailsApi_1.Order_DetailsApi);
        const linkedApis = [
            this.initApi('ordersApi', OrdersApi_1.OrdersApi),
            this.initApi('productsApi', ProductsApi_1.ProductsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get ordersApi() {
        const api = this.initApi('ordersApi', OrdersApi_1.OrdersApi);
        const linkedApis = [
            this.initApi('customersApi', CustomersApi_1.CustomersApi),
            this.initApi('employeesApi', EmployeesApi_1.EmployeesApi),
            this.initApi('order_DetailsApi', Order_DetailsApi_1.Order_DetailsApi),
            this.initApi('shippersApi', ShippersApi_1.ShippersApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productsApi() {
        const api = this.initApi('productsApi', ProductsApi_1.ProductsApi);
        const linkedApis = [
            this.initApi('categoriesApi', CategoriesApi_1.CategoriesApi),
            this.initApi('order_DetailsApi', Order_DetailsApi_1.Order_DetailsApi),
            this.initApi('suppliersApi', SuppliersApi_1.SuppliersApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get regionsApi() {
        const api = this.initApi('regionsApi', RegionsApi_1.RegionsApi);
        const linkedApis = [this.initApi('territoriesApi', TerritoriesApi_1.TerritoriesApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get shippersApi() {
        const api = this.initApi('shippersApi', ShippersApi_1.ShippersApi);
        const linkedApis = [this.initApi('ordersApi', OrdersApi_1.OrdersApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get suppliersApi() {
        const api = this.initApi('suppliersApi', SuppliersApi_1.SuppliersApi);
        const linkedApis = [this.initApi('productsApi', ProductsApi_1.ProductsApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get territoriesApi() {
        const api = this.initApi('territoriesApi', TerritoriesApi_1.TerritoriesApi);
        const linkedApis = [
            this.initApi('employeesApi', EmployeesApi_1.EmployeesApi),
            this.initApi('regionsApi', RegionsApi_1.RegionsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get alphabetical_List_Of_ProductsApi() {
        return this.initApi('alphabetical_List_Of_ProductsApi', Alphabetical_List_Of_ProductsApi_1.Alphabetical_List_Of_ProductsApi);
    }
    get category_Sales_For_1997Api() {
        return this.initApi('category_Sales_For_1997Api', Category_Sales_For_1997Api_1.Category_Sales_For_1997Api);
    }
    get current_Product_ListsApi() {
        return this.initApi('current_Product_ListsApi', Current_Product_ListsApi_1.Current_Product_ListsApi);
    }
    get customer_And_Suppliers_By_CitiesApi() {
        return this.initApi('customer_And_Suppliers_By_CitiesApi', Customer_And_Suppliers_By_CitiesApi_1.Customer_And_Suppliers_By_CitiesApi);
    }
    get invoicesApi() {
        return this.initApi('invoicesApi', InvoicesApi_1.InvoicesApi);
    }
    get order_Details_ExtendedsApi() {
        return this.initApi('order_Details_ExtendedsApi', Order_Details_ExtendedsApi_1.Order_Details_ExtendedsApi);
    }
    get order_SubtotalsApi() {
        return this.initApi('order_SubtotalsApi', Order_SubtotalsApi_1.Order_SubtotalsApi);
    }
    get orders_QriesApi() {
        return this.initApi('orders_QriesApi', Orders_QriesApi_1.Orders_QriesApi);
    }
    get product_Sales_For_1997Api() {
        return this.initApi('product_Sales_For_1997Api', Product_Sales_For_1997Api_1.Product_Sales_For_1997Api);
    }
    get products_Above_Average_PricesApi() {
        return this.initApi('products_Above_Average_PricesApi', Products_Above_Average_PricesApi_1.Products_Above_Average_PricesApi);
    }
    get products_By_CategoriesApi() {
        return this.initApi('products_By_CategoriesApi', Products_By_CategoriesApi_1.Products_By_CategoriesApi);
    }
    get sales_By_CategoriesApi() {
        return this.initApi('sales_By_CategoriesApi', Sales_By_CategoriesApi_1.Sales_By_CategoriesApi);
    }
    get sales_Totals_By_AmountsApi() {
        return this.initApi('sales_Totals_By_AmountsApi', Sales_Totals_By_AmountsApi_1.Sales_Totals_By_AmountsApi);
    }
    get summary_Of_Sales_By_QuartersApi() {
        return this.initApi('summary_Of_Sales_By_QuartersApi', Summary_Of_Sales_By_QuartersApi_1.Summary_Of_Sales_By_QuartersApi);
    }
    get summary_Of_Sales_By_YearsApi() {
        return this.initApi('summary_Of_Sales_By_YearsApi', Summary_Of_Sales_By_YearsApi_1.Summary_Of_Sales_By_YearsApi);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map