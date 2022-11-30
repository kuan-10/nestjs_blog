import { IsNotEmpty } from "class-validator";

export class CreateCatrgoryDto {
   @IsNotEmpty({message:"栏目标题不能为空"})
    title:string

}
