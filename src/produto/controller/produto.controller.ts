import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../services/produto.services";
import { Produto } from "../entities/produto.entity";

@Controller("/produtos")
export class ProdutoController{
    constructor(private readonly produtoService: ProdutoService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll():Promise<Produto[]>{
        return this.produtoService.findAll();
    }
    
    @Get('/:id_game')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id_game', ParseIntPipe) id_game: number): Promise<Produto> {
        return this.produtoService.findById(id_game);
    }

    @Get('/nome/:nome')
     @HttpCode(HttpStatus.OK)
    findAllByNome(@Param('nome') nome: string): Promise<Produto[]> {
        return this.produtoService.findAllByNome(nome);
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produto): Promise<Produto> {
        return this.produtoService.create(produto);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto> {
        return this.produtoService.update(produto);
    }

    @Delete('/:id_game')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id_game', ParseIntPipe) id_game: number){
        return this.produtoService.delete(id_game);
    }


}