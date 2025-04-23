export interface IConta{
    numero: number;
    nome: string;
    saldo: number;

    depositar(valor:number):void;
    sacar(valor:number):void;
    transferencia(valor:number, contaDestino: IConta):void;
    verificarSaldo():void;
}