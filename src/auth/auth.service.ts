import { BadRequestException, Injectable } from '@nestjs/common';
import { hash, verify } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/LoginDto';
import { RegisterDto } from './dto/RegisterDto';

@Injectable()
export class AuthService {
   
}
