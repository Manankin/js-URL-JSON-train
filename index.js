// Завдання 1
/* Функція `complexConvert` отримує об'єкт з числовими значеннями і збільшує їх на 1.
 *  data - json дані для обробки.
 * Повертає - json дані в яких всі числові значення збільшено на 1. */
function complexConvert(data) {
  // Створюємо новий порожній об'єкт для збереження результату.
  let newData = JSON.parse(data);
  // Перетворюємо json дані в об'єкт та отримуємо всі ключі об'єкта.
  // console.log(newData);
  // Обходимо всі ключі та перевіряємо значення.
  for (let key in newData) {
    if (typeof newData[key] === 'number') {
      // Якщо значення є числом, збільшуємо його на 1.
      newData[key] += 1; 
    }
  }
  // Якщо значення не є числом, просто копіюємо його у новий об'єкт без змін.
  // Повертаємо оброблений об'єкт.
  return JSON.stringify(newData);
}
console.log("Завдання: 1 ==============================");
const data = {
  name: "John",
  age: 30,
  city: "New York",
  grades: {
    math: 90,
    science: 80,
    history: 70,
  },
};
console.log(complexConvert(JSON.stringify(data)));
// Виведе
// {"name":"John","age":31,"city":"New York","grades":{"math":90,"science":80,"history":70}}


// Завдання 2
/** Функція `manipulateUrl` приймає URL у вигляді рядка і виконує над ним різні операції.
 * url - URL у вигляді рядка.
 * Повертає об'єкт, що містить різні властивості URL.
 *  href: // Повний URL.
    protocol: // Протокол URL.
    host:  // Хост URL.
    pathname // Шлях URL.
    search // Рядок запиту URL.
    params: Параметри URL у вигляді масиву пар [ключ, значення]. */
function manipulateUrl(url) {
  // Створюємо новий об'єкт URL.
  let newUrl = new URL(url);
  // Змінюємо протокол URL на https.
  newUrl.protocol = 'https';
  // Змінюємо хост URL на 'newhost.com'.
  newUrl.host = 'newhost.com';
  // console.log(newUrl);
  // Додаємо параметр 'newParam' зі значенням 'newValue' до URL.
  newUrl.searchParams.append('newParam', 'newValue');
  // Видаляємо параметр 'oldParam' з URL, якщо він існує.
  if (newUrl.searchParams.has('oldParam')) {
    newUrl.searchParams.delete(oldParam)
  }
  // Повертаємо об'єкт, який містить різні властивості URL.
  return newUrl;
}
console.log("Завдання: 2 ==============================");
// Приклад використання функції manipulateUrl
let url = "http://example.com/path?param1=value1&param2=value2";
console.log(manipulateUrl(url));
// Виведе
// {
//   href: 'https://newhost.com/path?param1=value1&param2=value2&newParam=newValue',
//   protocol: 'https:',
//   host: 'newhost.com',
//   pathname: '/path',
//   search: '?param1=value1&param2=value2&newParam=newValue',
//   params: [
//     [ 'param1', 'value1' ],
//     [ 'param2', 'value2' ],
//     [ 'newParam', 'newValue' ]
//   ]
// }


// Завдання 3
/** Функція `searchParamsURL` створює новий об'єкт URL з вхідної URL-адреси та повертає об'єкт з параметрами пошуку URL.
 *  url - Вхідна URL-адреса для аналізу.
 *  Повертає об'єкт з параметрами пошуку URL. */
