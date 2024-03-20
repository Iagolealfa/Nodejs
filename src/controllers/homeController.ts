import {Response, Request} from 'express';
import { Op } from 'sequelize';
import { User } from '../models/user';

import {Product} from '../models/Product'

export const home = async (req: Request,res: Response)=>{
    
    let users = await User.findAll({
        where : {
            age : {
                [Op.gte] : 18
            }
            
        },
        offset: 4,
        limit : 2

    },)




    let age: number = 45;
    let showOld :boolean = false;
    if (age > 50){
        showOld = true;
    }
    let list = Product.getAll();
    let expensiveList = Product.getPriceAfter(45);

    res.render('pages/home',  {
        name : 'Iago',
        lastname : 'Almeida',
        showOld,
        products : list,
        expensives : expensiveList,
        frasesDoDia:[
            "Acredite em si mesmo e você será imparável.",
            "Cada dia é uma nova oportunidade para brilhar.",
            "A persistência leva ao sucesso."
        ] ,
        users
    });
}