/*
const character = document.querySelector('.character');

function run() {
    character.classList.remove('standing');
    character.style.animationDuration = Math.random() * 5 + 1 + 's';
    character.classList.add('running');
}

function stand() {
    character.classList.remove('running');
    character.classList.add('standing');
}

// Запуск анимации бега
run();

// Через случайное время остановка анимации и переход в состояние стояния
setTimeout(stand, Math.random() * 5000 + 1000);
*/
const character = document.querySelector(".character");

if (character !== null) {
    // Ваш код для работы с элементом .character
    console.log('Элемент .character существует');
} else {
    console.log('Элемент .character не найден');
}

function runAnimation() {
    character.style.bottom = '50%';
    character.style.left = '50%';
    character.style.transform = 'rotateY(0deg)';
    requestAnimationFrame(() => {
        character.style.bottom = '0';
        character.style.left = '90%';
        character.style.transform = 'rotateY(180deg)';
        requestAnimationFrame(() => {
            character.style.bottom = '0';
            character.style.left = '0';
            character.style.transform = 'rotateY(0deg)';
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    runAnimation();
});