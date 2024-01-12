"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesRequestBuilder = void 0;
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Invoices_1 = require("./Invoices");
/**
 * Request builder class for operations supported on the {@link Invoices} entity.
 */
class InvoicesRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Invoices` entities.
     * @returns A request builder for creating requests to retrieve all `Invoices` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Invoices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Invoices`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Invoices` entity based on its keys.
     * @param customerName Key property. See {@link Invoices.customerName}.
     * @param discount Key property. See {@link Invoices.discount}.
     * @param orderId Key property. See {@link Invoices.orderId}.
     * @param productId Key property. See {@link Invoices.productId}.
     * @param productName Key property. See {@link Invoices.productName}.
     * @param quantity Key property. See {@link Invoices.quantity}.
     * @param salesperson Key property. See {@link Invoices.salesperson}.
     * @param shipperName Key property. See {@link Invoices.shipperName}.
     * @param unitPrice Key property. See {@link Invoices.unitPrice}.
     * @returns A request builder for creating requests to retrieve one `Invoices` entity based on its keys.
     */
    getByKey(customerName, discount, orderId, productId, productName, quantity, salesperson, shipperName, unitPrice) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            CustomerName: customerName,
            Discount: discount,
            OrderID: orderId,
            ProductID: productId,
            ProductName: productName,
            Quantity: quantity,
            Salesperson: salesperson,
            ShipperName: shipperName,
            UnitPrice: unitPrice
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Invoices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Invoices`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(customerNameOrEntity, discount, orderId, productId, productName, quantity, salesperson, shipperName, unitPrice) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, customerNameOrEntity instanceof Invoices_1.Invoices
            ? customerNameOrEntity
            : {
                CustomerName: customerNameOrEntity,
                Discount: discount,
                OrderID: orderId,
                ProductID: productId,
                ProductName: productName,
                Quantity: quantity,
                Salesperson: salesperson,
                ShipperName: shipperName,
                UnitPrice: unitPrice
            });
    }
}
exports.InvoicesRequestBuilder = InvoicesRequestBuilder;
//# sourceMappingURL=InvoicesRequestBuilder.js.map