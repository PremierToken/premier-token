/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from "ethers";
import {Listener, Provider} from "ethers/providers";
import {Arrayish, BigNumber, BigNumberish, Interface} from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface AdminRoleInterface extends Interface {
  functions: {
    addAdmin: TypedFunctionDescription<{encode([account]: [string]): string}>;

    admins: TypedFunctionDescription<{encode([]: []): string}>;

    isAdmin: TypedFunctionDescription<{encode([account]: [string]): string}>;

    isOwner: TypedFunctionDescription<{encode([]: []): string}>;

    owner: TypedFunctionDescription<{encode([]: []): string}>;

    removeAdmin: TypedFunctionDescription<{
      encode([account]: [string]): string;
    }>;
  };

  events: {
    AdminAdded: TypedEventDescription<{
      encodeTopics([account]: [string | null]): string[];
    }>;

    AdminRemoved: TypedEventDescription<{
      encodeTopics([account]: [string | null]): string[];
    }>;
  };
}

export class AdminRole extends Contract {
  connect(signerOrProvider: Signer | Provider | string): AdminRole;
  attach(addressOrName: string): AdminRole;
  deployed(): Promise<AdminRole>;

  on(event: EventFilter | string, listener: Listener): AdminRole;
  once(event: EventFilter | string, listener: Listener): AdminRole;
  addListener(eventName: EventFilter | string, listener: Listener): AdminRole;
  removeAllListeners(eventName: EventFilter | string): AdminRole;
  removeListener(eventName: any, listener: Listener): AdminRole;

  interface: AdminRoleInterface;

  functions: {
    addAdmin(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    admins(): Promise<string[]>;

    isAdmin(account: string): Promise<boolean>;

    isOwner(): Promise<boolean>;

    owner(): Promise<string>;

    removeAdmin(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  addAdmin(
    account: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  admins(): Promise<string[]>;

  isAdmin(account: string): Promise<boolean>;

  isOwner(): Promise<boolean>;

  owner(): Promise<string>;

  removeAdmin(
    account: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    AdminAdded(account: string | null): EventFilter;

    AdminRemoved(account: string | null): EventFilter;
  };

  estimate: {
    addAdmin(account: string): Promise<BigNumber>;

    admins(): Promise<BigNumber>;

    isAdmin(account: string): Promise<BigNumber>;

    isOwner(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    removeAdmin(account: string): Promise<BigNumber>;
  };
}
