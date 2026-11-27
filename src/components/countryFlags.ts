export interface FlagStyle {
  stripes: string[];
  tint: string;
  border: string;
}

const DEFAULT_FLAG: FlagStyle = {
  stripes: ["#1e489d", "#ffffff", "#02b58e"],
  tint: "#f8fafc",
  border: "#cbd5e1",
};

export const COUNTRY_FLAGS: Record<string, FlagStyle> = {
  // South East Asia (DrCertificate)
  Singapore: { stripes: ["#ef3340", "#ffffff"], tint: "#fff5f5", border: "#fecaca" },
  Indonesia: { stripes: ["#ce1126", "#ffffff"], tint: "#fff5f5", border: "#fecdd3" },
  Philippines: { stripes: ["#0038a8", "#ce1126", "#fcd116"], tint: "#eff6ff", border: "#bfdbfe" },
  Thailand: { stripes: ["#a51931", "#f4f5f8", "#2d2a4a"], tint: "#f8fafc", border: "#cbd5e1" },
  Vietnam: { stripes: ["#da251d", "#ffcd00"], tint: "#fef2f2", border: "#fecaca" },
  Malaysia: { stripes: ["#cc0001", "#ffffff", "#010066"], tint: "#eff6ff", border: "#bfdbfe" },
  Cambodia: { stripes: ["#032ea1", "#e00025", "#032ea1"], tint: "#eff6ff", border: "#c7d2fe" },
  Laos: { stripes: ["#ce1126", "#002868", "#ce1126"], tint: "#fef2f2", border: "#fecaca" },
  Myanmar: { stripes: ["#fecb00", "#34b233", "#ea2839"], tint: "#fefce8", border: "#fde68a" },
  Brunei: { stripes: ["#f7e017", "#ffffff", "#000000"], tint: "#fefce8", border: "#fde047" },

  // Europe & EEA (GetMedicalCertificate)
  Albania: { stripes: ["#e41e20", "#111111"], tint: "#fef2f2", border: "#fecaca" },
  Andorra: { stripes: ["#10069f", "#fedd00", "#d50032"], tint: "#fefce8", border: "#fde68a" },
  Austria: { stripes: ["#ed2939", "#ffffff", "#ed2939"], tint: "#fff5f5", border: "#fecaca" },
  Belgium: { stripes: ["#111111", "#fdda24", "#ef3340"], tint: "#fefce8", border: "#fde68a" },
  "Bosnia & Herzegovina": { stripes: ["#002395", "#fecb00"], tint: "#eff6ff", border: "#bfdbfe" },
  Bulgaria: { stripes: ["#ffffff", "#00966e", "#d62612"], tint: "#ecfdf5", border: "#a7f3d0" },
  Croatia: { stripes: ["#ff0000", "#ffffff", "#171796"], tint: "#eff6ff", border: "#bfdbfe" },
  Cyprus: { stripes: ["#ffffff", "#d57800", "#4e5b31"], tint: "#fff7ed", border: "#fed7aa" },
  Czechia: { stripes: ["#ffffff", "#d7141a", "#11457e"], tint: "#eff6ff", border: "#bfdbfe" },
  Denmark: { stripes: ["#c60c30", "#ffffff"], tint: "#fff5f5", border: "#fecdd3" },
  Estonia: { stripes: ["#0072ce", "#111111", "#ffffff"], tint: "#eff6ff", border: "#bfdbfe" },
  Finland: { stripes: ["#ffffff", "#002f6c"], tint: "#eff6ff", border: "#bfdbfe" },
  France: { stripes: ["#0055a4", "#ffffff", "#ef4135"], tint: "#eff6ff", border: "#bfdbfe" },
  Germany: { stripes: ["#111111", "#dd0000", "#ffce00"], tint: "#fefce8", border: "#fde68a" },
  Greece: { stripes: ["#0d5eaf", "#ffffff"], tint: "#eff6ff", border: "#bfdbfe" },
  Hungary: { stripes: ["#ce2939", "#ffffff", "#477050"], tint: "#ecfdf5", border: "#bbf7d0" },
  Iceland: { stripes: ["#02529c", "#ffffff", "#dc1e35"], tint: "#eff6ff", border: "#bfdbfe" },
  Ireland: { stripes: ["#169b62", "#ffffff", "#ff883e"], tint: "#ecfdf5", border: "#a7f3d0" },
  Italy: { stripes: ["#009246", "#ffffff", "#ce2b37"], tint: "#ecfdf5", border: "#bbf7d0" },
  Latvia: { stripes: ["#9e3039", "#ffffff", "#9e3039"], tint: "#fff5f5", border: "#fecdd3" },
  Liechtenstein: { stripes: ["#002b7f", "#ce1126"], tint: "#eff6ff", border: "#bfdbfe" },
  Lithuania: { stripes: ["#fdb913", "#006a44", "#c1272d"], tint: "#fefce8", border: "#fde68a" },
  Luxembourg: { stripes: ["#ed2939", "#ffffff", "#00a1de"], tint: "#f0f9ff", border: "#bae6fd" },
  Malta: { stripes: ["#ffffff", "#cf142b"], tint: "#fff5f5", border: "#fecaca" },
  Moldova: { stripes: ["#0046ae", "#ffd200", "#cc092f"], tint: "#fefce8", border: "#fde68a" },
  Monaco: { stripes: ["#ce1126", "#ffffff"], tint: "#fff5f5", border: "#fecaca" },
  Montenegro: { stripes: ["#c40308", "#d4af37"], tint: "#fef2f2", border: "#fecaca" },
  Netherlands: { stripes: ["#ae1c28", "#ffffff", "#21468b"], tint: "#eff6ff", border: "#bfdbfe" },
  "North Macedonia": { stripes: ["#d20000", "#ffe600"], tint: "#fef2f2", border: "#fecaca" },
  Norway: { stripes: ["#ba0c2f", "#ffffff", "#00205b"], tint: "#eff6ff", border: "#bfdbfe" },
  Poland: { stripes: ["#ffffff", "#dc143c"], tint: "#fff5f5", border: "#fecdd3" },
  Portugal: { stripes: ["#006600", "#ff0000", "#ffcc00"], tint: "#ecfdf5", border: "#bbf7d0" },
  Romania: { stripes: ["#002b7f", "#fcd116", "#ce1126"], tint: "#fefce8", border: "#fde68a" },
  "San Marino": { stripes: ["#ffffff", "#5eb6e4"], tint: "#f0f9ff", border: "#bae6fd" },
  Serbia: { stripes: ["#c6363c", "#0c4076", "#ffffff"], tint: "#eff6ff", border: "#bfdbfe" },
  Slovakia: { stripes: ["#ffffff", "#0b4ea2", "#ee1c25"], tint: "#eff6ff", border: "#bfdbfe" },
  Slovenia: { stripes: ["#ffffff", "#005da4", "#ed1c24"], tint: "#eff6ff", border: "#bfdbfe" },
  Spain: { stripes: ["#aa151b", "#f1bf00", "#aa151b"], tint: "#fefce8", border: "#fde68a" },
  Sweden: { stripes: ["#006aa7", "#fecc00"], tint: "#eff6ff", border: "#bfdbfe" },
  Switzerland: { stripes: ["#d52b1e", "#ffffff"], tint: "#fff5f5", border: "#fecaca" },
  Ukraine: { stripes: ["#0057b7", "#ffd700"], tint: "#eff6ff", border: "#bfdbfe" },
  "United Kingdom": { stripes: ["#012169", "#ffffff", "#c8102e"], tint: "#eff6ff", border: "#bfdbfe" },
};

export function getFlagStyle(country: string): FlagStyle {
  return COUNTRY_FLAGS[country] ?? DEFAULT_FLAG;
}
