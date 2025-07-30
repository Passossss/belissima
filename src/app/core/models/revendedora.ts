import { EstadoBrasil } from "./enumRevendedora";

export class Revendedora {
    id?: number; 
    nome: string;
    email: string;
    estado: EstadoBrasil;
    cidade: string;
    numero: string;

    constructor(nome: string, email: string, estado: EstadoBrasil, cidade: string, numero: string, id?: number) {
        this.nome = nome;
        this.email = email;
        this.estado = estado;
        this.cidade = cidade;
        this.numero = numero;
        if (id) this.id = id;
    }
}

export { EstadoBrasil };

