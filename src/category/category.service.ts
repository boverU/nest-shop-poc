import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import CategoryNotFoundException from './exceptions/CategoryNotFoundException';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(category: CreateCategoryDto) {
    const newCategory = await this.categoryRepository.create(category);
    await this.categoryRepository.save(newCategory);
    return newCategory;
  }

  async findAll() {
    return await this.categoryRepository.find({ relations: ['posts'] });
  }

  async findOne(id: number) {
    return await this.categoryRepository.find({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    const deleteResponse = await this.categoryRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new CategoryNotFoundException(id);
    }
  }
}
