/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Territories } from './Territories';
import { TerritoriesRequestBuilder } from './TerritoriesRequestBuilder';
import { EmployeesApi } from './EmployeesApi';
import { RegionsApi } from './RegionsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TerritoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Territories<DeSerializersT>, DeSerializersT>
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
  ): TerritoriesApi<DeSerializersT> {
    return new TerritoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link region} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGION: OneToOneLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      RegionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EmployeesApi<DeSerializersT>, RegionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYEES: new OneToManyLink('Employees', this, linkedApis[0]),
      REGION: new OneToOneLink('Region', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = Territories;

  requestBuilder(): TerritoriesRequestBuilder<DeSerializersT> {
    return new TerritoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Territories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Territories<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Territories<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Territories, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Territories, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TERRITORY_ID: OrderableEdmTypeField<
      Territories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERRITORY_DESCRIPTION: OrderableEdmTypeField<
      Territories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGION_ID: OrderableEdmTypeField<
      Territories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link region} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGION: OneToOneLink<
      Territories<DeSerializersT>,
      DeSerializersT,
      RegionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Territories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link territoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERRITORY_ID: fieldBuilder.buildEdmTypeField(
          'TerritoryID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link territoryDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERRITORY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TerritoryDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link regionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION_ID: fieldBuilder.buildEdmTypeField(
          'RegionID',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Territories)
      };
    }

    return this._schema;
  }
}
