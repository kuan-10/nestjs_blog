import { IsNotEmpty } from "class-validator"

export class CreateArticleDto {
    @IsNotEmpty({message:"内容不可为空"})
    title:string
    @IsNotEmpty({message:"内容不可为空"})
     content:string
     @IsNotEmpty({message:"请选择栏目"})
     categoryId:number
}
