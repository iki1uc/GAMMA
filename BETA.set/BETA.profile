export const BETA_profile = {
  id: "BETA.profile",
  mode: "normalize",
  status: "active",

  normalize(alpha) {
    return {
      tech: alpha.tech || false,
      vec: alpha.vec || null,
      tmp: alpha.tmp || null,
      load: alpha.load || null,
      output: alpha.output || null,
      degree: alpha.degree || "0°",
      percent: alpha.percent || "0%",
      rotation: alpha.rotation || null
    };
  }
};
