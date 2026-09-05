type ServiceSchemaProps = {

title:string;

description:string;

};


export default function ServiceSchema({

title,

description

}:ServiceSchemaProps){


const schema = {

"@context":"https://schema.org",

"@type":"Service",

"name":title,

"description":description,


"provider":{

"@type":"Organization",

"name":"Fixonic Solutions",

"url":"https://fixonic-solution.vercel.app"

},


"areaServed":{

"@type":"Worldwide"

},


"serviceType":title

};



return (

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify(schema)

}}

/>

)

}