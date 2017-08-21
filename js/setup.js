'use strict';

// объект с массивами характеристик персонажей
var WIZARD_CHARACTERISTICS = {
  names: [
    'Иван',
    'Хуан Себастьян',
    'Мария', 'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],
  surnames: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],
  coatColors: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  eyesColors: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]
};
// количество магов
var WIZARDS_COUNT = 4;

var popupSetup = document.querySelector('.setup');
// переменные для вывода персонажей на страницу
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// функция возвращает случайное целое число
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// функция возвращает случайный элемент массива. В параметр передаётся имя массива
var getRandomArrayElement = function (array) {
  var elementIndex = getRandomNumber(0, array.length);
  var element = array[elementIndex];
  return element;
};

// функция возвращает сгенерированный объект персонажа
var getRandomWizard = function () {
  var wizardObject = {
    name: getRandomArrayElement(WIZARD_CHARACTERISTICS.names) + ' ' + getRandomArrayElement(WIZARD_CHARACTERISTICS.surnames),
    coatColor: getRandomArrayElement(WIZARD_CHARACTERISTICS.coatColors),
    eyesColor: getRandomArrayElement(WIZARD_CHARACTERISTICS.eyesColors)
  };
  return wizardObject;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// функция возвращает fragment с персонажами
var createWizardFragment = function () {
  var fragment = document.createDocumentFragment();
  var randomWizard;
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    randomWizard = getRandomWizard();
    fragment.appendChild(renderWizard(randomWizard));
  }
  return fragment;
};

similarListElement.appendChild(createWizardFragment());
popupSetup.classList.remove('hidden');
popupSetup.querySelector('.setup-similar').classList.remove('hidden');
