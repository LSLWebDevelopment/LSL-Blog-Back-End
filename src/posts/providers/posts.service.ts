import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from 'src/users/dtos/get-users-param.dto';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public findAll(userId: number) {
    const user = this.usersService.findOneById(userId);
    return [
      {
        user,
        title: 'Test Title 1',
        content: 'Test Content 1',
      },
      {
        user,
        title: 'Test Title 2',
        content: 'Test Content 2',
      },
    ];
  }
}
