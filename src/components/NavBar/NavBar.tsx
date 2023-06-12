

export const NavBar = () => {
  return ( 
    <ul className="p-5 pb-11 bg-slate-500" style={{width: 50, height: 20, position: "relative", zIndex: 1}}>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#home">Home</a></li>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#skills">Skills</a></li>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#services">Services</a></li>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#portfolio">Portfolio</a></li>
      <li className="text-white text-md p-3" style={{display: "inline"}}><a href="#contact">Contact</a></li>
    </ul>

  )
}
