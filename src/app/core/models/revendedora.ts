import { EstadoBrasil } from "./enumRevendedora";

export class Revendedora {
    id?: string; 
    nome: string;
    email: string;
    estado: EstadoBrasil;
    cidade: string;
    numero: string;

    constructor(nome: string, email: string, estado: EstadoBrasil, cidade: string, numero: string, id?: string) {
        this.nome = nome;
        this.email = email;
        this.estado = estado;
        this.cidade = cidade;
        this.numero = numero;
        if (id) this.id = id;
    }
}

export { EstadoBrasil };

