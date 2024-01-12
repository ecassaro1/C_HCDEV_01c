/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Regions } from './Regions';
import { RegionsRequestBuilder } from './RegionsRequestBuilder';
import { TerritoriesApi } from './TerritoriesApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export declare class RegionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Regions<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): RegionsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [TerritoriesApi<DeSerializersT>]): this;
  entityConstructor: typeof Regions;
  requestBuilder(): RegionsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<Regions<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Regions<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Regions, DeSerializersT>;
  private _schema?;
  get schema(): {
    REGION_ID: OrderableEdmTypeField<
      Regions<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REGION_DESCRIPTION: OrderableEdmTypeField<
      Regions<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link territories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TERRITORIES: OneToManyLink<
      Regions<DeSerializersT>,
      DeSerializersT,
      TerritoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      Regions<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
