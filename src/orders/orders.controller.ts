import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import * as QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  private currentOrder = 1;

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    createOrderDto.uuid = uuidv4();
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get('table/:id')
  findAllbyTable(@Param('id') id: string) {
    return this.ordersService.findAllbyTable(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Get('uuid/:id')
  findOneByUuid(@Param('id') uuid: string) {
    return this.ordersService.findOneByUuid(uuid);
  }

  // @Get(':orders/qrcode')
  // async generateQRCode(@Param('order') order: number, @Res() res) {
  //   const url = `http://localhost:5173/food?order=${order}`;
  //   const qrCode = await QRCode.toDataURL(url);

  //   res.setHeader('Content-type', 'image/png');
  //   res.send(qrCode);
  // }

  @Get(':orderId/qrcode')
  async generateQRCode(@Param('orderId') orderId: number, @Res() res) {
    const qrCode = await this.ordersService.generateQRCode(orderId);
    res.setHeader('Content-type', 'image/png');
    res.send(qrCode);
  }

  @Get(':orders')
  getOrder(@Param('order') order: number) {
    // รับคำสั่งเมื่อลูกค้าสั่งอาหาร
    // ...
    // เมื่อสั่งเสร็จสิ้น กำหนดค่า currentOrder ให้เท่ากับ order + 1
    this.currentOrder = order + 1;
  }

  // @Get('next-qrcode')
  // getNextQRCode() {
  //   return { url: `/food/${this.currentOrder}/qrcode` };
  // }

  @Get('next-qrcode')
  async getNextQRCode() {
    const orderId = this.ordersService.getNextOrder();
    console.log('orderId:', orderId);
    const qrCodeUrl = `/orders/${orderId}/qrcode`;
    return { url: qrCodeUrl };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
