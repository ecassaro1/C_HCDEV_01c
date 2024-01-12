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
export class Territories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TerritoriesType<T>
{
  /**
   * Technical entity name for Territories.
   */
  static _entityName = 'Territories';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Territories entity
   */
  static _keys = ['TerritoryID'];
  /**
   * Territory Id.
   * Maximum length: 20.
   */
  declare territoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Territory Description.
   * Maximum length: 50.
   */
  declare territoryDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Region Id.
   */
  declare regionId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link Employees} entity.
   */
  declare employees: Employees<T>[];
  /**
   * One-to-one navigation property to the {@link Regions} entity.
   */
  declare region?: Regions<T> | null;

  constructor(_entityApi: TerritoriesApi<T>) {
    super(_entityApi);
  }
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
