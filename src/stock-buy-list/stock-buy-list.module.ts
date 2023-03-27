import { Module } from '@nestjs/common';
import { StockBuyListService } from './stock-buy-list.service';
import { StockBuyListController } from './stock-buy-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockBuyList } from './entities/stock-buy-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockBuyList])],
  controllers: [StockBuyListController],
  providers: [StockBuyListService],
})
export class StockBuyListModule {}
