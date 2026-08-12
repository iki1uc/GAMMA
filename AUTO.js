import { LOAD_PIPE } from "./LOAD/LOAD_PIPE.js";
import { SAVE_PIPE } from "./SAVE/SAVE_PIPE.js";
import { AXIOM_THIRD } from "./tmp.a";

export async function AUTO(room = "ANKER"){

  const loaded = await LOAD_PIPE(room);

  const respo = {
    axis: (loaded.data.axis || 0) % 756,
    tick: (loaded.data.tick || 0) + 1,

    // 1/3-Prinzip
    orbit: ((loaded.data.tick || 0) % 3),
    third: AXIOM_THIRD.value,

    pulse: Math.random() > 0.5 ? "good" : "neutral"
  };

  SAVE_PIPE(room, respo);

  const nextRoom = ["GA","meKI","MIE"][respo.orbit];

  return { room: nextRoom, respo };
}
