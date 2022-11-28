import {IsNotEmpty} from 'class-validator'
export default  class CreateArticleDto{
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
   password:string
}