
// Función para mostrar la sección seleccionada y ocultar las demás
function mostrarSeccion(seccionId) {
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => {
        pagina.classList.remove('active');
    });
    document.getElementById(seccionId).classList.add('active');
}

// Iniciar en la primera sección
document.addEventListener("DOMContentLoaded", function() {
    mostrarPaginaActual();
});

// Función para ocultar la página de inicio y mostrar la aplicación
function comenzarApp() {
    // Ocultar la página de inicio
    document.getElementById('pagina-inicio').style.display = 'none';

    // Mostrar el contenido de la aplicación (menu y la primera sección)
    document.querySelector('nav').style.display = 'block';  // Mostrar el menú
    mostrarSeccion('mcd-mcm');  // Mostrar la primera sección
}

// Iniciar mostrando solo la página de inicio
document.addEventListener("DOMContentLoaded", function() {
    // Al cargar, ocultamos el menú y las secciones de la app
    document.querySelector('nav').style.display = 'none'; // Ocultar el menú
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => {
        pagina.classList.remove('active'); // Ocultar todas las secciones
    });
});


// Funciones matemáticas aquí (MCD, MCM, Fibonacci, etc.)
// Función para calcular MCD
function calcularMCD() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultado = mcd(num1, num2);
    document.getElementById('resultado-mcd').textContent = `MCD: ${resultado}`;
}

// Algoritmo de Euclides para el MCD
function mcd(a, b) {
    return b === 0 ? a : mcd(b, a % b);
}

// Función para calcular MCM
function calcularMCM() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultado = (num1 * num2) / mcd(num1, num2);
    document.getElementById('resultado-mcm').textContent = `MCM: ${resultado}`;
}

// Función para calcular la sucesión de Fibonacci
function calcularFibonacci() {
    const n = parseInt(document.getElementById('fibo-n').value);
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.getElementById('resultado-fibonacci').textContent = `Fibonacci(${n}): ${fib[n]}`;
}

// Función para verificar si un número es primo
function esPrimo() {
    const num = parseInt(document.getElementById('num-primo').value);
    let esPrimo = true;
    if (num <= 1) esPrimo = false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    document.getElementById('resultado-primo').textContent = esPrimo ? `${num} es primo` : `${num} no es primo`;
}

// Función para realizar una división entera
function calcularDivision() {
    const dividendo = parseInt(document.getElementById('dividendo').value);
    const divisor = parseInt(document.getElementById('divisor').value);
    const cociente = Math.floor(dividendo / divisor);
    const residuo = dividendo % divisor;
    document.getElementById('resultado-division').textContent = `Cociente: ${cociente}, Residuo: ${residuo}`;
}

// Función para aplicar el teorema de Fermat/Euler
function calcularCongruencia() {
    const num = parseInt(document.getElementById('numero-cong').value);
    // Simplificación del Teorema de Fermat (aplicable cuando p es primo)
    const resultado = (Math.pow(num, num) % num);
    document.getElementById('resultado-congruencia').textContent = `Resultado de la congruencia: ${resultado}`;
}

// Función para verificar si un número es primo con retroalimentación
function esPrimo() {
    const num = parseInt(document.getElementById('num-primo').value);
    let esPrimo = true;
    let explicacion = `El número ${num} es considerado primo si solo es divisible entre 1 y él mismo.`;
    
    if (num <= 1) {
        esPrimo = false;
        explicacion += ` Como ${num} es menor o igual a 1, no es primo.`;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            explicacion += ` Se encontró que ${num} es divisible por ${i}, por lo tanto, no es primo.`;
            break;
        }
    }
    document.getElementById('resultado-primo').textContent = esPrimo ? `${num} es primo` : `${num} no es primo`;
    document.getElementById('explicacion-primo').textContent = explicacion;
}

// Función para realizar una división entera con retroalimentación
function calcularDivision() {
    const dividendo = parseInt(document.getElementById('dividendo').value);
    const divisor = parseInt(document.getElementById('divisor').value);
    const cociente = Math.floor(dividendo / divisor);
    const residuo = dividendo % divisor;
    
    let explicacion = `Para la división entera, tomamos el dividendo (${dividendo}) y el divisor (${divisor}). ` + 
                      `El cociente es el resultado de la división truncada, que es ${cociente}, y el residuo es ${residuo}, ` + 
                      `que es lo que sobra después de dividir.`;
    
    document.getElementById('resultado-division').textContent = `Cociente: ${cociente}, Residuo: ${residuo}`;
    document.getElementById('explicacion-division').textContent = explicacion;
}

// Función para aplicar el teorema de Fermat/Euler con retroalimentación
function calcularCongruencia() {
    const num = parseInt(document.getElementById('numero-cong').value);
    // Simplificación del Teorema de Fermat (aplicable cuando p es primo)
    const resultado = (Math.pow(num, num) % num);
    
    let explicacion = `El teorema de Fermat nos dice que para cualquier número primo p, ` + 
                      `y cualquier número a no divisible por p, la congruencia a^(p-1) ≡ 1 (mod p) es válida. ` + 
                      `Aquí estamos calculando el resultado usando una simplificación del teorema.`;
    
    document.getElementById('resultado-congruencia').textContent = `Resultado de la congruencia: ${resultado}`;
    document.getElementById('explicacion-congruencia').textContent = explicacion;
}

const secciones = ['mcd-mcm', 'fibonacci', 'numeros-primos', 'divisiones-enteras', 'congruencias', 'presentcion'];
let indiceActual = 0; // Controla la página activa

// Función para mostrar la sección actual con animación
function mostrarPaginaActual() {
    // Ocultar todas las páginas con un pequeño retraso para la transición
    secciones.forEach(seccion => {
        const pagina = document.getElementById(seccion);
        if (pagina) {
            pagina.classList.remove('active');
        }
    });

    // Mostrar la página actual con un ligero retraso para permitir la animación
    setTimeout(() => {
        const paginaActual = document.getElementById(secciones[indiceActual]);
        if (paginaActual) {
            paginaActual.classList.add('active');
        }
    }, 200); // Retraso de 200ms para la transición
}

// Función para ir a la página siguiente
function siguientePagina() {
    if (indiceActual < secciones.length - 1) {
        indiceActual++;
        mostrarPaginaActual();
    }
}

// Función para ir a la página anterior
function anteriorPagina() {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarPaginaActual();
    }
}

