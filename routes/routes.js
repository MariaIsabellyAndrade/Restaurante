import express from 'express'; 
import restauranteController from '../controllers/restauranteController.js';
import { registrarCliente } from '../controllers/usuarioController.js';
import { login } from '../controllers/usuarioController.js';


const router = express.Router();

router.post('/restaurante', restauranteController.createRestaurante);
router.get('/restaurante', restauranteController.getAllRestaurante);
router.put('/restaurantes/:id', restauranteController.updateRestaurante);
router.delete('/restaurantes/:id',restauranteController.deleteRestaurante);


router.post('/clientes',registrarCliente);
router.post('/login',login);


export default router; 