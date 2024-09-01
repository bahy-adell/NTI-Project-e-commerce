import { Schema, model } from "mongoose";
import { Users } from "../interfaces/users";


export const AddressSchema: Schema = new Schema<Users>({
    address:[{
        street:  { type: String, required: true } ,
        city:  { type: String, required: true } ,
        country: { type: String, required: true } 
    }]
});

const AddressModel = model<Users>('Address', AddressSchema);

export default AddressModel;