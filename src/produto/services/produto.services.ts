import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../entities/produto.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class ProdutoService{
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ){}

    async findAll(): Promise<Produto[]>{ //retorna a lista de categorias
        return await this.produtoRepository.find({
            relations:{
                categoria: true
            }
        });
    }

    async findById(id_game: number): Promise<Produto>{ //retorna uma categorica com base no id informado
        let produto = await this.produtoRepository.findOne({
            where: {
                id_game
            }
        });
        if(!produto)
            throw new HttpException('Game não encontrado!', HttpStatus.NOT_FOUND);
        return produto;
    }

    async findAllByNome(nome: string): Promise<Produto[]>{ //retorna uma categorica com base no id informado
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
            relations: {
                categoria: true
            }
        })
    }

    async create(produto: Produto): Promise<Produto>{
        return await this.produtoRepository.save(produto);
    }

    async update(produto: Produto): Promise<Produto>{
        await this.findById(produto.id_game)
        return await this.produtoRepository.save(produto);
    }

    async delete(id_game: number): Promise<DeleteResult>{
        await this.findById(id_game)
        return await this.produtoRepository.delete(id_game);
    }

    
}