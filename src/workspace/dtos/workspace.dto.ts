import {
  IsArray,
  IsDefined,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MemberDTO } from './member.dto';
import { ApiProperty } from '@nestjs/swagger';
export class WorkspaceDTO {
  @ApiProperty({ required: true })
  @IsString()
  @IsDefined()
  created_by: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsDefined()
  @Length(4, 20)
  workspace: string;

  @ApiProperty({ required: false, default: [], isArray: true })
  @IsOptional()
  @IsArray()
  @Type(() => MemberDTO)
  team: Array<MemberDTO>;
}