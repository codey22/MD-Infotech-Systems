import mongoose, { Schema, model, models } from "mongoose";

export interface IContact {
    name: string;
    email: string;
    mobile: string;
    message: string;
    createdAt?: Date;
}

const ContactSchema = new Schema<IContact>(
    {
        name: {
            type: String,
            required: [true, "Please provide a name."],
        },
        email: {
            type: String,
            required: [true, "Please provide an email."],
        },
        mobile: {
            type: String,
            required: [true, "Please provide a mobile number."],
        },
        message: {
            type: String,
            required: [true, "Please provide a message."],
        },
    },
    {
        timestamps: true,
    }
);

// Prevent re-compiling the model during hot reloading
const Contact = models.Contact || model<IContact>("Contact", ContactSchema);

export default Contact;
