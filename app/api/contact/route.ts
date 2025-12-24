import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const { name, email, mobile, message } = await req.json();

        if (!name || !email || !mobile || !message) {
            return NextResponse.json(
                { error: "Name, email, mobile, and message are required." },
                { status: 400 }
            );
        }

        await dbConnect();

        const newContact = await Contact.create({
            name,
            email,
            mobile,
            message,
        });

        return NextResponse.json(
            { message: "Message sent successfully!", contact: newContact },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Contact Form Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
