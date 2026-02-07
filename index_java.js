const awards = [
  {
    id: 1,
    value: "164 балла",
    description: "получено за ....",
    imageUrl: "",
  },
  {
    id: 2,
    value: "Начало пройдено",
    description: "получено за ....",
    imageUrl: "",
  },
  {
    id: 3,
    value: "планировщик",
    description: "получено за .....",
    imageUrl: "",
  },
  {
    id: 4,
    value: "за составление бизнес-архитектуры проекта",
    description: "получено за ......",
    imageUrl: "",
  },
  {
    id: 5,
    value: "лектор",
    description: "получено за ....",
    imageUrl: "",
  }
];

function createAwardCard(award) {
  const card = document.createElement('div');
  card.className = 'achievement-item';

  // Контейнер для изображения и текста
  const imageDiv = document.createElement('div');
  imageDiv.className = 'achievement-image';

  // Текст поверх изображения
  const valueOnImage = document.createElement('div');
  valueOnImage.className = 'achievement-image-value';
  valueOnImage.textContent = award.value;
  imageDiv.appendChild(valueOnImage);

  // Подсказка
  const descriptionTooltip = document.createElement('div');
  descriptionTooltip.className = 'achievement-description';
  descriptionTooltip.textContent = award.description;

  // Добавляем элементы в карточку
  card.appendChild(imageDiv);
  card.appendChild(descriptionTooltip);

  // Если есть изображение — устанавливаем как фон
  if (award.imageUrl) {
    imageDiv.style.backgroundImage = `url(${award.imageUrl})`;
    
    // Обработчик ошибки загрузки
    const img = new Image();
    img.src = award.imageUrl;
    img.onerror = () => {
      imageDiv.style.backgroundColor = '#2e3192';
    };
  } else {
    // Если URL нет — заливка по умолчанию
    imageDiv.style.backgroundColor = '#2e3192';
  }

  return card;
}

//ОТОБРАЖЕНИЕ НАГРАД
function renderAwards() {
  const container = document.getElementById('achievementsList');
  if (!container) return;

  awards.forEach(award => {
    const card = createAwardCard(award);
    container.appendChild(card);
  });
}

//ГОРИЗОНТАЛЬНАЯ ПРОКРУТКА
function setupHorizontalScroll() {
  const scrollContainer = document.querySelector('.achievements-scroll-container');
  if (!scrollContainer) return;

  scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += (e.deltaX || e.deltaY);
  }, { passive: false });
}

//ЗАГРУЗКА СТРАНИЦЫ
document.addEventListener('DOMContentLoaded', () => {
  renderAwards();
  setupHorizontalScroll();

  const portfolioBtn = document.querySelector('.button--outline');
  if (portfolioBtn) {
    portfolioBtn.addEventListener('click', () => {
      const workingProjects = document.querySelector('.section--working-projects');
      if (workingProjects) {
        workingProjects.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('Секция достижений не найдена');
      }
    });
  }
});