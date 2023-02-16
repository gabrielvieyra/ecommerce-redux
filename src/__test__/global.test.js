// Vamos a trabajar con la funcion test que recibe 2 parametros, el primero es un titulo que va a describir que va a pasar y el segundo es una funcion anonima
// donde va a estar lo que vamos a probar
// Normalmente vamos a tener una funcion llamada expect que le vamos a pasar algo para despues comparar
// Ej en esta caso lo que hacemos es probar si el texto que tenemos contiene la palabra mundo
const text = 'Hola Mundo';

test('Debe contener un texto', () => {
  expect(text).toMatch(/Mundo/);
});

// Prueba con array
const fruits = ['manzana', 'melon', 'banana'];

test('¿Tenemos una banana?', () => {
  // Ej en este caso lo que hacemos es probar si mi arreglo contiene x elemento
  expect(fruits).toContain('banana');
});

// Prueba con numeros
test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

// Prueba con boolean
test('Verdadero', () => {
  // toBeTruthy(), a esta funcion no le pasamos nada, va a comprobar si lo que esta recibiendo es un booleano
  expect(true).toBeTruthy();
});

// Prueba con callbacks
function reverseString(str, callback) {
  callback(str.split('').reverse().join(''));
}

test('Probar un Callback', () => {
  // Lo primero que vamos a hacer es ejecutar el callback y despues hacemos la prueba
  reverseString('Hola', str => {
    // Ej en este caso lo que hacemos es probar si Hola esta al reves
    expect(str).toBe('aloH');
  });
});

// Pruebas a promesas
function reverseString2(str) {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    }
    resolve(str.split('').reverse().join(''));
  });
}

test('Probar una promesa', () => {
  return reverseString2('Hola').then(string => {
    expect(string).toBe('aloH');
  });
});

test('Probar async/await', async () => {
  const string = await reverseString2('hola');
  expect(string).toBe('aloh');
});

// Es una funcion que se va a ejecutar antes de cada prueba
// afterEach(() => console.log('Despues de cada prueba'));
// Es una funcion que se va a ejecutar despues de que corran todas las pruebas
// afterAll(() => console.log('Despues de todas las pruebas'));

// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las pruebas'));
