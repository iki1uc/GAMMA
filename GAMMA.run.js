import { BETA_profile } from "./BETA.set/BETA.profile.js";
import { BETA_gamma } from "./BETA.set/BETA.gamma.js";
import { BETA_run } from "./BETA.set/BETA.run.js";

import { AXIOM_THIRD } from "./tmp.a";
import { V3_THIRD } from "./V3_THIRD.js";

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
    const wette = this.wette(normalized, beta);
    const slide = this.slide(normalized);

    return {
      id: "GAMMA.result",
      axiom,
      formulas,
      wette,
      slide,
      ready: beta.ready
    };
  },

  axioms(alpha, beta) {
    return {
      math_axiom: alpha.degree === "360°" ? "OK" : "NOT_OK",
      physics_axiom: alpha.rotation === "FULL" ? "OK" : "NOT_OK",
      geometry_axiom: alpha.percent === "100%" ? "OK" : "NOT_OK",
      beta_axiom: beta.code === "OK" ? "OK" : "NOT_OK",
      vector_axiom: alpha.vec ? "OK" : "NOT_OK",

      // --- 1/3 Axiom ---
      third_axiom: AXIOM_THIRD.value
    };
  },

  wette(alpha, beta) {
    return {
      degree_match: alpha.degree === beta.degree,
      percent_match: alpha.percent === beta.percent,
      tech_match: alpha.tech === (beta.tech === "OK"),
      vec_match: alpha.vec ? "OK" : "NOT_OK",
      tmp_match: alpha.tmp ? "OK" : "NOT_OK"
    };
  },

  slide(alpha) {
    return {
      slide_degree: parseInt(alpha.degree) / 360,
      slide_percent: parseInt(alpha.percent) / 100,
      slide_rotation: alpha.rotation === "FULL" ? 1 : 0
    };
  },

  formulas(alpha, beta) {
    const v3 = V3_THIRD();

    return {
      // --- 1/3 Axiom ---
      third_axiom_id: AXIOM_THIRD.id,
      third_axiom_value: AXIOM_THIRD.value,
      third_axiom_rule: AXIOM_THIRD.rule,
      third_axiom_effect: AXIOM_THIRD.effect,

      // --- 1/3 Vektor ---
      third_sum: v3.sum,      // = 1
      third_core: v3.core,    // = 1/27
      iki1uc_vector: `V3 = ${v3.core}`,

      // --- Physik / Mathe / Geometrie ---
      relativity: `E = m * c^2`,
      gamma_factor: `γ = 1 / sqrt(1 - (v^2 / c^2))`,
      geometry_circle: `A = π * r^2`,
      geometry_sphere: `V = 4/3 * π * r^3`,
      math_linear: `f(x) = mx + b`,
      math_quad: `f(x) = ax^2 + bx + c`,

      // --- ALPHA Werte ---
      alpha_degree: alpha.degree,
      alpha_percent: alpha.percent,
      alpha_vec: alpha.vec,
      alpha_tmp: alpha.tmp,
      alpha_rotation: alpha.rotation,

      // --- BETA Werte ---
      beta_code: beta.code,
      beta_tech: beta.tech,
      beta_ready: beta.ready
    };
  }
};
