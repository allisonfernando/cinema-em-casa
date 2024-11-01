let currentSlide = 0; // Índice do slide atual
const totalSlides = 6; // Total de slides

function showSlide(index) {
    const slides = document.querySelectorAll('#carousel img');
    const indicators = document.querySelectorAll('.indicator');

    currentSlide = (index + totalSlides) % totalSlides; // Mantém o índice dentro do limite
    const offset = -currentSlide * (100 / totalSlides); // Ajusta a posição do carrossel
    document.querySelector('#carousel').style.transform = `translateX(${offset}%)`; // Usar % para movimentar corretamente

    // Atualiza os indicadores
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

// Cria os indicadores
const indicatorsContainer = document.getElementById('indicators');
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => showSlide(i));
    indicatorsContainer.appendChild(indicator);
}

// Intervalo automático para mudar os slides do carrossel a cada 4 segundos
setInterval(() => {
    showSlide(currentSlide + 1);
}, 9000);

// Inicializa o primeiro slide
showSlide(currentSlide);
