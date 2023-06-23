import SkillsCard from "../Cards/SkillsCard"


const Portfolio = () => {
  return (
    <>
    <div>
    <div className="flex justify-center bg-slate-800 pb-11 mb-11 pt-11 mt-11">
      <div className="bg-slate-800 flex justify-center">
          <div className="text-7xl pr-10 text-white mt-11"><span className="text-pink-500">My</span><br/> Portfolio</div>
            <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full pl-11 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] shadow-blue-500/20 overflow-hidden" style={{ width: "400px", height: "300px" }}>
            <img className="mr-11"src="src/assets/cartoonImage.png" />
          </div>
        </div>
    </div>
  </div>

  


  <div className="flex flex-wrap justify-center gap-x-8 pt-10 m-10">
      <div className ="bg-slate-900 flex justify-center rounded-lg text-white text-5xl pt-5 shadow-2xl flex-wrap" style={{height:600, width:2000}}>Projects
        <div className="w-full flex flex-wrap justify-around">
          <SkillsCard title="Placeholder" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></SkillsCard> 
          <SkillsCard title="Placeholder" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></SkillsCard>
          <SkillsCard title="Placeholder" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></SkillsCard>
       
        </div>
      </div>
  </div>
    </>
  )
}

export default Portfolio