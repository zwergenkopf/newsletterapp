import { useEffect } from "react";

function Zeitung() {
    useEffect(() => {
        getZeitung();
    },[]);
    const getZeitung = async () => {
    const api = await fetch(
        `https://mc2xsctbllc5pw-0ck06pnh5c6g8.pub.sfmc-content.com/qusszr1p1zx`
    );
    const data = await api.json();
    console.log(data);
  }; 
  return (
    <div>Zeitung</div>
  )
};

export default Zeitung