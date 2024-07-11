import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { CodeBase } from "./CodeBase";
import { Program } from "./Program";
import { Administrator } from "./Administrator";
import { Department } from "./Department";

@Entity({ name: 'school' })
export class School extends CodeBase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'nvarchar', length: 50 })
    school_name: string;

    @Column()
    establish_date: Date;

    @Column({ type: 'nvarchar', length: 50 })
    study_field: string;

    @OneToMany(() => Program, (program) => program.school)
    program?: Program[];

    @OneToMany(() => Administrator, (administrator) => administrator.school)
    administrator?: Administrator[];

    @OneToMany(() => Department, (department) => department.school)
    department?: Department[];
}