import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
   
    const data = await request.json()

    let nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtpout.secureserver.net",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
        secure: true,
    })

    const recipients = [
        process.env.EMAIL_USER,
        'xersantos6@gmail.com'
    ]

    const mailForAdmin = {
        from: `<${process.env.EMAIL_USER}`,
        to: recipients,
        subject: `[LOAN-REQUEST] - Request From ${data.name}`,
        text: `You have a new loan request from ${data.name} (${data.email}).\n\nDetails:\nAmount: ${data.amount}\nTerm: ${data.term}\nPurpose: ${data.purpose}\n\nPlease check the Lendora dashboard for more details.`,
        // text: "Your loan request has been approved. Please check your Lendora dashboard for further details.",   
        html: `You have a new loan request from ${data.name} (${data.email}).\n\nDetails:\nAmount: ${data.amount}\nTerm: ${data.term}\nPurpose: ${data.purpose}\n\nPlease check the Lendora dashboard for more details.`,
    }

    const mailForCustomer = {
        from: `NO-REPLY <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: `RE: [LOAN-REQUEST] - Automated Quote from Lendora`,
        text: "Your loan request has been approved. Please check your Lendora dashboard for further details.",
        html: "Your loan request has been approved. Please check your Lendora dashboard for further details."
    }

    transporter.sendMail(mailForAdmin, function (err: any, info: any) {
        if(err) {
            console.log({err})
        } else {
            console.log({info})
        }            
    })

    transporter.sendMail(mailForCustomer, function (err: any, info: any) {
        if(err) {
            console.log({err})
        } else {
            console.log({info})
        }            
    })

    return NextResponse.json({message: `Email was sent to ${data.email}`}, {status: 200});

}

export async function GET(request: Request) {
    
    return NextResponse.json({
        message: 'Thank you for trying'
    })
}