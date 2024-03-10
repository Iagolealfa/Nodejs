import {Response, Request} from 'express';

export const home = (req: Request,res: Response)=>{
    let age: number = 45;
    let showOld :boolean = false;
    if (age > 50){
        showOld = true;
    }
   
    res.render('pages/home', {
        name : 'Iago',
        lastname : 'Almeida',
        showOld,
        products : [
            {title : 'Pizza de frango', price : 50},
            {title : 'Pizza de calabresa', price : 45},
            {title : 'Pizza de mussarela', price : 40},
        ],
        frasesDoDia:[
            "Acredite em si mesmo e você será imparável.",
            "Cada dia é uma nova oportunidade para brilhar.",
            "A persistência leva ao sucesso."
        ] 
    });
}