function searchParamsURL(url) {
  // Створення нового об'єкта URL з вхідного рядка
  const newUrl = new URL(url);
  // console.log(newUrl);
  // Отримання об'єкта URLSearchParams з властивості 'searchParams' об'єкта URL
  const newUrlParams = newUrl.searchParams;
  // console.log(newUrlParams);
  // Створення порожнього словника для збереження параметрів пошуку
  let params = new Map();
  // Перебір кожного параметра пошуку з 'searchParams' та додавання їх до словника 'params'
  newUrlParams.forEach((key, value) => {
    params.set(key, value)
  })
  // console.log(params);
  // Кожен 'param' - це масив, де [0] - ім'я параметра, а [1] - значення параметра
  // Повертаємо словник
  return params;
}
console.log("Завдання: 3 ==============================");
// Демонстрація використання функції:
console.log(
  searchParamsURL(
    "https://example.com/pathname?param1=value1&param2=value2&param3=value3"
  )
);
// Виведе
// Map(3) {
//   'param1' => 'value1',
//   'param2' => 'value2',
//   'param3' => 'value3'
// }


// Завдання 4
/** Функція `manipulateSearchParams` повинна приймати об'єкт з параметрами та нову URL-адресу.
 * paramsObj (об'єкт) - об'єкт, який містить параметри пошуку.
 * newUrl (рядок) - нова URL-адреса.
 * Функція повертає нову URL-адресу з властивістю searchParams, оновленою за допомогою параметрів з paramsObj. */
function manipulateSearchParams(paramsObj, newUrl) {
  // Створюємо новий об'єкт URL з нової URL-адреси.
  const url = new URL(newUrl);
  // console.log(url);
  // Використовуючи метод 'keys' з об'єкта Object, отримуємо всі ключі paramsObj.
  const keys = Object.keys(paramsObj);
  // console.log(keys);
  // За допомогою циклу 'for of' перебираємо всі ключі та додаємо параметри пошуку до urlObj.
  for (const key of keys) {
    url.searchParams.append(key, paramsObj[key])
  }
  // console.log(url)
  // Повертаємо нову URL-адресу в рядковому форматі.
  return url.href;
}

// Приклад використання функції manipulateSearchParams
console.log("Завдання: 4 ==============================");
console.log(
  manipulateSearchParams(
    { param1: "value1", param2: "value2" },
    "https://example.com/pathname"
  )
);
// Виведе: https://example.com/pathname?param1=value1&param2=value2


// Завдання 5
/** Функція `deleteSearchParams` повинна приймати масив ключів параметрів і URL-адресу.
 * keys (масив) - масив, який містить ключі параметрів пошуку для видалення.
 * url (рядок) - URL-адреса.
 * Функція повертає нову URL-адресу, з якої були видалені вказані параметри пошуку. */
function deleteSearchParams(keys, url) {
  // Створюємо новий об'єкт URL з URL-адреси.
  const newUrl = new URL(url);
  // console.log(newUrl);
  // За допомогою циклу 'for of' перебираємо всі ключі та видаляємо відповідні параметри пошуку з urlObj.
  for (const key of keys) {
    if (newUrl.searchParams.has(key)) {
      newUrl.searchParams.delete(key);
      // console.log(`${key} has been just deleted`)
    }
  }
  // Повертаємо нову URL-адресу в рядковому форматі.
  return newUrl.href
}
// Приклад використання функції deleteSearchParams
console.log("Завдання: 5 ==============================");
console.log(
  deleteSearchParams(
    ["param1", "param2"],
    "https://example.com/pathname?param1=value1&param2=value2"
  )
);
// Виведе: https://example.com/pathname


// Завдання 6
/** Функція `createURLWithParams` приймає об'єкт параметрів пошуку та базову URL-адресу.
 * params (об'єкт) - об'єкт, ключі та значення якого стануть параметрами пошуку нової URL-адреси.
 * url (рядок) - базова URL-адреса.
 * Функція повертає нову URL-адресу, до якої додані параметри пошуку з об'єкта params. */
