import React from "react";
import { IAtomProps } from "../utils/IAtomProps";
import Particle from "./Particle";

export const Race: React.FC<IAtomProps> = ({ protons, electrons, neutrons }) => {

    return (

        <div >
            <div className="p-4 border rounded-lg shadow-lg w-fit">
                <h2 className="text-lg font-bold text-center text-amber-600">Átomo</h2>
                <div className="flex flex-col items-center">

                    <div className="flex flex-col items-center p-2">
                        <Particle type="proton" count={protons} />
                    </div>

                    <div className="flex flex-col items-center p-2">
                        <Particle type="neutron" count={neutrons} />
                    </div>

                    <div className="flex flex-col items-center p-2">
                        <Particle type="electron" count={electrons} />
                    </div>

                </div>

            </div>
        </div>
    );
}