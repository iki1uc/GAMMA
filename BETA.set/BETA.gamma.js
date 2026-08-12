export const BETA_gamma = {
  id: "BETA.gamma",
  mode: "check",
  status: "active",

  check(alpha) {
    return {
      code: this.code(alpha),
      tech: this.tech(alpha),
      vec: this.vec(alpha),
      tmp: this.tmp(alpha),
      rotation: this.rotation(alpha),
      load: this.load(alpha),
      output: this.output(alpha),
      degree: this.degree(alpha),
      percent: this.percent(alpha),
      ready: this.ready(alpha)
    };
  },

  code(alpha) {
    return alpha ? "OK" : "ERR";
  },

  tech(alpha) {
    return alpha.tech === true ? "OK" : "ERR";
  },

  vec(alpha) {
    return alpha.vec ? "OK" : "ERR";
  },

  tmp(alpha) {
    return alpha.tmp ? "OK" : "ERR";
  },

  rotation(alpha) {
    return alpha.degree === "360°" ? "FULL" : "HALF";
  },

  load(alpha) {
    return alpha.load ? "OK" : "ERR";
  },

  output(alpha) {
    return alpha.output ? "OK" : "ERR";
  },

  degree(alpha) {
    return alpha.degree || "0°";
  },

  percent(alpha) {
    return alpha.percent || "0%";
  },

  ready(alpha) {
    return alpha.degree === "360°" && alpha.percent === "100%" ? true : false;
  }
};

