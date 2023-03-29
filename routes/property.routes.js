import express, { Router } from "express";
import { getAllUsers } from "../controllers/user.controller";

import {
    createProperty,deleteProperty,getAllProperties,getPropertyDetail,
    updateProperty
} from './controllers/user.controller.js';

const router = express.Router();

router.route('/').get(getAllProperties);
router.route('/:id').get(getPropertyDetail);
router.route('/').post(createProperty);
router.route('/:id').patch(updateProperty);
router.route('/:id').delete(deleteProperty);

export default router;