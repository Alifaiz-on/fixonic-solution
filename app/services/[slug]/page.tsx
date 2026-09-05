import type { Metadata } from "next";

import ServiceOverview from "../components/ServiceOverview";
import { serviceData } from "../serviceData";
import ServiceProblem from "../components/ServiceProblem";
import ServiceSolutions from "../components/ServiceSolutions";
import ServicePricing from "../components/ServicePricing";
import ServiceInnerCTA from "../components/ServiceInnerCTA";

import ServiceSchema from "../../components/ServiceSchema";



export async function generateMetadata({

params

}:{

params: Promise<{
slug:string
}>

}): Promise<Metadata>{



const {slug} = await params;



const service =
serviceData[slug as keyof typeof serviceData];



if(!service){

return {

title:"Service Not Found | Fixonic Solutions",

description:"The requested service page was not found."

};

}



return {

title:`${service.title} | Fixonic Solutions`,

description:service.description,

};

}





export default async function ServicePage({

params

}:{

params:Promise<{
slug:string
}>

}){



const {slug}=await params;



const service = 
serviceData[slug as keyof typeof serviceData];





if(!service){

return (

<main>

<h1>

Service Not Found

</h1>

</main>

)

}





return (

<main>


<ServiceSchema

title={service.title}

description={service.description}

/>



<ServiceOverview

title={service.title}

description={service.description}

icons={service.icons}

/>



<ServiceProblem data={service} />



<ServiceSolutions data={service} />



<ServicePricing data={service} />



<ServiceInnerCTA data={service} />



</main>

)

}