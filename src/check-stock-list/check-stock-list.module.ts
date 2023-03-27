import { Module } from '@nestjs/common';
import { CheckStockListService } from './check-stock-list.service';
import { CheckStockListController } from './check-stock-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckStockList } from './entities/check-stock-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CheckStockList])],
  controllers: [CheckStockListController],
  providers: [CheckStockListService],
})
export class CheckStockListModule {}
