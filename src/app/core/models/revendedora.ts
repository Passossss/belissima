import { EstadoBrasil } from "./enumRevendedora";

export class Revendedora {
    id: number;
    nome: string;
    email: string;
    estado: EstadoBrasil;
    cidade: string;
    telefone: string;

    constructor(id: number, nome: string, email: string, estado: EstadoBrasil, cidade: string, telefone: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.estado = estado;
        this.cidade = cidade;
        this.telefone = telefone;
    }
}
export { EstadoBrasil };

