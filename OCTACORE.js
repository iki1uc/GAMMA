export const OCTACORE = {
  id: "OCTACORE",
  axes: ["N","S","E","W","UP","DOWN","IN","OUT"],
  state: "PASSIVE",

  vector(dir) {
    return `VECTOR(${dir})`;
  },

  run(dir) {
    return {
      id: this.id,
      state: this.state,
      axis: dir,
      vector: this.vector(dir)
    };
  }
};

