import { AddCorpContract } from "./addcorpcontract";
import { EContractState } from "./econtractstate";

export class CorpContract extends AddCorpContract {
  public ContractID:number;
  public CreateTime:Date;
  public State: EContractState ;
}
