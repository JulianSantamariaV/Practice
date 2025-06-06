import React from "react";
import { IAtomProps } from "../utils/IAtomProps";
import Particle from "./Particle";

const Atom: React.FC<IAtomProps> = ({ protons, electrons, neutrons }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg w-fit">
      <h2 className="text-lg font-bold text-center mb-2 text-amber-600">Átomo</h2>
      <div className="flex flex-col items-center gap-3">
      <Particle type="proton" count={protons} />
        <Particle type="neutron" count={neutrons} />
        <Particle type="electron" count={electrons} />
      </div>
    </div>
  );
};

export default Atom;
