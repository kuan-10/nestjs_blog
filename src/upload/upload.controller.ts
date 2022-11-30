import { Controller, Get, Post, UploadedFile } from '@nestjs/common';
import { Image } from './upload';

@Controller('upload')
export class UploadController {
    @Get()
    imagge(){
        return "DIODHJiohasdfi"
    }
    @Post('image')
    @Image()
    image(@UploadedFile() image:any){
        return image
    }
}
