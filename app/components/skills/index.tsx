import { skills } from "../../../const";
import Skill from "./skill";

function Skills() {
  return (
    <section
      id="skills"
      className="snap-center flex items-center justify-center flex-col h-screen"
    >
      <div className="grid lg:grid-cols-4 grid-cols-4 gap-5 p-4 ">
        {skills.map((skill, i) => {
          return (
            <Skill key={i} keyProp={i} icon={skill.icon}>
              {skill.name}
            </Skill>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
