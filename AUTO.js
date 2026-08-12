// AUTO.js

import { LOAD_PIPE } from "./LOAD/LOAD_PIPE.js";
import { SAVE_PIPE } from "./SAVE/SAVE_PIPE.js";

export async function AUTO(room = "ANKER"){

  // 1 — LOAD
  const loaded = await LOAD_PIPE(room);

  // 2 — RESPO (Bewertung)
  const respo = {
    axis: (loaded.data.axis || 0) % 756,
    tick: (loaded.data.tick || 0) + 1,
    orbit: ((loaded.data.tick || 0) % 3),
    pulse: Math.random() > 0.5 ? "good" : "neutral"
  };

  // 3 — SAVE
  SAVE_PIPE(room, respo);

  // 4 — NEXT ROOM
  const nextRoom = ["GA","meKI","MIE"][respo.orbit];

  return { room: nextRoom, respo };
}
