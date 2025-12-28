import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './creeate-user.dto';

export class PatchUserDto extends PartialType(CreateUserDto) {}
