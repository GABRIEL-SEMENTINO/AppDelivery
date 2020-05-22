import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OrderItem } from "src/orderitem/orderitem.entity";

@Entity("product")
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'code', type: 'varchar' })
    code: string;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'price', type: 'numeric', precision: 15, scale: 2 })
    price: number;

    @Column({ name: 'stockQuantity', type: 'integer'})
    stockQuantity: number;

    @OneToMany(type => OrderItem, orderItem => orderItem.product)
    orderItem: OrderItem;

}