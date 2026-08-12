import { ANKER } from "./ANKER.raw";
import { FIT } from "./fit.tmp";
import { HELP } from "./help.tmp";
import { IN } from "./in.tmp";
import { UP } from "./up.tmp";

import { AXIOM as AXIOM_A } from "./tmp.a";
import { AXIOM_E } from "./tmp.e";
import { AXIOM_G } from "./tmp.g";
import { AXIOM_H } from "./tmp.h";
import { AXIOM_O } from "./tmp.o";
import { AXIOM_S } from "./tmp.s";

export const ALLXALL = {
  id: "GAMMA.ALLXALL",
  status: "active",

  connect(alpha, beta, gamma) {
    IN.alpha_raw = alpha;
    IN.alpha_norm = gamma.normalized;

    FIT.alpha_fit = gamma.axiom.math_axiom === "OK" ? 1 : 0;
    FIT.beta_fit = gamma.axiom.beta_axiom === "OK" ? 1 : 0;
    FIT.gamma_fit = gamma.ready ? 1 : 0;

    HELP.alpha_missing = gamma.axiom.math_axiom === "OK" ? [] : ["degree != 360°"];
    HELP.beta_missing = gamma.axiom.beta_axiom === "OK" ? [] : ["beta.code != OK"];
    HELP.gamma_missing = gamma.ready ? [] : ["not ready"];

    AXIOM_A.valid = gamma.axiom.math_axiom === "OK";
    AXIOM_E.valid = gamma.axiom.physics_axiom === "OK";
    AXIOM_G.valid = gamma.axiom.geometry_axiom === "OK";
    AXIOM_H.valid = gamma.axiom.vector_axiom === "OK";
    AXIOM_O.valid = gamma.ready;
    AXIOM_S.valid = gamma.ready;

    ANKER.vector = gamma.formulas.iki1uc_vector;
    ANKER.degree = gamma.formulas.alpha_degree;
    ANKER.percent = gamma.formulas.alpha_percent;
    ANKER.ready = gamma.ready;

    UP.updated = true;
    UP.last_update = Date.now();

    return {
      IN,
      FIT,
      HELP,
      AXIOM_A,
      AXIOM_E,
      AXIOM_G,
      AXIOM_H,
      AXIOM_O,
      AXIOM_S,
      ANKER,
      UP
    };
  }
};
