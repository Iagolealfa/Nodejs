import {Router} from 'express';
import * as HomeController from '../controllers/homeController'
import * as UserController from '../controllers/userController'
import * as InfoController from '../controllers/infoController'

const router = Router();

router.get('/',HomeController.home)

router.post('/novousuario', HomeController.novoUsuario)

router.get('/usuario/:id/mais',UserController.addIdade)
router.get('/usuario/:id/menos',UserController.dimIdade)
router.get('/usuario/:id/excluir',UserController.excluir)

router.get('/contato',InfoController.contato)

router.get('/sobre',InfoController.sobre)

router.get('/nome',UserController.nome)

router.get('/idade',UserController.idadeForm );

router.post('/idade-resultado', UserController.idadeAction);



export default router;