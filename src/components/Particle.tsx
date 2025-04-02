import { IParticleProps } from "../utils/IParticleProps";

const Particle: React.FC<IParticleProps> = ({ type, count }) => {
  const colors = {
    proton: "bg-red-500",
    electron: "bg-blue-500",
    neutron: "bg-gray-400",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`w-6 h-6 ${colors[type]} text-white flex items-center justify-center rounded-full`}
        >
          {type.charAt(0).toUpperCase()}
        </div>
      ))}
    </div>
    
  );
};

export default Particle;