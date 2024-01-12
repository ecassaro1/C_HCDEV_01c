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
import type { TerritoriesApi } from './TerritoriesApi';
import { Employees, EmployeesType } from './Employees';
import { Regions, RegionsType } from './Regions';
/**
 * This class represents the entity "Territories" of service "Northwind".
 */
export declare class Territories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TerritoriesType<T>
{
  /**
   * Technical entity name for Territories.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Territories entity
   */
  static _keys: string[];
  /**
   * Territory Id.
   * Maximum length: 20.
   */
  territoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Territory Description.
   * Maximum length: 50.
   */
  territoryDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Region Id.
   */
  regionId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link Employees} entity.
   */
  employees: Employees<T>[];
  /**
   * One-to-one navigation property to the {@link Regions} entity.
   */
  region?: Regions<T> | null;
  constructor(_entityApi: TerritoriesApi<T>);
}
export interface TerritoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  territoryId: DeserializedType<T, 'Edm.String'>;
  territoryDescription: DeserializedType<T, 'Edm.String'>;
  regionId: DeserializedType<T, 'Edm.Int32'>;
  employees: EmployeesType<T>[];
  region?: RegionsType<T> | null;
}
