import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';
import * as Joi from '@hapi/joi';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    PostsModule,
    DatabaseModule,
    UsersModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [UsersService, AuthenticationService],
})
export class AppModule {}
