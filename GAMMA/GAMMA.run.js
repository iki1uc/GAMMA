import { BETA_profile } from "./BETA.set/BETA.profile.js";
import { BETA_gamma } from "./BETA.set/BETA.gamma.js";
import { BETA_run } from "./BETA.set/BETA.run.js";
import { ALLXALL } from "./allxall.js";

export const GAMMA_run = {
  id: "GAMMA.run",
  mode: "axiom-formula",
  status: "active",

  run(alpha) {
    const normalized = BETA_profile.normalize(alpha);
    const check = BETA_gamma.check(normalized);
    const beta = BETA_run.run(alpha);

    const axiom = this.axioms(normalized, beta);
    const formulas = this.formulas(normalized, beta);

    const gamma = {
      id: "GAMMA.result",
      normalized,
      axiom,
      formulas,
      ready: beta.ready
    };

    const all = ALLXALL.connect(alpha, beta, gamma);

    return { gamma, all };
  },

  axioms(alpha, beta) {
    return {
      math_axiom: alpha.degree === "360°" ? "OK" : "NOT_OK",
      physics_axiom: alpha.rotation === "FULL" ? "OK" : "NOT_OK",
      geometry_axiom: alpha.percent === "100%" ? "OK" : "NOT_OK",
      beta_axiom: beta.code === "OK" ? "OK" : "NOT_OK",
      vector_axiom: alpha.vec ? "OK" : "NOT_OK"
    };
  },

  formulas(alpha, beta) {
    return {
      relativity: `E = m * c^2`,
      gamma_factor: `γ = 1 / sqrt(1 - (v^2 / c^2))`,
      geometry_circle: `A = π * r^2`,
      geometry_sphere: `V = 4/3 * π * r^3`,
      math_linear: `f(x) = mx + b`,
      math_quad: `f(x) = ax^2 + bx + c`,
      iki1uc_vector: `V3 = α * β * γ`,
      alpha_degree: alpha.degree,
      alpha_percent: alpha.percent,
      beta_code: beta.code,
      beta_tech: beta.tech
    };
  }
};
