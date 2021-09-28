import React, {useState, useEffect} from    "react"

const App = () => {
  const [text, setText] = useState([
    
    "It's a raining day...",
    "The day is Beautiful",
    "Coding is awesome",
    "What else can i say...?",
    "yes we can!"
  ])
  
   const [page, setPage] = useState(0)

   const nextPage = () => {
     setPage(page -1)
   }


   const prevPage = () => {
     if(page < 0){
       setPage(text.length)
     }else{
       setPage(page + 1)
     }
   }

   return (
     <div
     style={{
       width: "100%",
       height: "100vh",
       color: "blueviolet",
       backgroundColor: "black",
       frontSize: "50px",
       display: "flex",
       justifyContent:"center",
       alignItems: "center",
       flexDirection: "column"

     }}
     >
       <div>{page}</div>
       <div>{text[page % text.length]}</div>
       <div>
         <button
         onClick={() => {
           nextPage()
         }}>next</button>
         <button
          onClick={()=> {
            prevPage()
          }}
          >prev</button>
        </div>
      </div>
   )
 }
 export default App

       

    
