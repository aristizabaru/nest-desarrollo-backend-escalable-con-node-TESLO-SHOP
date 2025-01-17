import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Headers,
  SetMetadata,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IncomingHttpHeaders } from 'http';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';
import { RawHeaders } from './decorators/get-headers.decorator';
import { UserRoleGuard } from './guards/user-role.guard';
import {
  META_ROLES,
  RoleProtected,
} from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces/valid-roles.interface';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.authenticate(loginUserDto);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(@GetUser() user: User) {
    return this.authService.checkAuthStatus(user);
  }

  @Get('private')
  // La metadata adiciona los roles en la Request
  @SetMetadata(META_ROLES, ['admin', 'super-user'])
  // Los Guards validan la autenticación y la autorización (UserRoleGuard)
  @UseGuards(AuthGuard(), UserRoleGuard)
  testingPrivateRout(
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    @RawHeaders() rawHeaders: string[],
    @Headers() headers: IncomingHttpHeaders,
  ) {
    return { user, userEmail, rawHeaders, headers };
  }

  @Get('private2')
  // El custom decorator adiciona la metadata y los roles en la Request
  @RoleProtected(ValidRoles.SUPER_USER, ValidRoles.ADMIN)
  // Los Guards validan la autenticación y la autorización (UserRoleGuard)
  @UseGuards(AuthGuard(), UserRoleGuard)
  testingPrivateRout2(@GetUser() user: User) {
    return { user };
  }

  @Get('private3')
  // El custom decorator valida la autenticación y autorización
  @Auth(ValidRoles.ADMIN)
  testingPrivateRout3(@GetUser() user: User) {
    return { user };
  }
}
