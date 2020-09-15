import * as jspb from "google-protobuf"

export class SubscriptionPlanInput extends jspb.Message {
  getName(): string;
  setName(value: string): SubscriptionPlanInput;

  getCode(): string;
  setCode(value: string): SubscriptionPlanInput;

  getDescription(): string;
  setDescription(value: string): SubscriptionPlanInput;

  getPrice(): number;
  setPrice(value: number): SubscriptionPlanInput;

  getExtraFee(): number;
  setExtraFee(value: number): SubscriptionPlanInput;

  getInvoicePeriod(): number;
  setInvoicePeriod(value: number): SubscriptionPlanInput;

  getInvoiceDuration(): SubscriptionPlanInput.SubscriptionDuration;
  setInvoiceDuration(value: SubscriptionPlanInput.SubscriptionDuration): SubscriptionPlanInput;

  getTrailPeriod(): number;
  setTrailPeriod(value: number): SubscriptionPlanInput;

  getTrailDuration(): SubscriptionPlanInput.SubscriptionDuration;
  setTrailDuration(value: SubscriptionPlanInput.SubscriptionDuration): SubscriptionPlanInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionPlanInput.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionPlanInput): SubscriptionPlanInput.AsObject;
  static serializeBinaryToWriter(message: SubscriptionPlanInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionPlanInput;
  static deserializeBinaryFromReader(message: SubscriptionPlanInput, reader: jspb.BinaryReader): SubscriptionPlanInput;
}

export namespace SubscriptionPlanInput {
  export type AsObject = {
    name: string,
    code: string,
    description: string,
    price: number,
    extraFee: number,
    invoicePeriod: number,
    invoiceDuration: SubscriptionPlanInput.SubscriptionDuration,
    trailPeriod: number,
    trailDuration: SubscriptionPlanInput.SubscriptionDuration,
  }

  export enum SubscriptionDuration { 
    DAY = 0,
    WEEK = 1,
    MONTH = 2,
    YEAR = 3,
  }
}

export class SubscriptionPlan extends jspb.Message {
  getId(): string;
  setId(value: string): SubscriptionPlan;

  getName(): string;
  setName(value: string): SubscriptionPlan;

  getCode(): string;
  setCode(value: string): SubscriptionPlan;

  getSlug(): string;
  setSlug(value: string): SubscriptionPlan;

  getDescription(): string;
  setDescription(value: string): SubscriptionPlan;

  getPrice(): number;
  setPrice(value: number): SubscriptionPlan;

  getExtraFee(): number;
  setExtraFee(value: number): SubscriptionPlan;

  getInvoicePeriod(): number;
  setInvoicePeriod(value: number): SubscriptionPlan;

  getInvoiceDuration(): string;
  setInvoiceDuration(value: string): SubscriptionPlan;

  getTrailPeriod(): number;
  setTrailPeriod(value: number): SubscriptionPlan;

  getTrailDuration(): string;
  setTrailDuration(value: string): SubscriptionPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionPlan.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionPlan): SubscriptionPlan.AsObject;
  static serializeBinaryToWriter(message: SubscriptionPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionPlan;
  static deserializeBinaryFromReader(message: SubscriptionPlan, reader: jspb.BinaryReader): SubscriptionPlan;
}

export namespace SubscriptionPlan {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    slug: string,
    description: string,
    price: number,
    extraFee: number,
    invoicePeriod: number,
    invoiceDuration: string,
    trailPeriod: number,
    trailDuration: string,
  }
}

export class DeleteSubscriptionPlanResponse extends jspb.Message {
  getModified(): number;
  setModified(value: number): DeleteSubscriptionPlanResponse;

  getEdgesList(): Array<SubscriptionPlan>;
  setEdgesList(value: Array<SubscriptionPlan>): DeleteSubscriptionPlanResponse;
  clearEdgesList(): DeleteSubscriptionPlanResponse;
  addEdges(value?: SubscriptionPlan, index?: number): SubscriptionPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSubscriptionPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSubscriptionPlanResponse): DeleteSubscriptionPlanResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSubscriptionPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSubscriptionPlanResponse;
  static deserializeBinaryFromReader(message: DeleteSubscriptionPlanResponse, reader: jspb.BinaryReader): DeleteSubscriptionPlanResponse;
}

