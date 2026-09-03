"use client";

export default function ContactSection(){

return(

<section className="contact-section">


<div className="contact-main-container">


{/* FORM */}

<div className="contact-form-box">


<form>


<div className="form-row">

<div>
<label>
FULL NAME *
</label>
<input placeholder="Your Name"/>
</div>


<div>
<label>
COMPANY NAME *
</label>
<input placeholder="Company Name"/>
</div>

</div>



<div className="form-row">


<div>
<label>
EMAIL *
</label>
<input placeholder="Email Address"/>
</div>


<div>
<label>
PHONE *
</label>
<input placeholder="Phone Number"/>
</div>


</div>




<div className="form-row">


<div>
<label>
SERVICE REQUIRED
</label>

<select>
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

<select>

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

<select>

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

<select>

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

<textarea placeholder="Tell us about your project"/>



<button>
Send Message
</button>


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
Monday - Friday<br/>
9:00 AM - 6:00 PM
</p>

</div>


</div>



</div>


</section>

)

}