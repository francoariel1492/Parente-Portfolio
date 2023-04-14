const importAll = (r) => r.keys().map(r);

export const frontEnd = importAll(
  require.context("/public/icons/front", false, /\.svg$/)
);
export const backEnd = importAll(
  require.context("/public/icons/back", false, /\.svg$/)
);
export const dbSvg = importAll(require.context("/public/icons/db", false, /\.svg$/));
export const toolsSvg = importAll(
  require.context("/public/icons/tools", false, /\.svg$/)
);
export const social = importAll(
  require.context("/public/icons/social", false, /\.png$/)
);
export const certificates = importAll(
  require.context("/public/certificates", false, /\.png$/)
);
export const services = importAll(
  require.context("/public/services", false, /\.svg$/)
);