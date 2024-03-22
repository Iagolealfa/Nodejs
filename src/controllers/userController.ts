import { Request, Response } from "express";
import { User } from '../models/user';

export const idadeAction =(req: Request, res :Response)=>{
    let idade : number = 0;
    let mostrarIdade : boolean = false;
    if(req.body.ano){
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();

        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade',{
        idade,
        mostrarIdade
    });
}
export const idadeForm = (req: Request, res :Response)=>{
    res.render('pages/idade');
}

export const nome =(req: Request,res: Response)=>{
    let nome: string = req.query.nome as string;
    let idade : string = req.query.idade as string;
    
    res.render('pages/nome',{
        nome,
        idade
    })
}

export const addIdade = async (req: Request, res: Response)=>{
    let id : string = req.params.id
    let result = await User.findOne({ where : { id }})
    if(result){
        result.age++
        await result.save()
    }
    res.redirect('/')
}
export const dimIdade = async (req: Request, res: Response)=>{
    let id : string = req.params.id
    let result = await User.findOne({ where : { id }})
    if(result){
        result.age--
        await result.save()
    }
    res.redirect('/')
}
export const excluir = async (req: Request, res: Response)=>{
    let id : string = req.params.id
    await User.destroy({
        where : {
            id
        }
    })
    
    res.redirect('/')
}