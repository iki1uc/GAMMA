import { OCTACORE } from "./OCTACORE.js";
import { SAT } from "./SAT.js";
import { NC_LINK } from "./NC.link.js";
import { WURMLOCH } from "./WURMLOCH.js";

export function OCTACORE_PIPE(direction) {

  const motor = OCTACORE.run(direction);
  const sat = SAT.decide(motor.vector);
  const nc = NC_LINK.to(sat);
  const worm = WURMLOCH.open(nc);

  return {
    octacore: motor,
    sat,
    nc,
    worm
  };
}

