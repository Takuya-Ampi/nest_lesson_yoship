import {IsString, MinLength, MaxLength} from 'class-validator'


export class CreateUserDto {
  // strictモードだと初期化を明示しないといけないので!をつける
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly username!:string
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  readonly password!:string
}
