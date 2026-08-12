import { AXIOM_THIRD } from "./tmp.a";
import { V3_THIRD } from "./V3_THIRD.js";

formulas(alpha, beta) {
  const v3 = V3_THIRD();

  return {
    third_axiom: AXIOM_THIRD.value,
    third_sum: v3.sum,
    third_core: v3.core,
    iki1uc_vector: `V3 = ${v3.core}`,
    alpha_degree: alpha.degree,
    alpha_percent: alpha.percent,
    beta_code: beta.code,
    beta_tech: beta.tech
  };
}
