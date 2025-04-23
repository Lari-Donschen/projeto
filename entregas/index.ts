import {Cliente} from './cliente';
import {Corrente} from './corrente';
import {Poupanca} from './poupanca';


const cliente = new Cliente(1,"Ana", "Ibirama","(00) 0000-0000",10000);
const cliente2 = new Cliente(1,"Julia", "Ibirama","(00) 0030-0040",20000);

if(cliente.renda > 500){
    const corrente = new Corrente(1,cliente,500);
    const poupanca = new Poupanca(2,cliente2,300);
}

