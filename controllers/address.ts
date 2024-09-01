
import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';
import usermodel from "../models/usersModel";
import ApiErrors from '../utils/apiErrors';
import {Users} from "../interfaces/users";
import AddressModel from '../models/addressModel';



export const addAddress = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const address = await AddressModel.create(req.body);
    if (!address) return next(new ApiErrors('Address creation failed', 500));
    const user = await usermodel.findByIdAndUpdate(
        req.user?._id,
        { $addToSet: { addresses:  address._id} },
        { new: true, runValidators: true }
    )
    if (!user) return next(new ApiErrors('User not found', 404));
    res.status(200).json({ data: user?.address });
});
export const removeAddress = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const user: Users | null = await usermodel.findByIdAndUpdate(req.user?._id, {
        $pull: { addresses: req.params.addressId }
    }, { new: true, runValidators: true});
    if (!user) return next(new ApiErrors('User not found', 404));
    res.status(200).json({ data: user?.address })
});