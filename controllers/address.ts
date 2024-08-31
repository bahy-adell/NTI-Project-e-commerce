import {createAddress} from "./refactorHandler";
import usermodel from "../models/usersModel";
import {Users} from "../interfaces/users";

export const Address = createAddress<Users>(usermodel);