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
export declare class Employees<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeesType<T>
{
  /**
   * Technical entity name for Employees.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Employees entity
   */
  static _keys: string[];
  /**
   * Employee Id.
   */
  employeeId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Last Name.
   * Maximum length: 20.
   */
  lastName: DeserializedType<T, 'Edm.String'>;
  /**
   * First Name.
   * Maximum length: 10.
   */
  firstName: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   * Maximum length: 30.
   * @nullable
   */
  title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title Of Courtesy.
   * Maximum length: 25.
   * @nullable
   */
  titleOfCourtesy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Date.
   * @nullable
   */
  birthDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Hire Date.
   * @nullable
   */
  hireDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Address.
   * Maximum length: 60.
   * @nullable
   */
  address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * Maximum length: 15.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region.
   * Maximum length: 15.
   * @nullable
   */
  region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * Maximum length: 15.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Phone.
   * Maximum length: 24.
   * @nullable
   */
  homePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Extension.
   * Maximum length: 4.
   * @nullable
   */
  extension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Photo.
   * Maximum length: max.
   * @nullable
   */
  photo?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Notes.
   * Maximum length: max.
   * @nullable
   */
  notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reports To.
   * @nullable
   */
  reportsTo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Photo Path.
   * Maximum length: 255.
   * @nullable
   */
  photoPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Employees} entity.
   */
  employees1: Employees<T>[];
  /**
   * One-to-one navigation property to the {@link Employees} entity.
   */
  employee1?: Employees<T> | null;
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  orders: Orders<T>[];
  /**
   * One-to-many navigation property to the {@link Territories} entity.
   */
  territories: Territories<T>[];
  constructor(_entityApi: EmployeesApi<T>);
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
