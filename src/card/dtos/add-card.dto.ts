import { IsDefined, IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Colors } from '../../shared/enums/color.enum';
export class AddCardDTO {
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

  @ApiProperty({ required: false, enum: Colors })
  @IsString()
  @IsOptional()
  color: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  priority: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  assignees: Array<string>;
}
