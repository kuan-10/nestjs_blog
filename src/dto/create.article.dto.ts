import {IsNotEmpty} from 'class-validator'
export default  class CreateArticleDto{
    @IsNotEmpty()
    title:string
    @IsNotEmpty()
    content:string
}