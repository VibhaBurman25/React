import React from 'react'

const Header = () => {
  return (
    <div>
      
      <nav  ref={myRef}  onClick={handleClick} style={{height:"15vh", background: "grey", display : "flex", justifyContent: "space-arround", alighItems:"center" }}>
     <div >logo</div>
     <div>home</div>
     <div>about</div>
     <div>more </div>
     <div>Contacts</div>
     <div>blog </div>
  
   </nav>
    

    </div>
  )
}

export default Header
