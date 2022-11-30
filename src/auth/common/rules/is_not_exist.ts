//判断在数据库中有没有用户已经注册
import { PrismaClient } from "@prisma/client";
import { registerDecorator,
        ValidationArguments,
      ValidationOptions} from 'class-validator'

export function IsNotExistRule(
    table:string,
    validationOptions?:ValidationOptions
){
    return function(object:Record<string,any>,propertyName:string){
         registerDecorator({
            name:'IsNotExistRule',
            target:object.constructor,
            propertyName:propertyName,
            constraints:[table],
            options:validationOptions,
            validator:{
                async validate(value:string,args:ValidationArguments){
                    const prisma=new PrismaClient()
                    const res=await prisma[table].findFirst({
                        where:{
                            [args.property]:value,
                        }
                    })
                    return !Boolean(res)
                }
            }
         })
    }
}