'use strict';

var CHARACTERISTICS = {
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green']
};
var WIZARDS_COUNT = 4;
var popupSetup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomWizard = function () {
  var nameIndex = getRandom(0, CHARACTERISTICS.names.length);
  var surnameIndex = getRandom(0, CHARACTERISTICS.surnames.length);
  var wizardName = CHARACTERISTICS.names.splice(nameIndex, 1);
  var wizardSurname = CHARACTERISTICS.surnames.splice(surnameIndex, 1);
  var randomFullName = wizardName + ' ' + wizardSurname;

  var coatColorIndex = getRandom(0, CHARACTERISTICS.coatColors.length);
  var eyesColorIndex = getRandom(0, CHARACTERISTICS.eyesColors.length);
  var randomCoatColor = CHARACTERISTICS.coatColors.splice(coatColorIndex, 1);
  var randomEyesColor = CHARACTERISTICS.eyesColors.splice(eyesColorIndex, 1);
  var wizardObject = {
    name: randomFullName,
    coatColor: randomCoatColor.join(),
    eyesColor: randomEyesColor.join()
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

var insertWizards = function () {
  var fragment = document.createDocumentFragment();
  var randomWizard;
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    randomWizard = getRandomWizard();
    fragment.appendChild(renderWizard(randomWizard));
  }
  similarListElement.appendChild(fragment);
};

popupSetup.classList.remove('hidden');
insertWizards();
popupSetup.querySelector('.setup-similar').classList.remove('hidden');
