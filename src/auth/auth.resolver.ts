import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '../user/user.schema';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async register(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('email') email: string,
    @Args('phone') phone: string,
    @Args('password') password: string,
  ) {
    return this.authService.register({
      firstName,
      lastName,
      email,
      phone,
      password,
    });
  }

  @Mutation(() => AuthResponse)
  async login(
    @Args('phone') phone: string,
    @Args('password') password: string,
  ) {
    return this.authService.login(phone, password);
  }
}

import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class AuthResponse {
  @Field(() => User)
  user: User;

  @Field()
  access_token: string;
}
