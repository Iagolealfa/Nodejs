import {Router,Request,Response} from 'express';

const router = Router();

router.get('/',(req: Request,res: Response)=>{
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
})

router.get('/contato',(req: Request,res: Response)=>{
    res.render('pages/contato')
})

router.get('/sobre',(req: Request,res: Response)=>{
    res.render('pages/sobre')
})

router.get('/nome',(req: Request,res: Response)=>{
    let nome: string = req.query.nome as string;
    let idade : string = req.query.idade as string;
    
    res.render('pages/nome',{
        nome,
        idade
    })
})

router.get('/idade', (req: Request, res :Response)=>{
    res.render('pages/idade');
});
router.post('/idade-resultado', (req: Request, res :Response)=>{
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
});

export default router;