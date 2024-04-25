import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App(props) {
  // code here
  let imageArr=props.imageData();
  console.log(imageArr)
  return(
    <>
    <h1>Kalvium Gallery</h1>
    <div className="parent_div">
      {
        imageArr.map((item)=>{
          return <img src={item.img} alt="" className="image"/>
      })}
    </div>
    </>
  )
}

export default App;
