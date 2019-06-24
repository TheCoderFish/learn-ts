export class Registration<T> {
    name: string;
    mail: string;
    message: string;
    private password: T;
    

    constructor(theName: string, theMail: string, theMessage: string) {
        this.name = theName;
        this.mail = theMail;
        this.message = theMessage;
        this.password = this.genPassword();
    }

    private genPassword():any{
        let x = Math.random()>0.5 ? 1 : 0;
        return x==1?Math.round(Math.random()*3546564576457):`a${Math.round(Math.random()*35467)}b${Math.round(Math.random()*35467)}c`
    }

    toString():string{
        let messageOutput : string;
        messageOutput = this.message ? `Message from ${this.name} \: ${this.message}` : '';
        return `<h1>Hi i am ${this.name} ,<br> 
                My Email id is ${this.mail} <br>
                ${messageOutput}
               </h1>`
    }
}