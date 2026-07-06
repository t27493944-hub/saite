const questions = {
  1: {
    name: 'Уровень 1 · Базовый',
    cls: 'l1',
    questions: [
      {
        text: 'В каком слове <strong>верно</strong> выделена буква, обозначающая ударный гласный звук?',
        options: ['тОрты', 'тортЫ', 'тОртЫ', 'Торты'],
        correct: 0
      },
      {
        text: 'В каком слове <strong>верно</strong> выделена буква, обозначающая ударный гласный звук?',
        options: ['звОнит', 'звонИт', 'звОнИт', 'Звонит'],
        correct: 1
      },
      {
        text: 'В каком слове <strong>верно</strong> выделена буква, обозначающая ударный гласный звук?',
        options: ['катАлог', 'каталОг', 'кАталог', 'Каталог'],
        correct: 1
      },
      {
        text: 'В каком слове <strong>верно</strong> выделена буква, обозначающая ударный гласный звук?',
        options: ['квАртал', 'квартАл', 'квАртАл', 'Квартал'],
        correct: 1
      },
      {
        text: 'В каком слове <strong>верно</strong> выделена буква, обозначающая ударный гласный звук?',
        options: ['бАловать', 'баловАть', 'балОвать', 'Балует'],
        correct: 0
      },
      {
        text: 'В каком слове <strong>верно</strong> выделена буква, обозначающая ударный гласный звук?',
        options: ['докумЕнт', 'дОкумент', 'документЫ', 'Документ'],
        correct: 0
      },
      {
        text: 'В каком слове <strong>верно</strong> выделена буква, обозначающая ударный гласный звук?',
        options: ['срЕдства', 'средствА', 'срЕдствА', 'Средства'],
        correct: 0
      },
      {
        text: 'В каком слове <strong>верно</strong> выделена буква, обозначающая ударный гласный звук?',
        options: ['шАрфы', 'шарфЫ', 'шАрфЫ', 'Шарфы'],
        correct: 0
      },
      {
        text: 'В каком слове <strong>верно</strong> выделена буква, обозначающая ударный гласный звук?',
        options: ['цепОчка', 'цЕпочка', 'цепочкА', 'Цепочка'],
        correct: 1
      },
      {
        text: 'В каком слове <strong>верно</strong> выделена буква, обозначающая ударный гласный звук?',
        options: ['щавЕль', 'щАвель', 'щавЕлЬ', 'Щавель'],
        correct: 0
      }
    ]
  },
  2: {
    name: 'Уровень 2 · Начальный',
    cls: 'l2',
    questions: [
      {
        text: 'В каком предложении вместо слова <strong>«ОДЕТЬ»</strong> нужно употребить <strong>«НАДЕТЬ»</strong>?',
        options: [
          'Мама <strong>одела</strong> ребёнка в тёплую куртку.',
          'Нужно <strong>одеть</strong> на себя тёплую шапку.',
          'Медсестра <strong>одела</strong> больного в чистую рубашку.',
          'Он <strong>одел</strong> собаку в попону.'
        ],
        correct: 1
      },
      {
        text: 'В каком предложении вместо слова <strong>«ЖИЛОЙ»</strong> нужно употребить <strong>«ЖИЛИЩНЫЙ»</strong>?',
        options: [
          'В городе строится новый <strong>жилой</strong> комплекс.',
          'У нас хорошие <strong>жилые</strong> условия.',
          'Это <strong>жилой</strong> дом.',
          'В <strong>жилой</strong> зоне запрещён проезд грузовиков.'
        ],
        correct: 1
      },
      {
        text: 'В каком предложении вместо слова <strong>«ЭФФЕКТНЫЙ»</strong> нужно употребить <strong>«ЭФФЕКТИВНЫЙ»</strong>?',
        options: [
          'Она вышла на сцену в <strong>эффектном</strong> платье.',
          'Этот способ оказался очень <strong>эффектным</strong>.',
          'Фокусник показал <strong>эффектный</strong> трюк.',
          'Балетмейстер поставил <strong>эффектный</strong> танец.'
        ],
        correct: 1
      },
      {
        text: 'В каком предложении вместо слова <strong>«ГОДОВОЙ»</strong> нужно употребить <strong>«ГОДОВАЛЫЙ»</strong>?',
        options: [
          'Подведён <strong>годовой</strong> баланс предприятия.',
          'Утверждён <strong>годовой</strong> отчёт.',
          'На лугу пасся <strong>годовой</strong> телёнок.',
          'Завершён <strong>годовой</strong> проект.'
        ],
        correct: 2
      },
      {
        text: 'В каком предложении вместо слова <strong>«БОЛОТНЫЙ»</strong> нужно употребить <strong>«БОЛОТИСТЫЙ»</strong>?',
        options: [
          'В лесу был <strong>болотный</strong> запах.',
          'Мы собирали <strong>болотную</strong> клюкву.',
          'Местность была <strong>болотной</strong> и сырой.',
          'Там растёт <strong>болотная</strong> трава.'
        ],
        correct: 2
      },
      {
        text: 'В каком предложении вместо слова <strong>«КАМЕННЫЙ»</strong> нужно употребить <strong>«КАМЕНИСТЫЙ»</strong>?',
        options: [
          'У него было <strong>каменное</strong> сердце.',
          'Мы шли по <strong>каменной</strong> дорожке.',
          'Берег был <strong>каменным</strong> и обрывистым.',
          'У входа стоял <strong>каменный</strong> лев.'
        ],
        correct: 2
      },
      {
        text: 'В каком предложении вместо слова <strong>«ИСКУСНЫЙ»</strong> нужно употребить <strong>«ИСКУССТВЕННЫЙ»</strong>?',
        options: [
          'Он был <strong>искусным</strong> мастером.',
          'Ювелир сделал <strong>искусную</strong> брошь.',
          'В музее были <strong>искусные</strong> цветы.',
          'Это <strong>искусный</strong> рисунок.'
        ],
        correct: 2
      },
      {
        text: 'В каком предложении вместо слова <strong>«ДВОЙНОЙ»</strong> нужно употребить <strong>«ДВОЙСТВЕННЫЙ»</strong>?',
        options: [
          'Он получил <strong>двойную</strong> порцию мороженого.',
          'У неё было <strong>двойное</strong> чувство радости и грусти.',
          'Мы сделали <strong>двойную</strong> работу.',
          'Это <strong>двойное</strong> стекло.'
        ],
        correct: 1
      },
      {
        text: 'В каком предложении вместо слова <strong>«ВРАЖДЕБНЫЙ»</strong> нужно употребить <strong>«ВРАЖЕСКИЙ»</strong>?',
        options: [
          'У него был <strong>враждебный</strong> взгляд.',
          'Мы вошли в <strong>враждебный</strong> лагерь.',
          'Она чувствовала <strong>враждебное</strong> отношение.',
          'Его тон был <strong>враждебным</strong>.'
        ],
        correct: 1
      },
      {
        text: 'В каком предложении вместо слова <strong>«ВОДНЫЙ»</strong> нужно употребить <strong>«ВОДЯНИСТЫЙ»</strong>?',
        options: [
          'Мы отправились в <strong>водное</strong> путешествие.',
          'Суп получился <strong>водным</strong> и невкусным.',
          'Это <strong>водный</strong> вид спорта.',
          'В парке был <strong>водный</strong> аттракцион.'
        ],
        correct: 1
      }
    ]
  },
  3: {
    name: 'Уровень 3 · Средний',
    cls: 'l3',
    questions: [
      {
        text: 'Укажите предложение с <strong>грамматической ошибкой</strong> (нарушением синтаксической нормы).',
        options: [
          'Благодаря усилиям тренера команда выиграла.',
          'Согласно расписания мы пришли вовремя.',
          'По окончании школы он поступил в университет.',
          'Вопреки предсказаниям погода наладилась.'
        ],
        correct: 1
      },
      {
        text: 'В каком варианте <strong>неверно</strong> образована форма слова?',
        options: [
          'пять <strong>апельсинов</strong>',
          'пара <strong>чулков</strong>',
          'несколько <strong>полотенец</strong>',
          'много <strong>яблок</strong>'
        ],
        correct: 1
      },
      {
        text: 'В каком словосочетании нарушена грамматическая норма?',
        options: [
          'более <strong>красивее</strong>',
          'самый <strong>красивый</strong>',
          'менее <strong>красивый</strong>',
          'красивейший'
        ],
        correct: 0
      },
      {
        text: 'Укажите предложение с грамматической ошибкой.',
        options: [
          'Я люблю не только читать, а также писать.',
          'Он как читает, так и пишет отлично.',
          'Она умеет не только петь, но и танцевать.',
          'Книга интересна не только детям, но и взрослым.'
        ],
        correct: 0
      },
      {
        text: 'В каком предложении <strong>неправильно</strong> согласовано подлежащее со сказуемым?',
        options: [
          'Большинство учеников сдали экзамен.',
          'Много книг лежало на столе.',
          'Несколько студентов опоздало на лекцию.',
          'Ряд домов стоял на краю деревни.'
        ],
        correct: 2
      },
      {
        text: 'В каком варианте <strong>неверно</strong> образована форма слова?',
        options: [
          'лягте <strong>на пол</strong>',
          'полощите <strong>бельё</strong>',
          'ехайте <strong>быстрее</strong>',
          'жгите <strong>костёр</strong>'
        ],
        correct: 2
      },
      {
        text: 'Укажите предложение с грамматической ошибкой.',
        options: [
          'Мы увидели заходящее солнце.',
          'Подъезжая к станции, у меня слетела шляпа.',
          'Он писал, волнуясь и переживая.',
          'Постучав, он вошёл в комнату.'
        ],
        correct: 1
      },
      {
        text: 'В каком варианте <strong>неверно</strong> образована форма родительного падежа?',
        options: [
          'нет <strong>килограммов</strong>',
          'нет <strong>граммов</strong>',
          'нет <strong>помидоров</strong>',
          'нет <strong>мандаринов</strong>'
        ],
        correct: 1
      },
      {
        text: 'Укажите предложение с <strong>неправильным</strong> употреблением падежа.',
        options: [
          'Оплатить проезд.',
          'Уделять внимание на детали.',
          'Отзыв о книге.',
          'Преимущество перед противником.'
        ],
        correct: 1
      },
      {
        text: 'В каком предложении <strong>нарушена</strong> видовая соотнесённость глаголов?',
        options: [
          'Он открыл окно и сел за стол.',
          'Она брала книгу и прочитала её за ночь.',
          'Мы гуляли и разговаривали.',
          'Я встал, умылся и позавтракал.'
        ],
        correct: 1
      }
    ]
  },
  4: {
    name: 'Уровень 4 · Продвинутый',
    cls: 'l4',
    questions: [
      {
        text: 'В каком слове на месте пропуска пишется <strong>НН</strong>?',
        options: [
          'ветре_ый день',
          'подли_ая правда',
          'серебря_ый браслет',
          'масля_ый блин'
        ],
        correct: 1
      },
      {
        text: 'В каком слове на месте пропуска пишется <strong>Е</strong>?',
        options: [
          'заж_гать',
          'зап_реть',
          'бл_стеть',
          'ст_лить'
        ],
        correct: 2
      },
      {
        text: 'В каком варианте <strong>НЕ</strong> пишется <strong>слитно</strong>?',
        options: [
          'Он (не)мог прийти.',
          '(Не)взирая на усталость, он работал.',
          'Это был (не)лёгкий, а тяжёлый путь.',
          'Вовсе (не)простое дело.'
        ],
        correct: 1
      },
      {
        text: 'В каком слове на месте пропуска пишется <strong>Ь</strong>?',
        options: [
          'береч_ здоровье',
          'много задач_',
          'горячий борщ_',
          'выйти замуж_'
        ],
        correct: 0
      },
      {
        text: 'В каком предложении нужно поставить <strong>тире</strong>?',
        options: [
          'Жизнь прекрасна и удивительна.',
          'Он хороший человек.',
          'Москва столица России.',
          'Лес словно сказка.'
        ],
        correct: 2
      },
      {
        text: 'В каком слове на месте пропуска пишется <strong>ПРЕ-</strong>?',
        options: [
          'пр_бежать',
          'пр_открыть',
          'пр_красный',
          'пр_сесть'
        ],
        correct: 2
      },
      {
        text: 'В каком слове пишется <strong>И</strong>?',
        options: [
          'ц_ркуль',
          'ц_ганский',
          'ц_плёнок',
          'на ц_почках'
        ],
        correct: 0
      },
      {
        text: 'В каком слове <strong>не</strong> пишется <strong>Ъ</strong>?',
        options: [
          'об_явление',
          'с_экономить',
          'раз_езд',
          'пред_юбилейный'
        ],
        correct: 1
      },
      {
        text: 'В каком слове на месте пропуска пишется <strong>О</strong>?',
        options: [
          'ш_лотка',
          'ш_рох',
          'ш_пот',
          'ш_колад'
        ],
        correct: 2
      },
      {
        text: 'В каком предложении нужно поставить <strong>запятую</strong>?',
        options: [
          'Он взял книгу и начал читать.',
          'Я купил хлеб молоко и сыр.',
          'Солнце встало и птицы запели.',
          'Ветер стих и стало тихо.'
        ],
        correct: 1
      }
    ]
  },
  5: {
    name: 'Уровень 5 · Эксперт',
    cls: 'l5',
    questions: [
      {
        text: 'В каком слове <strong>верно</strong> выделена буква, обозначающая ударный гласный звук?',
        options: ['нарвАла', 'нАлита', 'ободрАла', 'крАлась'],
        correct: 0
      },
      {
        text: 'В каком предложении вместо слова <strong>«УПЛАТИТЬ»</strong> нужно употребить <strong>«ОПЛАТИТЬ»</strong>?',
        options: [
          'Необходимо <strong>уплатить</strong> налоги.',
          'Он <strong>уплатил</strong> за билет в кассе.',
          'Нужно <strong>уплатить</strong> штраф.',
          'Следует <strong>уплатить</strong> проезд.'
        ],
        correct: 3
      },
      {
        text: 'Укажите предложение с <strong>грамматической ошибкой</strong>.',
        options: [
          'Благодаря заботе врачей он выздоровел.',
          'Согласно приказу мы вышли на работу.',
          'Вопреки ожиданий спектакль сорвался.',
          'Наперекор судьбе он добился успеха.'
        ],
        correct: 2
      },
      {
        text: 'В каком слове на месте пропуска пишется <strong>НН</strong>?',
        options: [
          'печё_ый картофель',
          'реза_ые овощи',
          'некоше_ый луг',
          'броше_ый камень'
        ],
        correct: 3
      },
      {
        text: 'Укажите номер предложения, в котором <strong>нужно</strong> поставить запятую.',
        options: [
          'Звезды мерцали и таяли в вышине.',
          'Дождь шумел за окнами и навевал тоску.',
          'Солнце спряталось за тучи и стало прохладно.',
          'Она взяла зонт и вышла на улицу.'
        ],
        correct: 2
      },
      {
        text: 'В каком варианте <strong>неверно</strong> образована форма числительного?',
        options: [
          'к <strong>пятистам</strong> рублям',
          'с <strong>шестьюстами</strong> учениками',
          'около <strong>трёхсот</strong> книг',
          'более <strong>семьсот</strong> человек'
        ],
        correct: 3
      },
      {
        text: 'В каком предложении <strong>нарушены</strong> нормы управления?',
        options: [
          'Отзыв о спектакле был положительным.',
          'Рецензия на фильм вышла в газете.',
          'Указать о недостатках в работе.',
          'Памятник Пушкину стоит в центре.'
        ],
        correct: 2
      },
      {
        text: 'В каком слове на месте пропуска пишется <strong>Ы</strong>?',
        options: [
          'меж_нститутский',
          'сверх_нтересный',
          'пред_стория',
          'без_мянный'
        ],
        correct: 2
      },
      {
        text: 'Укажите предложение с <strong>пунктуационной ошибкой</strong>.',
        options: [
          'Всё: лица, одежда, движения — было ярким.',
          'Он был, казалось, чем-то расстроен.',
          'Я не знал что делать.',
          'Пришла весна, и природа ожила.'
        ],
        correct: 2
      },
      {
        text: 'В каком предложении <strong>не</strong> пишется <strong>слитно</strong>?',
        options: [
          'Это (вовсе) не интересная книга.',
          'Он (не) смотря под ноги бежал.',
          'Это отнюдь (не) лёгкий выбор.',
          'Письмо было (не) дописано.'
        ],
        correct: 3
      }
    ]
  }
};

