function cambiarFondo() {
  const colores = ['#f3f0e0', '#e5dcc9', '#d1c1a7', '#c7a98b'];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
}
