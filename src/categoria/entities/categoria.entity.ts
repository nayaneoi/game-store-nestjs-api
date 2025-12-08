import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_categorias'}) // Tabela da classe categorias 
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty() // Define que o valor do Atributo não pode ser vazio
    @Column({length: 50, nullable: false})
    categoria: string
}
