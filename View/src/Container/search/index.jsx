import React, { useEffect, useState } from 'react'
import SearchResult from '../../Components/Search';
import { useParams } from 'react-router-dom';

export default function Search() {
    
    // const [searchText,setSearchText]=useState("");
    const [searchResult,setSearchResult]=useState([]);
    const { id } = useParams();
    
    useEffect(()=>{
        // setSearchText(id);
        handleSearch();        
    },[id])


    const content=[
        {
            text:["home","index"],
            link:[{title:"Home",url:"/"}]
        },
        {
            text:["about","about us"],
            link:[{title:"About Us",url:"/about"}]
        },
        {
            text:["contact","contact us"],
            link:[{title:"Contact Us",url:"/contact"}]
        },
        {
            text:["engagement","model","engagement model"],
            link:[{title:"Engagement Model",url:"/engagement"}]
        },
        {
            text:["service","offer","service offer","offering"],
            link:[{title:"Service Offerings",url:"/service"},{title:"Software Product Engineering",url:"/service/software-product-engineering"},
                {title:"Hardware Product Engineering",url:"/service/hardware-product-engineering"},{title:"Cloud Platform Engineering",url:"/service/cloud-platform-engineering"},
                {title:"Cognitive Solutions",url:"/service/cognitive-solution"},{title:"Salesforce CRM",url:"/service/salesforce-crm"}]
        },
        {   text:["career","careers","scope","job","jobs","post","requirement","roles","placement"],
            link:[{title:"Careers",url:"/careers"},{title:".Net Developer",url:"/careers/net-developer"},{title:"Java Developer",url:"/careers/java-developer"},
                {title:"Lead Mechanical Engineer",url:"/careers/lead-mechanical-engineer"},{title:"Python Developer",url:"/careers/python-developer"},
                {title:"Salesforce Lead",url:"/careers/salesforce-lead"},{title:"Sr. UI Developer",url:"/careers/sr-ui-developer"}]
        },
        {
            text:["salesforce","crm","advisory","solution finalization","finalization","solution","implementation","ongoing","support","ongoing support"],
            link:[{title:"Salesforce CRM",url:"/service/salesforce-crm"},{title:"Advisory Service",url:"/service/advisory-service"},{title:"Solution Finalization",url:"/service/solution-finalization"},
                {title:"Implementation",url:"service/implementation"},{title:"Ongoing Support",url:"/service/ongoing-support"}]
        },
        {
            text:["hardware","electronic and mechanical design","firmware and software expertise","engineering change management","value engineering","obsolescence management","prototyping and manufacturing"],
            link:[{title:"Hardware Product Engineering",url:"/service/hardware-product-engineering"}]
        },
        {
            text:["software","new product development","product customization","product quality compliance","product sustenance","re-engineering/modernization"],
            link:[{title:"Software Product Engineering",url:"/service/software-product-engineering"}]
        },
        {
            text:["cloud","cloud consulting and innovation","modernization and transformation","devOps and automation","data and analytics"],
            link:[{title:"Cloud Platform Engineering",url:"/service/cloud-platform-engineering"}]
        },
        {
            text:["cognitive","advisory services","data operations","ai/ml modeling","managed services","ai","ml","modeling","advisory","data"],
            link:[{title:"Cognitive Solutions",url:"/service/cognitive-solution"}]
        }
    ]

  
    const handleSearch = () => {
        
        const results = [];
        content.forEach(item => {
          if (item.text.some(keyword => keyword.includes(id.toLowerCase()))) {
            results.push(...item.link);
          }
        });
    
        setSearchResult(results);
    }

 
  return (
   <SearchResult searchResult={searchResult} searchText={id}/>
  )
}