function createURLWithParams(params, url) {
  // Створюємо новий об'єкт URL з базової URL-адреси.
  const newUrl = new URL(url);
  // console.log(newUrl);
  // За допомогою циклу 'for in' перебираємо всі ключі та значення об'єкта params та додаємо їх як параметри пошуку до urlObj.
  for (let key in params) {
    newUrl.searchParams.append(key, params[key]);
    // console.log(newUrl.searchParams);
  }
  // Повертаємо нову URL-адресу в рядковому форматі.
  return newUrl.href
}
// Приклад використання функції createURLWithParams
console.log("Завдання: 6 ==============================");
console.log(
  createURLWithParams(
    { param1: "value1", param2: "value2" },
    "https://example.com"
  )
);
// Виведе: https://example.com/?param1=value1&param2=value2


// Завдання 7
/** Функція `updateURLHash` приймає URL-адресу та рядок, і оновлює значення хеша в URL-адресі.
 * url (рядок) - URL-адреса, яку треба оновити.
 * hash (рядок) - нове значення хеша.
 * Функція повертає нову URL-адресу з оновленим хешем. */
function updateURLHash(url, hash) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const newUrl = new URL(url);
  // console.log(newUrl);
  // Оновлюємо значення хеша в URL-адресі.
  newUrl.hash = hash;
  // console.log(newUrl);
  // Повертаємо нову URL-адресу в рядковому форматі.
  return newUrl.href
}
// Приклад використання функції updateURLHash
console.log("Завдання: 7 ==============================");
console.log(updateURLHash("https://example.com", "newHash"));
// Виведе: https://example.com/#newHash


// Завдання 8
/** Функція `appendSearchParam` приймає URL-адресу, ключ і значення та додає новий параметр пошуку до URL-адреси.
 * url (рядок) - URL-адреса, до якої треба додати новий параметр пошуку.
 * key (рядок) - ключ нового параметра пошуку.
 * value (рядок) - значення нового параметра пошуку.
 * Функція повертає нову URL-адресу з доданим параметром пошуку. */
function appendSearchParam(url, key, value) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const newUrl = new URL(url);
  // console.log(newUrl);
  // Додаємо новий параметр пошуку до URL - адреси.
  newUrl.searchParams.append(key, value);
  // console.log(newUrl);
  // Повертаємо нову URL-адресу в рядковому форматі.
  return newUrl.href
}
// Приклад використання функції appendSearchParam
console.log("Завдання: 8 ==============================");
console.log(appendSearchParam("https://example.com", "newParam", "newValue"));
// Виведе: https://example.com/?newParam=newValue


// Завдання 9
/** Функція `modifyURLParameters` приймає URL та словник з параметрами пошуку.
 * Функція додає ці параметри до URL, а якщо такий параметр вже існує, замінює його.
 * url - URL, який треба змінити.
 *  params - Словник з параметрами пошуку.
 * Повертається - Нова URL-адреса з оновленими параметрами пошуку. */
function modifyURLParameters(url, params) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const newUrl = new URL(url);
  // console.log(newUrl);
  // Перебираємо словник params за допомогою for in
  for (let key in params) {
    // Якщо параметр вже існує, метод set замінює його новим значенням.
    if (newUrl.searchParams.has(key)) {
      newUrl.searchParams.set(key, params[key])
    }
    // Якщо параметр не існує, метод set додає його.
    else {
      newUrl.searchParams.append(key, params[key])
    }
  }
  // console.log(newUrl);
  // Отримаємо значення словника по ключу
  // Повертаємо нову URL-адресу в рядковому форматі.
  return newUrl.href
}
console.log("Завдання: 9 ==============================");
// Приклад використання функції modifyURLParameters
let modifiedURL = modifyURLParameters("https://example.com/?param1=oldValue1", {
  param1: "newValue1",
  param2: "newValue2",
});
console.log(modifiedURL);
// Виведе: https://example.com/?param1=newValue1&param2=newValue2


// Завдання 10
/** Функція `checkURLParameters` приймає URL та множину параметрів пошуку.
 * Функція перевіряє, чи є ці параметри в URL.
 * url - URL, який потрібно перевірити.
 *  params - Множина параметрів, які потрібно перевірити.
 * Повертається - Об'єкт, ключі якого відповідають ключам вхідного об'єкта,
 * а значеннями є булеві значення, що вказують на наявність відповідного параметра в URL. */
