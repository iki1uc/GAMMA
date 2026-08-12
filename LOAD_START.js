import { LOAD_PIPE } from "./LOAD/LOAD_PIPE.js";

export async function LOAD_START(key = "ANKER"){
  const result = await LOAD_PIPE(key);
  console.log("LOAD_START:", result);
  return result;
}
