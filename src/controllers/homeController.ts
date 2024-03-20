import {Response, Request} from 'express';

import { sequelize } from '../instances/mysql';

import {Product} from '../models/Product'

export const home = async (req: Request,res: Response)=>{
    try{
        await sequelize.authenticate()
        console.log('Conexão estabelecida com sucesso')
    }catch(error){
        console.log(`Deu problema: ${error}`)
    }

    let age: number = 45;
    let showOld :boolean = false;
    if (age > 50){
        showOld = true;
    }
    let list = Product.getAll();
    let expensiveList = Product.getPriceAfter(45);

    res.render('pages/home', {
        name : 'Iago',
        lastname : 'Almeida',
        showOld,
        products : list,
        expensives : expensiveList,
        frasesDoDia:[
            "Acredite em si mesmo e você será imparável.",
            "Cada dia é uma nova oportunidade para brilhar.",
            "A persistência leva ao sucesso."
        ] 
    });
}