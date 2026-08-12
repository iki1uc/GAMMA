export const LOAD_CORE = {

  async fetch(file){
    if(file.endsWith(".raw")){
      const res = await fetch(file);
      return await res.text();
    }
    if(file.endsWith(".json")){
      const res = await fetch(file);
      return await res.json();
    }
    return {};
  }
};
