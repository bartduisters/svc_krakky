import { IsDefined, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteListDTO {
  @ApiProperty({ required: true })
  @IsString()
  @IsDefined()
  board_id: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsDefined()
  _id: string;
}
