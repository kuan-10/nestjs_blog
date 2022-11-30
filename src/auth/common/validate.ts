import { HttpException, HttpStatus, ValidationError, ValidationPipe } from "@nestjs/common";

export default class Validate extends ValidationPipe{
    protected flattenValidationErrors
    (validationErrors: ValidationError[]): string[] {
       const errors={}
       validationErrors.forEach((error)=>{
        errors[error.property]=Object.values(error.constraints)[0]
       })
       throw new HttpException({
        code:422,
        messages:errors
       },HttpStatus.UNPROCESSABLE_ENTITY)
    }
}