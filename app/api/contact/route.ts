import { Resend } from "resend";


const resend = new Resend(
  process.env.RESEND_API_KEY
);



export async function POST(req: Request) {


  try {


    const body = await req.json();



    const {

      name,

      company,

      email,

      phone,

      service,

      projectType,

      budget,

      timeline,

      message,


    } = body;





    // Email to Fixonic team

    const adminEmail = await resend.emails.send({


      from:
        "Fixonic Website <hello@fixonicsolutions.com>",



      to:
        ["fixonicsolutions@gmail.com"],



      subject:
        `New Project Inquiry - ${name}`,



      html:

      `

      <div style="font-family:Arial,sans-serif;line-height:1.6;">


      <h2>
      New Contact Form Submission
      </h2>


      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Company:</strong> ${company}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Phone:</strong> ${phone}</p>

      <p><strong>Service:</strong> ${service}</p>

      <p><strong>Project Type:</strong> ${projectType}</p>

      <p><strong>Budget:</strong> ${budget}</p>

      <p><strong>Timeline:</strong> ${timeline}</p>


      <br/>


      <p><strong>Message:</strong></p>

      <p>${message}</p>


      </div>

      `


    });






    // Auto reply to customer


    const customerEmail = await resend.emails.send({


      from:
        "Fixonic Website <hello@fixonicsolutions.com>",



      to:
        [email],



      subject:
        "Thanks for contacting Fixonic Solutions",



      html:

      `

      <div style="font-family:Arial,sans-serif;line-height:1.6;">


      <h2>
      Thank you for contacting Fixonic Solutions
      </h2>



      <p>
      Hi ${name},
      </p>



      <p>
      We have received your project inquiry successfully.
      Our team will review your requirements and get back to you shortly.
      </p>



      <h3>
      Your Project Details
      </h3>



      <p>
      <strong>Service:</strong> ${service}
      </p>


      <p>
      <strong>Project Type:</strong> ${projectType}
      </p>


      <p>
      <strong>Budget:</strong> ${budget}
      </p>


      <p>
      <strong>Timeline:</strong> ${timeline}
      </p>



      <br/>



      <p>
      Regards,
      <br/>
      Fixonic Solutions Team
      </p>



      </div>

      `


    });






return Response.json(
{
  success:true,
  message:"Email sent successfully"
},
{
  status:200
}
);




  } catch(error){



    console.error(error);



    return Response.json(

      {

        success:false,

        error:"Email sending failed"

      },

      {

        status:500

      }

    );


  }


}