import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardModule } from 'src/dashboard/dashboard.module';
import { MailService } from 'src/mail/mail.service';
import {
  WorkspaceToken,
  WorkspaceTokenSchema,
} from './schemas/workspace-token.schema';
import { Workspace, WorkspaceSchema } from './schemas/workspace.schema';
import { WorkspaceService } from './services/workspace.service';
import { WorkspaceController } from './workspace.controller';

@Module({
  providers: [WorkspaceService, MailService],
  exports: [WorkspaceService],
  controllers: [WorkspaceController],
  imports: [
    forwardRef(() => DashboardModule),
    MongooseModule.forFeature([
      { name: Workspace.name, schema: WorkspaceSchema },
      { name: WorkspaceToken.name, schema: WorkspaceTokenSchema },
    ]),
  ],
})
export class WorkspaceModule {}
