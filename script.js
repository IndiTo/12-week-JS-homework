//Практическое задание 12 неделя

let result = document.getElementsByClassName('result');
const updateNameValue = (str) => {
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

const onPost = ()=> {
    let fio = document.getElementById('fio').value;
    let avatar = document.getElementById('avatar').value;
    let comment = document.getElementById('comment').value;
    let fioArray = fio.split(' ');
    let updatedFio = '';
    fioArray.forEach((item)=>{
        updatedFio = updateNameValue(item)+ ' ' + updatedFio;
    })
    let newComment = document.getElementById('newComment');
    newComment.value = comment.replace('viagra', '***');
    result[0].value = updatedFio;
    document.getElementById('ava').src = avatar;
}


/*Теория 12 неделя

1. Какие кавычки можно использовать для создания строк в JS и в чём разница между ними?
Любой набор символов становится строкой, когда ограничен с двух сторон двойными (” “) или одинарными (’ ‘) кавычками. 
Также можно использовать обратные кавычки (``), в такую строку мы сможем вставлять произвольные выражения, обернув их в ${…}.
*/

/*2. Какими методами можно найти подстроку в строке? Приведите пример.
Подстроку в строке можно найти, использовав метод indexOf.

let example = "Я учу и выучу JavaScript";

console.log(example.indexOf("выучу")); // 8
console.log(example.lastIndexOf("выучу")); // 8
console.log(example.search("выучу")); // 8
console.log(example.startsWith("Я")); //true
console.log(example.endsWith("выучу")); // false
*/
/*
3. Самостоятельно разберитесь, зачем нужен специальный символ \n?
\n - перенос строки
Пример: 
console.log('- Кто ты ? - спросил маленький принц.- Какой ты красивый!\n - Я - Лис, - сказал Лис.');
*/

/*4. Напишите код, который делает первый символ заглавным. Например, `"настя"` ⇒ `"Настя"`
а)замена только первого символа:
let str = "настя";
str = "Н" + str[1];
console.log(str + 'стя'); //почему-то выводится только первые 2 символа слова "На", пришлось добавить "стя"
б) замена всего слова Метод replace():
const nameIs = "настя";
const changeName = nameIs.replace("настя", "Настя");
console.log(changeName);
в)
let str = 'настя';
str = str.replace(str[0], str[0].toUpperCase()); /// 'Настя'
console.log(str);
*/

/*
5. Какой из вариантов округления делает это по математическим правилам?
Math.round (число). Округление числа производится по математическим правилам. 
*/
/*
6. Как сгенерировать случайное число от 1 до 100? 
console.log((Math.ceil(Math.random()*100)));
*/
/*
7. Самостоятельно разберитесь, зачем нужен специальный символ \n?
\n - перенос строки, 3 вопрос повторяется.
*/
/*
8. Что выведет в консоль?
const x="Солнце";

console.log("The string length is " + x.length); // The string length is 6 // JS считает с 0, в слове Солнце 6 букв, должно ведь быть The string length is 5??? что-то я не поняла этот момент
*/
/*
9. Каким будет результат в представленном ниже фрагменте кода?

const upperText="ВелоСипед" ;

document.write(upperText.toUpperCase()) //ВЕЛОСИПЕД 
*/
/*
10. Каким будет результат в приведенном ниже фрагменте кода?

let str = "розы такие розы"; 
str.replace("розы","красивые") // розы такие розы - ничего не поменяется, т.к.не строки не меняются. Нужно было создать новую переменную:

let str = "розы такие розы"; 
let n = str.replace("розы","красивые"); // красивые такие розы
console.log(str);

let roses = "розы такие розы"; 
let pretty = roses.slice(0,10);
console.log(pretty + ' красивые'); // розы такие красивые
*/
/*
11. Что выведет в консоль?

const str = "abcdefghij";

console.log("(2,3): "    + str.substr(2,3)); // (2,3): cde
*/