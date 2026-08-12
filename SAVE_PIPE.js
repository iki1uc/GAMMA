// SAVE_PIPE.js

import { SAVE_CORE } from "./SAVE_CORE.js";

export function SAVE_PIPE(key, data){
  SAVE_CORE.save(key, data);
  return { key, saved: true };
}
