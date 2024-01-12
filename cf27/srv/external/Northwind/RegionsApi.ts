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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RegionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Regions<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): RegionsApi<DeSerializersT> {
    return new RegionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link territories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TERRITORIES: OneToManyLink<
      Regions<DeSerializersT>,
      DeSerializersT,
      TerritoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [TerritoriesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TERRITORIES: new OneToManyLink('Territories', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Regions;

  requestBuilder(): RegionsRequestBuilder<DeSerializersT> {
    return new RegionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Regions<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Regions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Regions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Regions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Regions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGION_ID: OrderableEdmTypeField<
      Regions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REGION_DESCRIPTION: OrderableEdmTypeField<
      Regions<DeSerializers>,
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
    ALL_FIELDS: AllFields<Regions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link regionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION_ID: fieldBuilder.buildEdmTypeField(
          'RegionID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link regionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RegionDescription',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Regions)
      };
    }

    return this._schema;
  }
}
