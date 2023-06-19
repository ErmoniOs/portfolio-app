import SkillsCard from "../Cards/SkillsCard"


const Skills = () => {
  return (
    <>
    <div className="bg-slate-800 h-96 relative flex items-center gap-x-8 px-7">
    <div className="text-white text-6xl"><span className="text-pink-500">My</span> Skills</div>
    <SkillsCard title="React" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
    <SkillsCard title="Typescript" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
    <SkillsCard title="Redux" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
    <SkillsCard title="Storybook" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" />
    <SkillsCard title="Java" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
    <SkillsCard title="SpringBoot" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
          
    <SkillsCard title="CSS3" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

    <SkillsCard title="mySQL" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
    <SkillsCard title="Git/Github" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
    <SkillsCard title="Material UI" url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
          
          

    </div>
    </>
  )
}

export default Skills