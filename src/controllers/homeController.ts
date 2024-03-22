import {Response, Request} from 'express';
import { Op } from 'sequelize';
import { User } from '../models/user';

import {Product} from '../models/Product'

export const home = async (req: Request,res: Response)=>{
    
    
    await User.create({
        name : 'Teste',
        age : 15
    })

    let users = await User.findAll()
    
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

export const novoUsuario = async(req: Request, res : Response)=>{
    let {name, age} = req.body
    if(name){
        if(age){
            await User.create({
                name,
                age
            })
        }else{
            await User.create({
                name
            })

        }
        
    }
    res.redirect('/')
}