import { Module } from '@nestjs/common';
import { CheckStockDetailService } from './check-stock-detail.service';
import { CheckStockDetailController } from './check-stock-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckStockDetail } from './entities/check-stock-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CheckStockDetail])],
  controllers: [CheckStockDetailController],
  providers: [CheckStockDetailService],
})
export class CheckStockDetailModule {}
