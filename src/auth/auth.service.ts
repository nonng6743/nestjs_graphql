import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserDocument } from '../user/user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(createUserInput: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  }) {
    try {
      const user = await this.userService.create(createUserInput);
      const payload = { sub: user._id, email: user.email };
      return {
        user,
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Email or phone already exists');
      }
      throw error;
    }
  }

  async login(phone: string, password: string) {
    const user = await this.userService.findByPhone(phone);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user._id, email: user.email };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(phone: string, password: string): Promise<any> {
    const user = await this.userService.findByPhone(phone);
    if (user && await bcrypt.compare(password, user.password)) {
      const userDoc = user as UserDocument;
      const { password: _, ...result } = userDoc.toObject();
      return result;
    }
    return null;
  }
}
