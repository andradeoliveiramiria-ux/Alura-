// Dados das Árvores (Simulando um Banco de Dados)
const trees = [
    {
        nome: "Pitangueira",
        tamanho: "2m a 4m",
        regioes: "Mata Atlântica",
        cuidados: "Sol pleno e regas regulares."
    },
    {
        nome: "Jabuticabeira",
        tamanho: "3m a 9m",
        regioes: "Sudeste e Sul",
        cuidados: "Necessita de muita água na floração."
    },
    {
        nome: "Goiabeira",
        tamanho: "3m a 6m",
        regioes: "Todo o Brasil",
        cuidados: "Poda de limpeza anual."
    }
];

const careSteps = [
    { titulo: "Preparação do Solo", texto: "Use adubo orgânico e garanta boa drenagem." },
    { titulo: "Irrigação", texto: "Nos primeiros meses, regue 3 vezes por semana." },
    { titulo: "Espaçamento", texto: "Mantenha 4 metros entre cada espécie frutífera." }
];

// Renderização Dinâmica
function init() {
    const grid = document.getElementById('tree-grid');
    const accordion = document.getElementById('care-accordion');

    // Renderizar Cards
    trees.forEach(tree => {
        grid.innerHTML += `
            <article class="tree-card">
                <h3>${tree.nome}</h3>
                <p><strong>Porte:</strong> ${tree.tamanho}</p>
                <p><strong>Ocorrência:</strong> ${tree.regioes}</p>
                <p><em>Dica: ${tree.cuidados}</em></p>
            </article>
        `;
    });

    // Renderizar Acordeão
    careSteps.forEach((step, index) => {
        accordion.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(this)">
                    ${step.titulo}
                </button>
                <div class="accordion-content">
                    <p>${step.texto}</p>
                </div>
            </div>
        `;
    });

    setupScrollReveal();
}

// Acessibilidade: Tamanho da Fonte
let currentFontSize = 100;
function changeFontSize(action) {
    currentFontSize += (action === 'increase' ? 10 : -10);
    document.body.style.fontSize = `${currentFontSize}%`;
}

// Acessibilidade: Alto Contraste
document.getElementById('contrast-toggle').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Lógica do Acordeão
function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    
    btn.setAttribute('aria-expanded', !isExpanded);
    content.classList.toggle('active');
}

// Scroll Reveal
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

window.onload = init;