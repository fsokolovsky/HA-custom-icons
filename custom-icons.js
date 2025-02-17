var icons = {
  "nest_mini":[0,-960,960,960,"M290.77-410.96q11.65 0 20.54-8.69 8.88-8.7 8.88-20.35 0-11.65-8.88-20.54-8.89-8.88-20.54-8.88-11.65 0-20.35 8.88-8.69 8.89-8.69 20.54 0 11.65 8.69 20.35 8.7 8.69 20.35 8.69Zm126.15 0q11.66 0 20.54-8.69 8.89-8.7 8.89-20.35 0-11.65-8.89-20.54-8.88-8.88-20.54-8.88-11.65 0-20.34 8.88-8.7 8.89-8.7 20.54 0 11.65 8.7 20.35 8.69 8.69 20.34 8.69Zm126.16 0q11.65 0 20.54-8.69 8.88-8.7 8.88-20.35 0-11.65-8.88-20.54-8.89-8.88-20.54-8.88-11.66 0-20.35 8.88-8.69 8.89-8.69 20.54 0 11.65 8.69 20.35 8.69 8.69 20.35 8.69Zm126.15 0q11.65 0 20.54-8.69 8.88-8.7 8.88-20.35 0-11.65-8.88-20.54-8.89-8.88-20.54-8.88-11.65 0-20.35 8.88-8.69 8.89-8.69 20.54 0 11.65 8.69 20.35 8.7 8.69 20.35 8.69ZM479.95-83.08q-74.34 0-139.21-28.17-64.87-28.18-113.09-76.4-48.22-48.22-76.4-113.09-28.17-64.87-28.17-139.13 0-143.66 97.5-247.16 97.5-103.51 241.15-110.78v-122.16q0-7.8 5.26-13.24t13.04-5.44q7.78 0 13.2 5.44 5.42 5.44 5.42 13.24v122.16q143.27 7.27 240.77 110.78 97.5 103.5 97.5 247.16 0 74.26-28.17 139.13-28.18 64.87-76.4 113.09-48.22 48.22-113.14 76.4-64.92 28.17-139.26 28.17Zm.28-36.92q133.54 0 226.65-93.34Q800-306.69 800-440.23t-93.34-226.65Q613.31-760 479.77-760t-226.65 93.34Q160-573.31 160-439.77t93.34 226.65Q346.69-120 480.23-120ZM480-440Z "],
  }

async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["custom"] = { getIcon, getIconList };