function checkURLParameters(url, params) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const newUrl = new URL(url);
  // console.log(newUrl);
  // Створюємо новий об'єкт для зберігання результатів.
  const result = new Object();
  // console.log(result);
  // Перебираємо елементи множини params за допомогою for of.
  for (let key of params) {
    if (newUrl.searchParams.has(key)) {
      result[key] = true
    } else {
      result[key] = false
    }
  }
  // Додаємо новий ключ в результат з булевим значенням, яке вказує, чи є параметр в URL.
  // Повертаємо об'єкт з результатами.
  return result
}
console.log("Завдання: 10 ==============================");
// Приклад використання функції checkURLParameters
let params = new Set(["param1", "param2", "param3", "param4"]);
console.log(
  checkURLParameters(
    "https://example.com/?param1=value1&param2=value2&param3=value3",
    params
  )
);
// Виведе: { param1: true, param2: true, param3: true, param4: false }


// Завдання 11
/** Функція `processURL` приймає URL та об'єкт з параметрами та налаштуваннями для обробки URL.
 * url (рядок) - URL, який потрібно обробити.
 * options (об'єкт) - об'єкт, який містить параметри та налаштування для обробки URL.
 * Функція повертає новий URL, який було сформовано на основі вхідного URL і параметрів обробки. */
function processUrl(url, options) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const newUrl = new URL(url);
  // console.log(newUrl);
  // Перевіряємо, чи в об'єкті 'options' є параметри пошуку.
  if (options.hasOwnProperty('searchParams')) {
  // Якщо є, перебираємо ці параметри за допомогою циклу 'for in'.
    for (let key in options.searchParams) {
    // Для кожного ключа параметру додаємо його та відповідне значення до об'єкта 'urlObj' за допомогою методу 'append'.    
      newUrl.searchParams.append(key, options.searchParams[key])
    }  
    // console.log(newUrl);
  }
  // Для кожного ключа параметру додаємо його та відповідне значення до об'єкта 'urlObj' за допомогою методу 'append'.
  // Перевіряємо, чи в об'єкті 'options' є протокол.
  if (options.hasOwnProperty('protocol')) {
    // Якщо є, змінюємо протокол 'urlObj' на протокол з 'options'.
    newUrl.protocol = options.protocol;
    // console.log(newUrl);
  }
  // Перевіряємо, чи в об'єкті 'options' є хост.
  if (options.hasOwnProperty('host')) {
    // Якщо є, змінюємо хост 'urlObj' на хост з 'options'.
    newUrl.host = options.host;
    // console.log(newUrl);
  }
  // Повертаємо 'urlObj' у вигляді рядка за допомогою методу 'toString'.
  return newUrl.href
}
// Приклад використання функції processURL
console.log("Завдання: 11 ==============================");
console.log(
  processUrl("https://example.com/path", {
    searchParams: { param1: "value1", param2: "value2" },
    protocol: "http:",
    host: "newexample.com",
  })
);
// Виведе: 'http://newexample.com/path?param1=value1&param2=value2'


// Завдання 12
/** Функція `manipulateQuery` отримує URL та словник з додатковими налаштуваннями та працює над пошуковими параметрами URL.
 * url - URL для обробки.
 * options - Словник з налаштуваннями. Включає ключі `append` та `delete`.
 * Повертається - Новий URL з модифікованими пошуковими параметрами. */
