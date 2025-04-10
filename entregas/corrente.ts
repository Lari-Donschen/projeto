import { IConta } from "./iConta";

export class Corrente implements IConta{
    numero: number;
    nome: string;
    saldo: number;

    constructor(numero:number,nome:string, saldo:number){
        this.numero = numero;
        this.nome = nome;
        this.saldo = saldo;
    }
    
    
    depositar(valor:number): void {
        this.saldo = valor + this.saldo;
    }
    sacar(valor:number): void {
        if(valor > this.saldo){
            this.saldo = valor - this.saldo;
        }
        else{
            console.log("saldo indisponivel")
        }       
    }
    transferencia(valor:number,conta:IConta) {
        if(valor>this.saldo){
            this.saldo = valor - this.saldo;
            conta.saldo += valor;
        }
        
    }
    verificarSaldo(): number {
        return this.saldo;
    }
}