let state = {
  currentLevel: null,
  currentQuestion: 0,
  answers: [],
  finished: false
};

const levelSelection = document.getElementById('levelSelection');
const questionArea = document.getElementById('questionArea');
const resultScreen = document.getElementById('resultScreen');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const questionCounter = document.getElementById('questionCounter');
const levelTag = document.getElementById('levelTag');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const restartBtn = document.getElementById('restartBtn');

document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    startLevel(parseInt(btn.dataset.level));
  });
});

function startLevel(level) {
  state.currentLevel = level;
  state.currentQuestion = 0;
  state.answers = [];
  state.finished = false;

  const qs = questions[level].questions;
  state.answers = new Array(qs.length).fill(null);

  levelSelection.style.display = 'none';
  questionArea.classList.add('active');
  resultScreen.classList.remove('active');

  renderQuestion();
}

function renderQuestion() {
  const level = state.currentLevel;
  const qs = questions[level].questions;
  const idx = state.currentQuestion;
  const q = qs[idx];

  questionCounter.textContent = `Вопрос ${idx + 1} из ${qs.length}`;
  levelTag.textContent = questions[level].name;
  levelTag.className = `level-tag ${questions[level].cls}`;
  questionText.innerHTML = q.text;

  const total = qs.length;
  const answered = state.answers.filter(a => a !== null).length;
  progressFill.style.width = `${(answered / total) * 100}%`;

  optionsContainer.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = opt;
    btn.dataset.index = i;

    if (state.answers[idx] !== null) {
      btn.classList.add('disabled');
      if (i === q.correct) btn.classList.add('correct');
      if (state.answers[idx] === i && i !== q.correct) btn.classList.add('wrong');
      if (state.answers[idx] === i) btn.classList.add('selected');
    }

    btn.addEventListener('click', () => selectOption(i));
    optionsContainer.appendChild(btn);
  });

  prevBtn.disabled = idx === 0;
  const isLast = idx === qs.length - 1;
  nextBtn.style.display = isLast ? 'none' : 'inline-block';
  finishBtn.style.display = isLast ? 'inline-block' : 'none';
}

