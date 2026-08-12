// SAVE_CORE.js

export const SAVE_CORE = {

  save(key, data){
    localStorage.setItem(key, JSON.stringify(data));
  },

  load(key){
    return JSON.parse(localStorage.getItem(key)) || {};
  }
};
