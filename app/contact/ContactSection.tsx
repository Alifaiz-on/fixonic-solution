"use client";

import { useState } from "react";


export default function ContactSection(){


const [loading,setLoading] = useState(false);

const [status,setStatus] = useState("");



async function handleSubmit(e:React.FormEvent<HTMLFormElement>){

e.preventDefault();


setLoading(true);

setStatus("");



try{


const formData = new FormData(e.currentTarget);



const data = {

name: formData.get("name"),

company: formData.get("company"),

email: formData.get("email"),

phone: formData.get("phone"),

service: formData.get("service"),

projectType: formData.get("projectType"),

budget: formData.get("budget"),

timeline: formData.get("timeline"),

message: formData.get("message"),

};




const response = await fetch("/api/contact",{

method:"POST",

headers:{

"Content-Type":"application/json",

},

body:JSON.stringify(data),

});




if(response.ok){


setStatus("Message sent successfully!");

e.currentTarget.reset();


}else{


setStatus("Something went wrong. Please try again.");


}



}

catch(error){

console.error(error);

setStatus("Unable to send message.");

}


finally{

setLoading(false);

}


}




return(


<section className="contact-section">


<div className="contact-main-container">



{/* FORM */}


<div className="contact-form-box">



<form onSubmit={handleSubmit}>


<div className="form-row">


<div>

<label>
FULL NAME *
</label>


<input

name="name"

placeholder="Your Name"

required

/>

</div>



<div>

<label>
COMPANY NAME *
</label>


<input

name="company"

placeholder="Company Name"

required

/>

</div>


</div>





<div className="form-row">


<div>

<label>
EMAIL *
</label>


<input

name="email"

type="email"

placeholder="Email Address"

required

/>

</div>




<div>

<label>
PHONE *
</label>


<input

name="phone"

placeholder="Phone Number"

required

/>

</div>



</div>






<div className="form-row">


<div>

<label>
SERVICE REQUIRED
</label>


<select name="service">

<option>Select Service</option>

<option>Website Development</option>

<option>SEO</option>

<option>Digital Marketing</option>

<option>Branding</option>

<option>AI Solutions</option>


</select>


</div>





<div>

<label>
PROJECT TYPE
</label>


<select name="projectType">


<option>Select Type</option>

<option>New Project</option>

<option>Redesign</option>

<option>Long Term Partnership</option>


</select>


</div>


</div>







<div className="form-row">



<div>

<label>
BUDGET RANGE
</label>


<select name="budget">


<option>Select Budget</option>

<option>$1000 - $5000</option>

<option>$5000 - $10000</option>

<option>$10000+</option>


</select>


</div>






<div>

<label>
TIMELINE
</label>


<select name="timeline">


<option>Select Timeline</option>

<option>ASAP</option>

<option>1 Month</option>

<option>3 Months</option>


</select>


</div>


</div>







<label>
MESSAGE *
</label>


<textarea

name="message"

placeholder="Tell us about your project"

required

/>





<button

type="submit"

disabled={loading}

>

{loading ? "Sending..." : "Send Message"}


</button>





{

status && (

<p className="form-status">

{status}

</p>

)

}



</form>


</div>









{/* DETAILS */}



<div className="contact-details">



<div className="detail-card">


<h4>
✉ Email
</h4>


<p>
hello@fixonicsolution.com
</p>


</div>






<div className="detail-card">


<h4>
☎ Phone
</h4>


<p>
+92 315 4928521
</p>


</div>






<div className="detail-card">


<h4>
⌖ Address
</h4>


<p>
Karachi, Pakistan
</p>


</div>






<div className="detail-card">


<h4>
Working Hours
</h4>


<p>

Monday - Friday
<br/>

9:00 AM - 6:00 PM

</p>


</div>





</div>





</div>


</section>


)

}