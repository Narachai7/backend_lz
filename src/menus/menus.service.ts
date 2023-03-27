import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Menu)
    private menusRepository: Repository<Menu>,
  ) {}

  create(createMenuDto: CreateMenuDto) {
    return this.menusRepository.save(createMenuDto);
  }

  getMenuByName(text: string) {
    return this.menusRepository
      .createQueryBuilder('menu')
      .where('menu.name LIKE :name', { name: `%${text}%` })
      .getMany();
  }

  findAll() {
    return this.menusRepository.find();
  }

  findOne(id: number) {
    return this.menusRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    try {
      const updatedMenu = await this.menusRepository.save({
        id,
        ...updateMenuDto,
      });
      return updatedMenu;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const menu = await this.menusRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedMenu = await this.menusRepository.remove(menu);
      return deletedMenu;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
