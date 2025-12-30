import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 *
 * Class to connect to Users table and perfom business operations
 */
@Injectable()
export class UsersService {
  /**
   * The constructor of the class with one Dependency Injection of the authService
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * The method to get all the users from the database
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    return [
      {
        firstName: 'Gabi',
        email: 'gabi@gmail.com',
      },
      {
        firstName: 'Elenita',
        email: 'eleninat.gmail.com',
      },
    ];
  }

  /**
   *
   * Find a single user using the ID of the user
   */
  public findOneById(id: number) {
    return {
      id: 1234,
      firstName: 'Tatinha',
      email: 'tatinha@gmail.com',
    };
  }
}
