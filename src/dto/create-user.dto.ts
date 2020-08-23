export class CreateUserDto {
  // strictモードだと初期化を明示しないといけないので!をつける
  readonly username!:string
  readonly password!:string
}
