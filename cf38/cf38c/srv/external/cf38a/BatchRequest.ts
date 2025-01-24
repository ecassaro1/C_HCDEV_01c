/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import { Books } from './index';

/**
 * Batch builder for operations supported on the Cf38A.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    ReadCf38ARequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    ReadCf38ARequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadCf38ARequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        ReadCf38ARequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    ReadCf38ARequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultCf38APath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Cf38A.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteCf38ARequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteCf38ARequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteCf38ARequestBuilder<DeSerializersT>
    | Array<WriteCf38ARequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteCf38ARequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultCf38APath = '/odata/v4/catalog';
export type ReadCf38ARequestBuilder<DeSerializersT extends DeSerializers> =
  | GetAllRequestBuilder<Books<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Books<DeSerializersT>, DeSerializersT>;
export type WriteCf38ARequestBuilder<DeSerializersT extends DeSerializers> =
  | CreateRequestBuilder<Books<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Books<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Books<DeSerializersT>, DeSerializersT>;
