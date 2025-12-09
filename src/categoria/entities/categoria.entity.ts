import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({name: 'tb_categorias'}) // Tabela da classe categorias 
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty() // Define que o valor do Atributo não pode ser vazio
    @Column({length: 50, nullable: false})
    categoria: string
    static produto: any;

    @OneToMany(()=> Produto, (produto)=> Produto.categoria)
    produto: Produto[]

}
