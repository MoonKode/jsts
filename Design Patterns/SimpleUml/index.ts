export class OneClass {
    constructor(
        private nome:string,
        public sobrenome:string,
        protected idade: number,
    ){}
// getters
    public getNome():string {
        return this.nome;
    }
    public getIdade():number {
        return this.idade;
    }
// setters
    public setNome(nome:string):void {
        this.nome = nome;
    }
    public setIdade(idade:number):void {
        this.idade = idade; 
    }
}

/**
 * Extends
 */

 export class Shape{
     // ...
 }

 export class Circle extends Shape {
     // ...
 }


/**
 * Dependencia
 */
export class Document {
    //...
}

export class Printer{
    public print(document:Document):void {
        console.log(`Printing ${document}`);
    }
}


/**
 * Interfaces
 */

export interface ControleRemoto {
    play():void;
    pause():void;
}

export interface ControleSom extends ControleRemoto{
    mudarRadio():void;
}

export class Bluray implements ControleRemoto{
    pause(): void {};
    play(): void {};    
}

export class Som implements ControleSom{
    play(): void {};    
    pause(): void {};
    mudarRadio():void {};
}