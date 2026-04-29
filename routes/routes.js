import express from 'express'; 
import restauranteController from '../controllers/restauranteController.js';


const router = express.Router();

router.post('/restaurante', restauranteController.createRestaurante);
router.get('/restaurante', restauranteController.getAllRestaurante);
router.put('/restaurantes/:id', restauranteController.updateRestaurante);
router.delete('/restaurantes/:id',restauranteController.deleteRestaurante);

export default router; 