function manipulateQuery(url, options) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  const newUrl = new URL(url);
  // Якщо в словнику `options` є ключ `append`...
  if (options.has('append')) {
    // console.log(true)
    let appendValues = options.get('append');
    // console.log(appendValues);
    // ...перебираємо його ключі та значення за допомогою циклу for...of.
    for (let [key, value] of appendValues) {
      // Додаємо кожний ключ і значення до об'єкта `searchParams` в URL.
      newUrl.searchParams.append(key, value);
    }
    // console.log(newUrl)
  }
  // Якщо в словнику `options` є ключ `delete`...
  if (options.has('delete')) {
    // console.log(true)
    let deleteValues = options.get('delete');
    // console.log(Array.isArray(deleteValues));
    // ...перебираємо його значення за допомогою циклу for...of.
    deleteValues.forEach((item) => newUrl.searchParams.delete(item))
      // Видаляємо кожний ключ з об'єкта `searchParams` в URL.
  }
  // Повертаємо новий URL як рядок.
  return newUrl.href
}
console.log("Завдання: 12 ==============================");
// Приклад використання функції manipulateQuery
let options = new Map([
  [
    "append",
    new Map([
      ["param3", "value3"],
      ["param4", "value4"],
    ]),
  ],
  ["delete", ["param1", "param2"]],
]);

console.log(
  manipulateQuery(
    "https://example.com/path?param1=value1&param2=value2",
    options
  )
);
// Виведе: 'https://example.com/path?param3=value3&param4=value4'


// Завдання 13
/** Функція `getUrlData` приймає URL у вигляді рядка і повертає інформацію про URL.
 * @url (рядок) - URL-адреса для аналізу.
 * Функція повертає об'єкт, що містить наступні ключі:
 * - 'origin': походження URL.
 * - 'hostname': ім'я хоста URL.
 * - 'port': порт URL.
 * - 'username': ім'я користувача в URL.
 * - 'password': пароль в URL. */
function getUrlData(url) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let newUrl = new URL(url);
  let result = new Object();
  result.origin = newUrl.origin;
  result.hostname = newUrl.hostname;
  result.port = newUrl.port;
  result.username = newUrl.username;
  result.password = newUrl.password;

  // Повертаємо об'єкт з відповідними даними.
  return result
}

// Приклад використання функції getUrlData
console.log("Завдання: 13 ==============================");
console.log(getUrlData("https://username:password@example.com:8080/path"));
// Виведе:
// {
//   origin: 'https://example.com:8080',
//   hostname: 'example.com',
//   port: '8080',
//   username: 'username',
//   password: 'password'
// }


// Завдання 14
/** Функція `sortUrlParams` приймає URL і повертає новий URL з відсортованими пошуковими параметрами.
 * url (рядок) - URL-адреса для аналізу.
 * Функція повертає новий URL з відсортованими пошуковими параметрами за ключами у порядку зростання. */
function sortUrlParams(url) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let newUrl = new URL(url);
  // Отримуємо масив з ключами і значеннями параметрів за допомогою методу 'entries'.
  newUrl.searchParams.sort();
  // Сортуємо масив за ключами у порядку зростання.
  // Очищуємо пошукові параметри URL.
  // Додаємо відсортовані параметри до URL.
  // Повертаємо новий URL як рядок.
  return newUrl.toString();
}

// Приклад використання функції sortUrlParams
console.log("Завдання: 14 ==============================");
console.log(
  sortUrlParams("https://example.com/path?param2=value2&param1=value1")
);
// Виведе: 'https://example.com/path?param1=value1&param2=value2'


// Завдання 15
/** Функція `getURLValues` приймає URL і повертає масив значень пошукових параметрів.
 * url - URL-адреса для аналізу.
 * Повертаємо - Масив значень пошукових параметрів. */
function getURLValues(url) {
  // Створюємо новий об'єкт URL з вхідною URL-адресою.
  let newUrl = new URL(url);
  // Отримуємо об'єкт `URLSearchParams` з пошуковими параметрами.
  const newUrlSearchParams = newUrl.searchParams;
  // console.log(newUrlSearchParams);
  // Отримуємо масив ключів пошукових параметрів.
  let keys = newUrlSearchParams.keys();
  // Масив для збереження значень пошукових параметрів.
  let result = [];
  // Перебираємо ключі пошукових параметрів.
  for (const key of keys) {
    // Отримуємо всі значення для даного ключа за допомогою методу `getAll`.
  // Додаємо значення до масиву.
  result.push(newUrlSearchParams.getAll(key))
  // Повертаємо масив значень пошукових параметрів.
  }
  return result
}

