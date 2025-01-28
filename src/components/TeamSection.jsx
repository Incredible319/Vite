import person1Icon from "../images/person (1).png";
import person2Icon from "../images/person (2).png";
import person3Icon from "../images/person (3).png";
import person4Icon from "../images/person (4).png";
import person5Icon from "../images/person (5).png";
import person6Icon from "../images/person (6).png";
const TeamSection = () => {
  return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-52 flex justify-center" style={{backgroundColor: "#1d1e1e"}}>
        <div className="w-[60vw] h-[60vw] rounded-full relative mb-16 shadow-[0_0_120px_rgba(255,255,255,0.6)]">
          <div className="bubble person1">
            <div className="drop">
              <img src={person1Icon} alt="Ethereum Icon" className="w-28 rounded-full p-4 opacity-90" />
            </div>
          </div>
          <div className="bubble person2">
            <div className="drop">
              <img src={person2Icon} alt="Ethereum Icon" className="w-28 rounded-full p-4 opacity-90" />
            </div>
          </div>
          <div className="bubble person3">
            <div className="drop">
              <img src={person3Icon} alt="Ethereum Icon" className="w-28 rounded-full p-4 opacity-90" />
            </div>
          </div>
          <div className="bubble person4">
            <div className="drop">
              <img src={person4Icon} alt="Ethereum Icon" className="w-28 rounded-full p-4 opacity-90" />
            </div>
          </div>
          <div className="bubble person5">
            <div className="drop">
              <img src={person5Icon} alt="Ethereum Icon" className="w-28 rounded-full p-4 opacity-90" />
            </div>
          </div>
          <div className="bubble person6">
            <div className="drop">
              <img src={person6Icon} alt="Ethereum Icon" className="w-28 rounded-full p-4 opacity-90" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default TeamSection;