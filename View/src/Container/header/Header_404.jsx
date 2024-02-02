import React,{useState} from 'react'
import Navbar from '../../Components/Header';

export default function Header404(){

    const [searchText,setSearchText]=useState("");

    function handleChange(event){
        setSearchText(event.target.value);
    }


  return (
      <Navbar bgColor={true} value={searchText} handleChange={handleChange}/>
  )
}
