// Helper para acceder al elemento de salida
const output = id => document.getElementById(id);

// --- Funciones por cada campo ---

function calcularTexto(el) {
  const out = output('outTxt');
  out.textContent = el.value.length > 5
    ? '👍 Muy largo'
    : '✍️ Escribe más...';
}

function enfocarTexto() {
  output('outTxt').classList.remove('highlight');
}

function desenfocarTexto() {
  output('outTxt').classList.add('highlight');
}

function calcularEmail(el) {
  const out = output('outEmail');
  out.textContent = el.value.includes('@')
    ? '✅ Email válido'
    : '❌ Falta @';
}

function calcularNumero(el) {
  const v = +el.value;
  const out = output('outNum');
  out.textContent = (v >= 1 && v <= 10)
    ? `Número ok: ${v}`
    : 'Número fuera de rango';
}

function calcularPassword(el) {
  output('outPwd').textContent = el.value.length >= 8
    ? '🔒 Contraseña segura'
    : '⚠️ Mínimo 8 caracteres';
}

function calcularFecha(el) {
  const d = new Date(el.value);
  output('outDate').textContent = (d > new Date())
    ? '🚀 Fecha futura'
    : '📅 Fecha pasada o hoy';
}

function calcularHora(el) {
  output('outTime').textContent = `Hora: ${el.value}`;
}

function calcularArchivo(el) {
  const out = output('outFile');
  out.textContent = el.files.length
    ? `Archivo: ${el.files[0].name}`
    : 'Ningún archivo';
}

function calcularRango(el) {
  let rango = el.value;
  // Actualizar el párrafo con el valor actual del rango
  document.getElementById('rangeValue').innerHTML = `Valor actual: ${el.value}`;
}

function calcularColor(el) {
  document.body.style.backgroundColor = el.value;
  output('outColor').textContent = el.value;
}

function calcularTelefono(el) {
  output('outTel').textContent = /^\d{9,}$/.test(el.value)
    ? '📞 Teléfono OK'
    : '❌ Mínimo 9 dígitos';
}

function calcularURL(el) {
  output('outUrl').textContent = el.value.startsWith('http')
    ? '🌐 URL OK'
    : '❌ Debe iniciar con http';
}

function calcularCheckbox() {
  const chks = document.querySelectorAll('input[name="chk"]');
  const sel = [...chks].filter(x => x.checked).map(x => x.value);
  output('outChk').textContent = sel.length
    ? `Seleccionados: ${sel.join(', ')}`
    : 'Ninguno';
}

function calcularRadio() {
  const sel = document.querySelector('input[name="rad"]:checked');
  output('outRad').textContent = sel
    ? `Opción: ${sel.value}`
    : '';
}

function calcularSelect(el) {
  output('outSel').textContent = el.value
    ? `Has elegido ${el.value}`
    : '';
}

function calcularTextarea(el) {
  const out = output('outTa');
  if (el.value.length > 20) {
    out.textContent = '📖 Texto largo';
  }
}

function focoTextarea() {
  output('outTa').textContent = '⤴️ Ahora escribe...';
}

function desenfoqueTextarea() {
  output('outTa').textContent = '';
}

function eventoBoton() {
  output('outBtn').textContent = '¡Click!';
}

// --- Formulario ---

function validarEnvio(evt) {
  evt.preventDefault();
  const txt = document.getElementById('txt'),
    email = document.getElementById('email'),
    out = output('outForm');

  if (txt.value && email.value.includes('@')) {
    out.textContent = '✅ Formulario enviado!';
    out.className = 'alert alert-success';
  } else {
    out.textContent = '⚠️ Completa los campos obligatorios';
    out.className = 'alert alert-warning';
  }
  out.classList.remove('d-none');
}

function limpiarForm() {
  document.querySelectorAll('.form-text').forEach(d => d.textContent = '');
  const out = output('outForm');
  out.classList.add('d-none');
  document.body.style.backgroundColor = '';
}

// --- Registrar listeners tras cargar DOM ---

document.addEventListener('DOMContentLoaded', () => {
  // Texto corto
  document.getElementById('txt')
    .addEventListener('input', e => calcularTexto(e.target));
  document.getElementById('txt')
    .addEventListener('focus', enfocarTexto);
  document.getElementById('txt')
    .addEventListener('blur', desenfocarTexto);

  // Email
  document.getElementById('email')
    .addEventListener('change', e => calcularEmail(e.target));

  // Número
  document.getElementById('num')
    .addEventListener('input', e => calcularNumero(e.target));

  // Contraseña
  document.getElementById('pwd')
    .addEventListener('keyup', e => calcularPassword(e.target));

  // Fecha
  document.getElementById('date')
    .addEventListener('change', e => calcularFecha(e.target));

  // Hora
  document.getElementById('time')
    .addEventListener('change', e => calcularHora(e.target));

  // Archivo
  document.getElementById('file')
    .addEventListener('change', e => calcularArchivo(e.target));

  // Rango
  document.getElementById('rng')
    .addEventListener('input', e => calcularRango(e.target));

  // Color
  document.getElementById('color')
    .addEventListener('input', e => calcularColor(e.target));

  // Teléfono
  document.getElementById('tel')
    .addEventListener('keyup', e => calcularTelefono(e.target));

  // URL
  document.getElementById('url')
    .addEventListener('change', e => calcularURL(e.target));

  // Checkbox & Radio
  document.querySelectorAll('input[name="chk"]')
    .forEach(c => c.addEventListener('change', calcularCheckbox));
  document.querySelectorAll('input[name="rad"]')
    .forEach(r => r.addEventListener('change', calcularRadio));

  // Select
  document.getElementById('sel')
    .addEventListener('change', e => calcularSelect(e.target));

  // Textarea
  document.getElementById('ta')
    .addEventListener('focus', focoTextarea);
  document.getElementById('ta')
    .addEventListener('blur', desenfoqueTextarea);
  document.getElementById('ta')
    .addEventListener('input', e => calcularTextarea(e.target));

  // Botón
  document.getElementById('btn')
    .addEventListener('click', eventoBoton);

  // Formulario
  const form = document.getElementById('mainForm');
  form.addEventListener('submit', validarEnvio);
  form.addEventListener('reset', limpiarForm);
});
