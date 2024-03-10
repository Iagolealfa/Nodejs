import {Router,Request,Response} from 'express';

const router = Router();

router.get('/',(req: Request,res: Response)=>{
    let age: number = 45;
    let showOld :boolean = false;
    if (age > 50){
        showOld = true;
    }
   
    res.render('home', {
        name : 'Iago',
        lastname : 'Almeida',
        showOld 
    });
})

router.get('/contato',(req: Request,res: Response)=>{
    res.send('Formulário de Contato');
})

router.get('/sobre',(req: Request,res: Response)=>{
    res.send('Página institucional sobre a impresa');
})

export default router;