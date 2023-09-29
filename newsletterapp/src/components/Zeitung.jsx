
function Zeitung() {

    const getZeitung = async () => {
        const api = await fetch(
        `https://mc2xsctbllc5pw-0ck06pnh5c6g8.pub.sfmc-content.com/qusszr1p1zx`
    );
    const data = await api.json();
    console.log("123");
  }; 
  return (
    <div>Zeitung</div>
  )
};

export default Zeitung