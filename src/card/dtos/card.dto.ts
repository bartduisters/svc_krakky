import {
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CardDTO {
  @ApiProperty({ required: true })
  @IsString()
  @IsDefined()
  board_id: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsDefined()
  @Length(1, 20)
  title: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  content: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsDefined()
  list_id: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsDefined()
  created_by: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsDefined()
  created_at: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsDefined()
  index: number;

  @ApiProperty({ required: true })
  @IsString()
  @IsDefined()
  color: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  priority: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsDefined()
  assignees: Array<string>;
}