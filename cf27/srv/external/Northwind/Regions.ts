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
import type { RegionsApi } from './RegionsApi';
import { Territories, TerritoriesType } from './Territories';

/**
 * This class represents the entity "Regions" of service "Northwind".
 */
export class Regions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RegionsType<T>
{
  /**
   * Technical entity name for Regions.
   */
  static _entityName = 'Regions';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/V4/Northwind/Northwind.svc';
  /**
   * All key fields of the Regions entity
   */
  static _keys = ['RegionID'];
  /**
   * Region Id.
   */
  declare regionId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Region Description.
   * Maximum length: 50.
   */
  declare regionDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link Territories} entity.
   */
  declare territories: Territories<T>[];

  constructor(_entityApi: RegionsApi<T>) {
    super(_entityApi);
  }
}

export interface RegionsType<T extends DeSerializers = DefaultDeSerializers> {
  regionId: DeserializedType<T, 'Edm.Int32'>;
  regionDescription: DeserializedType<T, 'Edm.String'>;
  territories: TerritoriesType<T>[];
}
