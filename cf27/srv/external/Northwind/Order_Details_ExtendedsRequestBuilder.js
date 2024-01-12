"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_Details_ExtendedsRequestBuilder = void 0;
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Order_Details_Extendeds_1 = require("./Order_Details_Extendeds");
/**
 * Request builder class for operations supported on the {@link Order_Details_Extendeds} entity.
 */
class Order_Details_ExtendedsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Order_Details_Extendeds` entities.
     * @returns A request builder for creating requests to retrieve all `Order_Details_Extendeds` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Order_Details_Extendeds` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Order_Details_Extendeds`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Order_Details_Extendeds` entity based on its keys.
     * @param discount Key property. See {@link Order_Details_Extendeds.discount}.
     * @param orderId Key property. See {@link Order_Details_Extendeds.orderId}.
     * @param productId Key property. See {@link Order_Details_Extendeds.productId}.
     * @param productName Key property. See {@link Order_Details_Extendeds.productName}.
     * @param quantity Key property. See {@link Order_Details_Extendeds.quantity}.
     * @param unitPrice Key property. See {@link Order_Details_Extendeds.unitPrice}.
     * @returns A request builder for creating requests to retrieve one `Order_Details_Extendeds` entity based on its keys.
     */
    getByKey(discount, orderId, productId, productName, quantity, unitPrice) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Discount: discount,
            OrderID: orderId,
            ProductID: productId,
            ProductName: productName,
            Quantity: quantity,
            UnitPrice: unitPrice
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Order_Details_Extendeds`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Order_Details_Extendeds`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(discountOrEntity, orderId, productId, productName, quantity, unitPrice) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, discountOrEntity instanceof Order_Details_Extendeds_1.Order_Details_Extendeds
            ? discountOrEntity
            : {
                Discount: discountOrEntity,
                OrderID: orderId,
                ProductID: productId,
                ProductName: productName,
                Quantity: quantity,
                UnitPrice: unitPrice
            });
    }
}
exports.Order_Details_ExtendedsRequestBuilder = Order_Details_ExtendedsRequestBuilder;
//# sourceMappingURL=Order_Details_ExtendedsRequestBuilder.js.map