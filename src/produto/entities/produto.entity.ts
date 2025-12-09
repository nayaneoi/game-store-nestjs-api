import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: 'tb_games'}) // Tabela da classe categorias 
export class Produto {

    @PrimaryGeneratedColumn()
    id_game: number;

    @IsNotEmpty() // Define que o valor do Atributo não pode ser vazio
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column("decimal", { precision: 10, scale: 2, nullable: false })
    preco: number;

    @IsNotEmpty()
    @Column("int", { nullable: false })
    estoque: number;
    static categoria: any;

    
    @ManyToOne(()=> Categoria, (categoria) => categoria.produto,{
        onDelete:"CASCADE"
    })
    categoria: Categoria

}
