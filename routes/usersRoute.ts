import { Router } from "express";
import { changeUserPassword, createUser, deleteUser, setLoggedUserId, getUser, getUsers, resizeUserImage, updateUser, uploadUserImage, updateLoggedUser, changeLoggedUserPassword } from "../controllers/users";
import { changeLoggedUserPasswordValidator, changeUserPasswordValidator, createUserValidator, deleteUserValidator, getUserValidator, updateLoggedUserValidator, updateUserValidator } from "../utils/validation/usersValidator";
import { allowedTo, checkActive, protectRoutes } from "../controllers/auth";
import { addAddress, removeAddress } from "../controllers/address";

const usersRoute: Router = Router();

const AddressRoutes: Router = Router();

AddressRoutes.use(protectRoutes, checkActive, allowedTo('user'))

AddressRoutes.route('/')
    .post(addAddress)
AddressRoutes.route('/:addressId')
    .delete(removeAddress)

usersRoute.use(protectRoutes, checkActive);

usersRoute.route('/me')
.get(setLoggedUserId, getUser)

usersRoute.put('/updateMe', updateLoggedUserValidator, updateLoggedUser)
usersRoute.put('/changeMyPassword', changeLoggedUserPasswordValidator, changeLoggedUserPassword)
usersRoute.delete('/deleteMe', allowedTo('user'), setLoggedUserId, deleteUser)

usersRoute.use(allowedTo('manager'));
usersRoute.route('/')
  .get(getUsers)
  .post(uploadUserImage, resizeUserImage, createUserValidator, createUser);

usersRoute.route('/:id')
  .get(getUserValidator, getUser)
  .put(uploadUserImage, resizeUserImage, updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);

usersRoute.put('/:id/changePassword', changeUserPasswordValidator, changeUserPassword)

export default usersRoute;