import React,{useState} from 'react'
import Navbar from '../../Components/Header';

export default function Header(){

    const [colorChange, setColorchange] = useState(false);
    const [searchText,setSearchText]=useState("");

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    function handleChange(event){
        setSearchText(event.target.value);
    }


  return (
      <Navbar bgColor={colorChange} value={searchText} handleChange={handleChange}/>
  )
}
