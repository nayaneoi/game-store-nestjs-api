import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./services/categoria.service";
import { CategoriaController } from "./controllers/categoria.controller";

@Module({ // define que esta classe será a principal do Módulo
    imports: [TypeOrmModule.forFeature([Categoria])], // importa a Classe Entidade categoria para associá-la à tabela tb_postagens.
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: [],
})
export class CategoriaModule {}