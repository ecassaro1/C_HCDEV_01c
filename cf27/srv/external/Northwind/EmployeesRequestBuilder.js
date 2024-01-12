"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const Employees_1 = require("./Employees");
/**
 * Request builder class for operations supported on the {@link Employees} entity.
 */
class EmployeesRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Employees` entities.
     * @returns A request builder for creating requests to retrieve all `Employees` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Employees` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Employees`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Employees` entity based on its keys.
     * @param employeeId Key property. See {@link Employees.employeeId}.
     * @returns A request builder for creating requests to retrieve one `Employees` entity based on its keys.
     */
    getByKey(employeeId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeID: employeeId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Employees`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Employees`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(employeeIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, employeeIdOrEntity instanceof Employees_1.Employees
            ? employeeIdOrEntity
            : { EmployeeID: employeeIdOrEntity });
    }
}
exports.EmployeesRequestBuilder = EmployeesRequestBuilder;
//# sourceMappingURL=EmployeesRequestBuilder.js.map