'use strict';

var i = 0;

var CHARACTER_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var CHARACTER_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var CHARACTER_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var CHARACTER_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var popupSetup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

popupSetup.classList.remove('hidden');

var getCharacterName = function () {
  return CHARACTER_NAMES[Math.floor(Math.random() * CHARACTER_NAMES.length)];
};

var getCharacterSurname = function () {
  return CHARACTER_SURNAMES[Math.floor(Math.random() * CHARACTER_SURNAMES.length)];
};

var getCoatColor = function () {
  return CHARACTER_COAT_COLORS[Math.floor(Math.random() * CHARACTER_COAT_COLORS.length)];
};

var getEyesColor = function () {
  return CHARACTER_EYES_COLORS[Math.floor(Math.random() * CHARACTER_EYES_COLORS.length)];
};

var wizardCharacteristics = [
  {
    name: getCharacterName() + ' ' + getCharacterSurname(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },

  {
    name: getCharacterName() + ' ' + getCharacterSurname(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },

  {
    name: getCharacterName() + ' ' + getCharacterSurname(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },

  {
    name: getCharacterName() + ' ' + getCharacterSurname(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < wizardCharacteristics.length; i++) {
  fragment.appendChild(renderWizard(wizardCharacteristics[i]));
}

similarListElement.appendChild(fragment);

popupSetup.querySelector('.setup-similar').classList.remove('hidden');
