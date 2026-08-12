import { LOAD_CORE } from "./LOAD_CORE.js";
import { LOAD_MAP } from "./LOAD_MAP.js";

export async function LOAD_PIPE(key){
  const file = LOAD_MAP[key];
  if(!file) return {};
  const data = await LOAD_CORE.fetch(file);
  return { key, data };
}
