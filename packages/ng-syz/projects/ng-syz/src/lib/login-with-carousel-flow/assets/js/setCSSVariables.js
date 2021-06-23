const cssVariables = {
  "--primary-color": "#4a5258",
  "--primary-color-rgb": "74, 82, 88",
  "--secondary-color": "#ff9100",
  "--secondary-color-rgb": "255, 145, 0",
  "--tertiary-color": "#50555a",
  "--tertiary-color-rgb": "80, 85, 90",
  "--primary-font-color": "#50555a",
  "--secondary-font-color": "#ffffff",
  "--tertiary-font-color": "#9BA5AE",
  "--content-background": "#f8fbfc",
  "--alternative-background": "#ffffff",
  "--alternative-background-rgb": "255, 255, 255",
  "--hover-color": "#D97B00",
  "--shadow-color": "rgba(250, 169, 50, 0.4)",
  "--light-color": "#eaeef0",
  "--status-yellow": "#FCCE0F",
  "--status-green": "#00BF85",
  "--status-red": "#EA124C",
  "--status-orange": "#FF9100",
  "--status-blue": "#269CF4"
}

document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;

  for (let index in cssVariables) {
      root.style.setProperty(index, cssVariables[index]);
  }
});
