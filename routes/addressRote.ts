import { Router } from "express";
import { protectRoutes, allowedTo, checkActive } from "../controllers/auth";
import { addAddress, removeAddress } from "../controllers/address";


const AddressRoutes: Router = Router();

AddressRoutes.use(protectRoutes, checkActive, allowedTo('user'))

AddressRoutes.route('/')
    .post(addAddress)
AddressRoutes.route('/:addressId')
    .delete(removeAddress)
export default AddressRoutes;
