import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportsService {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  getCookBy() {
    return this.dataSource.query(
      `SELECT fname,lname,DATE_FORMAT(queue.createdAt, '%d/%m/%Y') AS date, count(*) as count FROM queue  INNER JOIN user ON queue.empCookId = user.id where status = 'เสิร์ฟสำเร็จ' and day(queue.createdAt) = day(curdate()) group by empCookId order by count desc`,
    );
  }

  getSumPriceSearch(search: any) {
    return this.dataSource.query(
      `SELECT SUM(netPrice) AS sum_amount FROM payment where ${search}(createdAt) = ${search}(curdate())`,
    );
  }
  getSumPrice() {
    return this.dataSource.query(
      `SELECT SUM(netPrice) AS sum_amount FROM payment`,
    );
  }

  getSumOrderSearch(search: any) {
    return this.dataSource.query(
      `SELECT SUM(numConfirm) AS sum_Order FROM orderitem INNER JOIN menu ON orderitem.menuId = menu.id where  ${search}(orderitem.createdAt) =  ${search}(curdate()) and menu.type != 'เครื่องดื่ม'`,
    );
  }
  getSumOrder() {
    return this.dataSource.query(
      `SELECT SUM(numConfirm) AS sum_Order FROM orderitem INNER JOIN menu ON orderitem.menuId = menu.id where menu.type != 'เครื่องดื่ม'`,
    );
  }

  getCountTableSearch(search: any) {
    return this.dataSource.query(
      `SELECT count(*) AS count FROM project_lazy.order where ${search}(createdAt) = ${search}(curdate())`,
    );
  }

  getCountTable() {
    return this.dataSource.query(
      `SELECT count(*) AS count FROM project_lazy.order`,
    );
  }

  getTopMenuSearch(search: string) {
    return this.dataSource.query(
      `SELECT ROW_NUMBER() OVER (ORDER BY SUM(numConfirm) DESC) AS id, name, SUM(numConfirm) AS sum FROM orderitem INNER JOIN menu ON orderitem.menuId = menu.id WHERE ${search}(orderitem.createdAt) = ${search}(CURDATE()) GROUP BY name ORDER BY sum DESC`,
    );
  }

  getTopMenu() {
    return this.dataSource.query(
      `SELECT ROW_NUMBER() OVER (ORDER BY SUM(numConfirm) DESC) AS id, name, SUM(numConfirm) AS sum FROM orderitem INNER JOIN menu ON orderitem.menuId = menu.id GROUP BY name ORDER BY sum DESC`,
    );
  }

  getTopChefSearch(search: string) {
    return this.dataSource.query(
      `SELECT ROW_NUMBER() OVER (ORDER BY count(*) DESC) AS id,fname,lname, count(*) as count FROM queue  INNER JOIN user ON queue.empCookId = user.id where status = 'เสิร์ฟสำเร็จ' and ${search}(queue.createdAt) = ${search}(curdate()) group by empCookId order by count desc`,
    );
  }
  getTopChef() {
    return this.dataSource.query(
      `SELECT ROW_NUMBER() OVER (ORDER BY count(*) DESC) AS id,fname,lname, count(*) as count FROM queue  INNER JOIN user ON queue.empCookId = user.id where status = 'เสิร์ฟสำเร็จ' group by empCookId order by count desc`,
    );
  }

  getTopServeSearch(search: string) {
    return this.dataSource.query(
      `SELECT ROW_NUMBER() OVER (ORDER BY count(*) DESC) AS id,fname,lname, count(*) as count FROM queue  INNER JOIN user ON queue.empServeId = user.id where ${search}(queue.createdAt) = ${search}(curdate()) group by empServeId order by count desc`,
    );
  }
  getTopServe() {
    return this.dataSource.query(
      `SELECT ROW_NUMBER() OVER (ORDER BY count(*) DESC) AS id,fname,lname, count(*) as count FROM queue  INNER JOIN user ON queue.empServeId = user.id group by empServeId order by count desc`,
    );
  }

  getPrice7day() {
    return this.dataSource.query(
      `SELECT SUM(netPrice) AS sum, DAYNAME(createdAt) AS day FROM payment WHERE createdAt >= DATE_SUB(NOW(), INTERVAL 7 DAY) GROUP BY DAYNAME(createdAt) ORDER BY createdAt DESC`,
    );
  }

  getPrice12month() {
    return this.dataSource.query(
      `SELECT MONTHNAME(createdAt) AS month, SUM(netprice) AS sum FROM payment WHERE createdAt >= DATE_SUB(NOW(), INTERVAL 12 MONTH) GROUP BY MONTHNAME(createdAt) ORDER BY MONTH(createdAt) ASC`,
    );
  }

  //   create(createReportDto: CreateReportDto) {
  //     return 'This action adds a new report';
  //   }

  //   findAll() {
  //     return `This action returns all reports`;
  //   }

  //   findOne(id: number) {
  //     return `This action returns a #${id} report`;
  //   }

  //   update(id: number, updateReportDto: UpdateReportDto) {
  //     return `This action updates a #${id} report`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} report`;
  //   }
}
