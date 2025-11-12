// Elementos DOM
const oso = document.getElementById('oso');
const mensaje = document.getElementById('mensaje');
const boca = document.getElementById('boca');
const floresContainer = document.getElementById('floresContainer');
const btnReset = document.getElementById('btnReset');
const btnModoNocturno = document.getElementById('btnModoNocturno');

// Mensajes tiernos
const mensajesTiernos = [
    "¡Eres increíble! ❤️",
    "¡Me haces muy feliz! 🌸",
    "¡Eres mi persona favorita! 🐻",
    "¡Qué suerte tengo de tenerte! 💫",
    "¡Eres un sol radiante! ☀️",
    "¡Mi corazón late por ti! 💓",
    "¡Eres tan especial para mí! 🌟",
    "¡Eres la razón de mi sonrisa! 😊",
    "¡Eres mi tesoro más preciado! 💎",
    "¡Eres pura magia y alegría! ✨"
];

// Colores para las flores
const coloresFlores = [
    "#ff9eb5", "#ffb3d9", "#ffcccb", "#ffd700", "#98fb98", 
    "#add8e6", "#dda0dd", "#f0e68c", "#ffa07a", "#87ceeb"
];

// Estado
let modoNocturno = false;

// Función para mostrar mensaje tierno aleatorio
function mostrarMensajeTierno() {
    const mensajeAleatorio = mensajesTiernos[Math.floor(Math.random() * mensajesTiernos.length)];
    mensaje.textContent = mensajeAleatorio;
    
    // Efecto de aparición del mensaje
    mensaje.style.transform = "scale(0.8)";
    mensaje.style.opacity = "0";
    
    setTimeout(() => {
        mensaje.style.transition = "all 0.5s ease";
        mensaje.style.transform = "scale(1)";
        mensaje.style.opacity = "1";
    }, 100);
}

// Función para crear flores alrededor de la cabeza
function crearFlores() {
    // Limpiar flores anteriores
    floresContainer.innerHTML = '';
    
    // Crear 8 flores alrededor de la cabeza
    const radio = 150; // Radio del círculo de flores
    const cantidadFlores = 8;
    
    for (let i = 0; i < cantidadFlores; i++) {
        const angulo = (i / cantidadFlores) * 2 * Math.PI;
        const x = radio * Math.cos(angulo);
        const y = radio * Math.sin(angulo);
        
        const flor = document.createElement('div');
        flor.className = 'flor';
        flor.style.left = `calc(50% + ${x}px)`;
        flor.style.top = `calc(50% + ${y}px)`;
        
        // Color aleatorio para la flor
        const colorFlor = coloresFlores[Math.floor(Math.random() * coloresFlores.length)];
        
        // Crear pétalos
        for (let j = 0; j < 4; j++) {
            const petalo = document.createElement('div');
            petalo.className = 'petalo';
            petalo.style.background = colorFlor;
            flor.appendChild(petalo);
        }
        
        // Centro de la flor
        const centro = document.createElement('div');
        centro.className = 'centro';
        flor.appendChild(centro);
        
        // Retraso escalonado para la animación
        flor.style.animationDelay = `${i * 0.1}s, ${i * 0.2}s`;
        
        floresContainer.appendChild(flor);
    }
}

// Función para crear corazones
function crearCorazones() {
    // Crear 5 corazones
    for (let i = 0; i < 5; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon';
        
        // Posición aleatoria alrededor del oso
        const angulo = Math.random() * 2 * Math.PI;
        const distancia = 100 + Math.random() * 50;
        const x = distancia * Math.cos(angulo);
        const y = distancia * Math.sin(angulo);
        
        corazon.style.left = `calc(50% + ${x}px)`;
        corazon.style.top = `calc(50% + ${y}px)`;
        
        // Tamaño aleatorio
        const tamaño = 20 + Math.random() * 20;
        corazon.style.width = `${tamaño}px`;
        corazon.style.height = `${tamaño}px`;
        
        // Retraso aleatorio para la animación
        corazon.style.animationDelay = `${Math.random() * 0.5}s, ${Math.random() * 0.5}s`;
        
        floresContainer.appendChild(corazon);
        
        // Eliminar el corazón después de la animación
        setTimeout(() => {
            corazon.remove();
        }, 2500);
    }
}

// Función para activar la animación de salto
function activarSalto() {
    oso.classList.add('saltando');
    
    // Sonrisa durante el salto
    boca.classList.add('sonriendo');
    
    // Quitar la animación después de que termine
    setTimeout(() => {
        oso.classList.remove('saltando');
    }, 800);
    
    // Mantener la sonrisa un poco más
    setTimeout(() => {
        boca.classList.remove('sonriendo');
    }, 2000);
}

// Función para manejar el clic en el oso
function manejarClicOso() {
    // Efectos visuales
    crearFlores();
    crearCorazones();
    activarSalto();
    mostrarMensajeTierno();
    
    // Efecto de partículas (simulado con más corazones)
    setTimeout(crearCorazones, 500);
    setTimeout(crearCorazones, 1000);
}

// Función para reiniciar
function reiniciar() {
    // Limpiar flores y corazones
    floresContainer.innerHTML = '';
    
    // Restablecer mensaje
    mensaje.textContent = "¡Hola! Soy tu osito feliz ❤️";
    
    // Asegurarse de que el oso no esté saltando
    oso.classList.remove('saltando');
    boca.classList.remove('sonriendo');
}

// Función para alternar modo nocturno
function alternarModoNocturno() {
    modoNocturno = !modoNocturno;
    document.body.classList.toggle('noche', modoNocturno);
    
    btnModoNocturno.textContent = modoNocturno ? 'Modo Diurno' : 'Modo Nocturno';
}

// Event Listeners
oso.addEventListener('click', manejarClicOso);
btnReset.addEventListener('click', reiniciar);
btnModoNocturno.addEventListener('click', alternarModoNocturno);

// Seguimiento del cursor con los ojos
document.addEventListener('mousemove', (e) => {
    const ojos = document.querySelectorAll('.ojo');
    const pupilas = document.querySelectorAll('.pupila');
    
    ojos.forEach((ojo, index) => {
        const rect = ojo.getBoundingClientRect();
        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;
        
        const angulo = Math.atan2(e.clientY - centroY, e.clientX - centroX);
        const distancia = Math.min(8, 
            Math.sqrt(Math.pow(e.clientX - centroX, 2) + Math.pow(e.clientY - centroY, 2)) / 30
        );
        
        const pupila = pupilas[index];
        const offsetX = Math.cos(angulo) * distancia;
        const offsetY = Math.sin(angulo) * distancia;
        
        pupila.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

// Efecto de parpadeo ocasional
setInterval(() => {
    const ojos = document.querySelectorAll('.ojo');
    
    ojos.forEach(ojo => {
        ojo.style.height = '5px';
        
        setTimeout(() => {
            ojo.style.height = '40px';
        }, 200);
    });
}, 5000);