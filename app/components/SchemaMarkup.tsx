export default function SchemaMarkup(){

const schema = {
"@context": "https://schema.org",
"@type": "Organization",

"name": "Fixonic Solutions",

"url": "https://fixonic-solution.vercel.app",

"logo":
"https://fixonic-solution.vercel.app/images/logo.png",

"description":
"Fixonic Solutions provides website development, SEO, digital marketing, UI/UX design, AI solutions and hosting services.",


"sameAs":[

],


"contactPoint":{

"@type":"ContactPoint",

"contactType":"customer support"

}

};


return (

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html: JSON.stringify(schema)

}}

/>

)

}