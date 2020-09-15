/**
 * @fileoverview gRPC-Web generated client stub for rpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as rpc_subscription_plan_pb from './subscription_plan_pb';

import {Empty} from './rpc_pb';

export class SubscriptionPlanServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoFindAll = new grpcWeb.AbstractClientBase.MethodInfo(
    rpc_subscription_plan_pb.SubscriptionPlanResponse,
    (request: Empty) => {
      return request.serializeBinary();
    },
    rpc_subscription_plan_pb.SubscriptionPlanResponse.deserializeBinary
  );

  findAll(
    request: Empty,
    metadata: grpcWeb.Metadata | null): Promise<rpc_subscription_plan_pb.SubscriptionPlanResponse>;

  findAll(
    request: Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: rpc_subscription_plan_pb.SubscriptionPlanResponse) => void): grpcWeb.ClientReadableStream<rpc_subscription_plan_pb.SubscriptionPlanResponse>;

  findAll(
    request: Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: rpc_subscription_plan_pb.SubscriptionPlanResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/rpc.SubscriptionPlanService/FindAll', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoFindAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rpc.SubscriptionPlanService/FindAll',
    request,
    metadata || {},
    this.methodInfoFindAll);
  }

  methodInfoFindOne = new grpcWeb.AbstractClientBase.MethodInfo(
    rpc_subscription_plan_pb.SubscriptionPlan,
    (request: rpc_subscription_plan_pb.SubscriptionPlanFilter) => {
      return request.serializeBinary();
    },
    rpc_subscription_plan_pb.SubscriptionPlan.deserializeBinary
  );

  findOne(
    request: rpc_subscription_plan_pb.SubscriptionPlanFilter,
    metadata: grpcWeb.Metadata | null): Promise<rpc_subscription_plan_pb.SubscriptionPlan>;

  findOne(
    request: rpc_subscription_plan_pb.SubscriptionPlanFilter,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: rpc_subscription_plan_pb.SubscriptionPlan) => void): grpcWeb.ClientReadableStream<rpc_subscription_plan_pb.SubscriptionPlan>;

  findOne(
    request: rpc_subscription_plan_pb.SubscriptionPlanFilter,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: rpc_subscription_plan_pb.SubscriptionPlan) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/rpc.SubscriptionPlanService/FindOne', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoFindOne,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rpc.SubscriptionPlanService/FindOne',
    request,
    metadata || {},
    this.methodInfoFindOne);
  }

  methodInfoCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    rpc_subscription_plan_pb.SubscriptionPlan,
    (request: rpc_subscription_plan_pb.SubscriptionPlanInput) => {
      return request.serializeBinary();
    },
    rpc_subscription_plan_pb.SubscriptionPlan.deserializeBinary
  );

  create(
    request: rpc_subscription_plan_pb.SubscriptionPlanInput,
    metadata: grpcWeb.Metadata | null): Promise<rpc_subscription_plan_pb.SubscriptionPlan>;

  create(
    request: rpc_subscription_plan_pb.SubscriptionPlanInput,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: rpc_subscription_plan_pb.SubscriptionPlan) => void): grpcWeb.ClientReadableStream<rpc_subscription_plan_pb.SubscriptionPlan>;

  create(
    request: rpc_subscription_plan_pb.SubscriptionPlanInput,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: rpc_subscription_plan_pb.SubscriptionPlan) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/rpc.SubscriptionPlanService/Create', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rpc.SubscriptionPlanService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    rpc_subscription_plan_pb.UpdateSubscriptionPlanResponse,
    (request: rpc_subscription_plan_pb.UpdateSubscriptionPlanRequest) => {
      return request.serializeBinary();
    },
    rpc_subscription_plan_pb.UpdateSubscriptionPlanResponse.deserializeBinary
  );

  update(
    request: rpc_subscription_plan_pb.UpdateSubscriptionPlanRequest,
    metadata: grpcWeb.Metadata | null): Promise<rpc_subscription_plan_pb.UpdateSubscriptionPlanResponse>;

  update(
    request: rpc_subscription_plan_pb.UpdateSubscriptionPlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: rpc_subscription_plan_pb.UpdateSubscriptionPlanResponse) => void): grpcWeb.ClientReadableStream<rpc_subscription_plan_pb.UpdateSubscriptionPlanResponse>;

  update(
    request: rpc_subscription_plan_pb.UpdateSubscriptionPlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: rpc_subscription_plan_pb.UpdateSubscriptionPlanResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/rpc.SubscriptionPlanService/Update', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rpc.SubscriptionPlanService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    rpc_subscription_plan_pb.DeleteSubscriptionPlanResponse,
    (request: rpc_subscription_plan_pb.SubscriptionPlanFilter) => {
      return request.serializeBinary();
    },
    rpc_subscription_plan_pb.DeleteSubscriptionPlanResponse.deserializeBinary
  );

  delete(
    request: rpc_subscription_plan_pb.SubscriptionPlanFilter,
    metadata: grpcWeb.Metadata | null): Promise<rpc_subscription_plan_pb.DeleteSubscriptionPlanResponse>;

  delete(
    request: rpc_subscription_plan_pb.SubscriptionPlanFilter,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: rpc_subscription_plan_pb.DeleteSubscriptionPlanResponse) => void): grpcWeb.ClientReadableStream<rpc_subscription_plan_pb.DeleteSubscriptionPlanResponse>;

  delete(
    request: rpc_subscription_plan_pb.SubscriptionPlanFilter,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: rpc_subscription_plan_pb.DeleteSubscriptionPlanResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/rpc.SubscriptionPlanService/Delete', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rpc.SubscriptionPlanService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

}

