import ServiceOverview from "../components/ServiceOverview";
import { serviceData } from "../serviceData";
import ServiceProblem from "../components/ServiceProblem";
import ServiceSolutions from "../components/ServiceSolutions";
import ServiceTechnologies from "../components/ServiceTechnologies";
import ServicePricing from "../components/ServicePricing";
import ServiceInnerCTA from "../components/ServiceInnerCTA";

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


<ServiceOverview

title={service.title}

description={service.description}

icons={service.icons}

/>
<ServiceProblem data={service} />

<ServiceSolutions data={service} />

<ServiceTechnologies data={service} />

<ServicePricing data={service} />

<ServiceInnerCTA data={service} />

</main>

)

}   