import { AddPreAuthorization } from "./addpreauthorization";
import { EFlag } from "./eflag";

export class PreAuthorization extends AddPreAuthorization
{
  public AuthID: number;
  public CreateTimeDate: Date;
  public CreateAccDate: Date;
  public Flag: EFlag;
  
}
