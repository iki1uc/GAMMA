import { AXIOM_THIRD } from "./tmp.a";
import { V3_THIRD } from "./V3_THIRD.js";

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
