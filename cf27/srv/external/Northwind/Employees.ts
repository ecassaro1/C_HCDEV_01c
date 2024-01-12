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
import type { EmployeesApi } from './EmployeesApi';
import { Orders, OrdersType } from './Orders';
import { Territories, TerritoriesType } from './Territories';

/**
 * This class represents the entity "Employees" of service "Northwind".
 */
export class Employees<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeesType<T>
{
  /**
   * Technical entity name for Employees.
   */
  static _entityName = 'Employees';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Employees entity
   */
  static _keys = ['EmployeeID'];
  /**
   * Employee Id.
   */
  declare employeeId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Last Name.
   * Maximum length: 20.
   */
  declare lastName: DeserializedType<T, 'Edm.String'>;
  /**
   * First Name.
   * Maximum length: 10.
   */
  declare firstName: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   * Maximum length: 30.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title Of Courtesy.
   * Maximum length: 25.
   * @nullable
   */
  declare titleOfCourtesy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Date.
   * @nullable
   */
  declare birthDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Hire Date.
   * @nullable
   */
  declare hireDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Address.
   * Maximum length: 60.
   * @nullable
   */
  declare address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * Maximum length: 15.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region.
   * Maximum length: 15.
   * @nullable
   */
  declare region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  declare postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * Maximum length: 15.
   * @nullable
   */
  declare country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Phone.
   * Maximum length: 24.
   * @nullable
   */
  declare homePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Extension.
   * Maximum length: 4.
   * @nullable
   */
  declare extension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Photo.
   * Maximum length: max.
   * @nullable
   */
  declare photo?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Notes.
   * Maximum length: max.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reports To.
   * @nullable
   */
  declare reportsTo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Photo Path.
   * Maximum length: 255.
   * @nullable
   */
  declare photoPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Employees} entity.
   */
  declare employees1: Employees<T>[];
  /**
   * One-to-one navigation property to the {@link Employees} entity.
   */
  declare employee1?: Employees<T> | null;
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  declare orders: Orders<T>[];
  /**
   * One-to-many navigation property to the {@link Territories} entity.
   */
  declare territories: Territories<T>[];

  constructor(_entityApi: EmployeesApi<T>) {
    super(_entityApi);
  }
}

export interface EmployeesType<T extends DeSerializers = DefaultDeSerializers> {
  employeeId: DeserializedType<T, 'Edm.Int32'>;
  lastName: DeserializedType<T, 'Edm.String'>;
  firstName: DeserializedType<T, 'Edm.String'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  titleOfCourtesy?: DeserializedType<T, 'Edm.String'> | null;
  birthDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  hireDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  region?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  homePhone?: DeserializedType<T, 'Edm.String'> | null;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  photo?: DeserializedType<T, 'Edm.Binary'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  reportsTo?: DeserializedType<T, 'Edm.Int32'> | null;
  photoPath?: DeserializedType<T, 'Edm.String'> | null;
  employees1: EmployeesType<T>[];
  employee1?: EmployeesType<T> | null;
  orders: OrdersType<T>[];
  territories: TerritoriesType<T>[];
}
