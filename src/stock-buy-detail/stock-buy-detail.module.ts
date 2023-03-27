import { Module } from '@nestjs/common';
import { StockBuyDetailService } from './stock-buy-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockBuyDetailController } from './stock-buy-detail.controller';
import { StockBuyDetail } from './entities/stock-buy-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockBuyDetail])],
  controllers: [StockBuyDetailController],
  providers: [StockBuyDetailService],
})
export class StockBuyDetailModule {}
