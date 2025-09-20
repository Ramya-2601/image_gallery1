import { Component } from "react";
export class ImageGalleryLooping extends Component{
    constructor(){
        super()
        this.state={
            images:[
                "/Images/vijay1.png",
                "/Images/vijay2.png",
                "/Images/vijay3.png",
                "/Images/vijay4.png",
                "/Images/vijay5.png",
                "/Images/vijay6.png",
                "/Images/vijay7.png",
                "/Images/vijay8.jpg",
                "/Images/vijay9.png",
                "/Images/vijay10.png"

    

            ]
        }
    }
    render(){
         return (
          <div>
         <h1 style={{
            color:"purple",
            textAlign:"center",
            marginBottom: "20px"
         }}>Welcome to Vijay's Image Gallery</h1>  
        <div 
      style={{
        display: "flex",         
        gap: "15px",             
        flexWrap: "wrap",        
        justifyContent: "center" 
      }}>
        
         {
         this.state.images.map((url,index)=>
         (
            <img 
            key={index}
            src={url}
            alt={`image ${index}`}
             
             style={{
                width: "180px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "white",
                
            }}
            />
         )
        )
    }
        </div></div>
         );
    }
   
}