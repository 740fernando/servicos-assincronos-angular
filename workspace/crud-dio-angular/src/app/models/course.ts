import { Time } from "@angular/common";

export interface Course {
    id?: number,
    curso: string,
    inicio: Date,
    fim: Date,
    duracao: Time;
}