// Приклад використання функції getURLValues
console.log("Завдання: 15 ==============================");
console.log(
  getURLValues(
    "https://example.com/path?param1=value1&param2=value2&param3=value3"
  )
);

// Завдання 16

/** Функція `getUrlKeys` приймає URL і повертає масив з ключами пошукових параметрів.
 * @url (рядок) - URL-адреса для аналізу.
 * Функція повертає масив, що містить усі ключі пошукових параметрів */
function getUrlKeys(url) {
  // Створюємо новий об'єкт URL з вхідної URL-адреси.
  let newUrl = new URL(url);
  // Отримуємо масив зі всіма ключами пошукових параметрів за допомогою методу 'keys'.
  let result = newUrl.searchParams.keys();
  // console.log(Array.isArray(result))
  let resultArray = new Array();
  for (let key of result) {
    resultArray.push(key);
  }
  // Повертаємо масив з ключами.
  return resultArray;
}

// Приклад використання функції getUrlKeys
console.log("Завдання: 16 ==============================");
console.log(getUrlKeys("https://example.com/path?param1=value1&param2=value2"));
// Виведе: [ 'param1', 'param2' ]


const user = {
  id: 1041,
  login: "justUser",
  password: "qwerty",
  role: 'Admin',
  go() {
    console.log('go to work')
  },
  testData: {
    logAmount: 241,
  }
}

const jsonUser = JSON.stringify(user, (key, value) => {
  if (key === 'role') {
    return value.toLowerCase();
  }

  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  
  if (typeof value === 'number') {
    return value + 1
  }
  // console.log(key, value);
  return value;
}, // далі вказуємо на скільки пробілів форматуємо наш JSON
  3);
// console.log(jsonUser)

const parseUser = JSON.parse(jsonUser, (key, value) => {
  if (key === 'role') {
    return value.toUpperCase();
  }

  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  
  if (typeof value === 'number') {
    return value + 1
  }
  // console.log(key, value);
  return value;
}, // далі вказуємо на скільки пробілів форматуємо наш JSON
  2);
// console.log(parseUser);

// Робота з конструктором URL
// create URL object
// const burl = new URL("https://admin:admax@bridgeclub.org.ua/school/3/6#%D0%B1%D1%83%D0%B1%D0%BD%D0%B0");
// const urlBridge = new URL('/school/3/6', 'https://bridgeclub.org.ua');
// const akpp = new URL('https://www.google.com/search?q=transmission+oil+change&oq=transmission+oil+change&aqs=chrome..69i57j0i512l9.9189j0j15&sourceid=chrome&ie=UTF-8');
// console.log('full path is -', urlBridge.href); // повний шлях на сайті, те що буде в командній строкці браузера
// console.log('the protocol type is -', url.protocol); // type of protocol
// console.log('path inside domain name is - ', url.pathname); // path inside domain
// console.log('domain name include protocol is -', urlBridge.origin); // domain + protocol
// console.log(burl.host); // return domain or host name and add port if it is
// console.log(urlBridge.hostname); // return domain or host name ONLY without port name
// console.log('якірь у посиланні - ', url.hash); // повертає значення якоря (те що стоїть після # у адресній строці) якщо воно є
// console.log('якірь у посиланні - ', url.hash.slice(1)) // reurn without #
// console.log('пароль для входу на сайт - ', url.password); // return password
// console.log("ім'я для входу на сайт - ", url.username); // return дщпшт
// console.log('port number is - ', urlBridge.port); // return port number
// console.log('параметри для пошуку', akpp.search); // return all search parameteres
// console.log(akpp.searchParams); // return object with parameters for search (return as MAP)
// akpp.searchParams.append('oil', 'NS-2');
// console.log(akpp.searchParams); // return object with parameters for search (return as MAP)
