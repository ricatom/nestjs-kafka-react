import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    customer: string;
    
    @Column()
    status: string;
    
    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    total: number;
    
    @Column()
    created_at: Date;
}