function selectOption(index) {
  const level = state.currentLevel;
  const qs = questions[level].questions;
  const idx = state.currentQuestion;

  if (state.answers[idx] !== null || state.finished) return;

  state.answers[idx] = index;

  const q = qs[idx];
  const allOptions = optionsContainer.querySelectorAll('.option');

  allOptions.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === q.correct) btn.classList.add('correct');
    if (i === index && i !== q.correct) btn.classList.add('wrong');
    if (i === index) btn.classList.add('selected');
  });

  const total = qs.length;
  const answered = state.answers.filter(a => a !== null).length;
  progressFill.style.width = `${(answered / total) * 100}%`;
}

prevBtn.addEventListener('click', () => {
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    renderQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  const qs = questions[state.currentLevel].questions;
  const idx = state.currentQuestion;
  if (state.answers[idx] === null) return;
  if (state.currentQuestion < qs.length - 1) {
    state.currentQuestion++;
    renderQuestion();
  }
});

finishBtn.addEventListener('click', showResults);

restartBtn.addEventListener('click', () => {
  levelSelection.style.display = 'block';
  questionArea.classList.remove('active');
  resultScreen.classList.remove('active');
});

function showResults() {
  const qs = questions[state.currentLevel].questions;
  const correct = state.answers.filter((a, i) => a === qs[i].correct).length;
  const wrong = state.answers.filter(a => a !== null).length - correct;
  const total = qs.length;
  const percent = Math.round((correct / total) * 100);

  document.getElementById('statCorrect').textContent = correct;
  document.getElementById('statWrong').textContent = wrong;
  document.getElementById('statPercent').textContent = `${percent}%`;
  document.getElementById('resultScore').textContent = `${correct}/${total}`;

  let icon, title, detail;
  if (percent === 100) {
    icon = '🏆'; title = 'Идеально!'; detail = 'Вы набрали максимум баллов!';
  } else if (percent >= 80) {
    icon = '🎉'; title = 'Отличный результат!'; detail = 'Вы хорошо подготовлены!';
  } else if (percent >= 60) {
    icon = '👍'; title = 'Хороший результат!'; detail = 'Стоит повторить некоторые темы.';
  } else if (percent >= 40) {
    icon = '💪'; title = 'Неплохо!'; detail = 'Нужно больше практики.';
  } else {
    icon = '📖'; title = 'Нужно учить!'; detail = 'Попробуйте ещё раз.';
  }

  document.getElementById('resultIcon').textContent = icon;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultDetail').textContent = detail;

  questionArea.classList.remove('active');
  resultScreen.classList.add('active');
}
