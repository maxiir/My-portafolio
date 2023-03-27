import { Router } from "express";
import controller from '../controller/controller.js'


const router = Router();

router.post('/api/sendemail', controller.sendEmail)

export default router