export namespace DeleteSubscriptionPlanResponse {
  export type AsObject = {
    modified: number,
    edgesList: Array<SubscriptionPlan.AsObject>,
  }
}

export class UpdateSubscriptionPlanRequest extends jspb.Message {
  getPayload(): SubscriptionPlanInput | undefined;
  setPayload(value?: SubscriptionPlanInput): UpdateSubscriptionPlanRequest;
  hasPayload(): boolean;
  clearPayload(): UpdateSubscriptionPlanRequest;

  getWhere(): SubscriptionPlanFilter | undefined;
  setWhere(value?: SubscriptionPlanFilter): UpdateSubscriptionPlanRequest;
  hasWhere(): boolean;
  clearWhere(): UpdateSubscriptionPlanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSubscriptionPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSubscriptionPlanRequest): UpdateSubscriptionPlanRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSubscriptionPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSubscriptionPlanRequest;
  static deserializeBinaryFromReader(message: UpdateSubscriptionPlanRequest, reader: jspb.BinaryReader): UpdateSubscriptionPlanRequest;
}

export namespace UpdateSubscriptionPlanRequest {
  export type AsObject = {
    payload?: SubscriptionPlanInput.AsObject,
    where?: SubscriptionPlanFilter.AsObject,
  }
}

export class UpdateSubscriptionPlanResponse extends jspb.Message {
  getModified(): number;
  setModified(value: number): UpdateSubscriptionPlanResponse;

  getEdgesList(): Array<SubscriptionPlan>;
  setEdgesList(value: Array<SubscriptionPlan>): UpdateSubscriptionPlanResponse;
  clearEdgesList(): UpdateSubscriptionPlanResponse;
  addEdges(value?: SubscriptionPlan, index?: number): SubscriptionPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSubscriptionPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSubscriptionPlanResponse): UpdateSubscriptionPlanResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateSubscriptionPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSubscriptionPlanResponse;
  static deserializeBinaryFromReader(message: UpdateSubscriptionPlanResponse, reader: jspb.BinaryReader): UpdateSubscriptionPlanResponse;
}

export namespace UpdateSubscriptionPlanResponse {
  export type AsObject = {
    modified: number,
    edgesList: Array<SubscriptionPlan.AsObject>,
  }
}

export class SubscriptionPlanResponse extends jspb.Message {
  getPageInfo(): number;
  setPageInfo(value: number): SubscriptionPlanResponse;

  getEdgesList(): Array<SubscriptionPlan>;
  setEdgesList(value: Array<SubscriptionPlan>): SubscriptionPlanResponse;
  clearEdgesList(): SubscriptionPlanResponse;
  addEdges(value?: SubscriptionPlan, index?: number): SubscriptionPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionPlanResponse): SubscriptionPlanResponse.AsObject;
  static serializeBinaryToWriter(message: SubscriptionPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionPlanResponse;
  static deserializeBinaryFromReader(message: SubscriptionPlanResponse, reader: jspb.BinaryReader): SubscriptionPlanResponse;
}

export namespace SubscriptionPlanResponse {
  export type AsObject = {
    pageInfo: number,
    edgesList: Array<SubscriptionPlan.AsObject>,
  }
}

export class Pagination extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): Pagination;

  getHasMore(): boolean;
  setHasMore(value: boolean): Pagination;

  getLimit(): number;
  setLimit(value: number): Pagination;

  getSkip(): number;
  setSkip(value: number): Pagination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    total: number,
    hasMore: boolean,
    limit: number,
    skip: number,
  }
}

export class SubscriptionPlanFilter extends jspb.Message {
  getId(): string;
  setId(value: string): SubscriptionPlanFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionPlanFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionPlanFilter): SubscriptionPlanFilter.AsObject;
  static serializeBinaryToWriter(message: SubscriptionPlanFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionPlanFilter;
  static deserializeBinaryFromReader(message: SubscriptionPlanFilter, reader: jspb.BinaryReader): SubscriptionPlanFilter;
}

export namespace SubscriptionPlanFilter {
  export type AsObject = {
    id: string,
  }
}

