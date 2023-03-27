import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Menu } from './menus/entities/menu.entity';
import { MenusModule } from './menus/menus.module';
import { Serve } from './serve/entities/serve.entity';
import { ServeModule } from './serve/serve.module';
import { Table } from './tables/entities/table.entity';
import { TablesModule } from './tables/tables.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { BasketsModule } from './baskets/baskets.module';
import { PaymentModule } from './payment/payment.module';
import { Payment } from './payment/entities/payment.entity';
import { Basket } from './baskets/entities/basket.entity';
import { OrderitemsModule } from './orderitems/orderitems.module';
import { Orderitem } from './orderitems/entities/orderitem.entity';
import { SalaryModule } from './salary/salary.module';
import { Salary } from './salary/entities/salary.entity';
import { StockModule } from './stock/stock.module';
import { Stock } from './stock/entities/stock.entity';
import { CheckModule } from './check/check.module';
import { Check } from './check/entities/check.entity';
import { QueuesModule } from './queues/queues.module';
import { Queue } from './queues/entities/queue.entity';
import { ReportsModule } from './reports/reports.module';
import { SalarylogModule } from './salarylog/salarylog.module';
import { Salarylog } from './salarylog/entities/salarylog.entity';
import { CheckStockDetailModule } from './check-stock-detail/check-stock-detail.module';
import { CheckStockDetail } from './check-stock-detail/entities/check-stock-detail.entity';
import { CheckStockListModule } from './check-stock-list/check-stock-list.module';
import { CheckStockList } from './check-stock-list/entities/check-stock-list.entity';
import { StockBuyListModule } from './stock-buy-list/stock-buy-list.module';
import { StockBuyDetailModule } from './stock-buy-detail/stock-buy-detail.module';
import { StockBuyDetail } from './stock-buy-detail/entities/stock-buy-detail.entity';
import { StockBuyList } from './stock-buy-list/entities/stock-buy-list.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'lazybunnies.ddns.net',
      port: 3306,
      username: 'LazyBunnies',
      password: 'Lazy@212317',
      database: 'project_lazy',
      entities: [
        Menu,
        User,
        Table,
        Serve,
        Order,
        Payment,
        Basket,
        Orderitem,
        Salary,
        Stock,
        Check,
        Queue,
        Salarylog,
        CheckStockDetail,
        CheckStockList,
        StockBuyDetail,
        StockBuyList,
      ],
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'database.sqlite',
    //   synchronize: true,
    //   logging: false,
    //   entities: [Menu],
    //   migrations: [],
    //   subscribers: [],
    // }),
    MenusModule,
    TablesModule,
    UsersModule,
    AuthModule,
    ServeModule,
    OrdersModule,
    BasketsModule,
    PaymentModule,
    OrderitemsModule,
    SalaryModule,
    StockModule,
    CheckModule,
    QueuesModule,
    ReportsModule,
    SalarylogModule,
    CheckStockDetailModule,
    CheckStockListModule,
    StockBuyListModule,
    StockBuyDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
