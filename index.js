// Функція chooseDistance приймає параметри:
// t (максимальна сума відстаней, ціле число >= 0),
// k (кількість міст, які потрібно відвідати, k> = 1),
// ls (список відстаней, всі відстані є додатними або нульовими цілими числами, 
// і цей список містить принаймні один елемент).

// Функція повертає "найкращу" суму, тобто найбільшу можливу суму k відстаней, 
// менших або рівних заданій межі t, якщо ця сума існує, або якщо не існує - null.
// Примітка: не змінюйте змінну ls. 

const makeCombinations = (array, num, t) => {

  array = [...array].filter(el => el>=0)

  if (num === array.length) {
    return [array];
  }

  if (num === 1) {
    return array.reduce((acc, cur) => [...acc, [cur]], []);
  }

    let combs = [];
    let partOfCombs = [];

  for (let i = 0; i <= array.length - num + 1; i++) {
    partOfCombs = makeCombinations(array.slice(i + 1), num - 1);
    for (let j = 0; j < partOfCombs.length; j++) {
      combs.push([array[i], ...partOfCombs[j]]);
    }
  }

  return combs;
};


const chooseDistance = (t, k, ls) => {

    if (t < 0) {
        alert('Enter the correct sum of the distances');
        return null;
    }

    if (k <= 0) {
        alert('Enter the number of city > 0');
        return null;
    }

    if (ls.length < k) {
        alert('Enter the correct list of distances');
        return null;
    }

    const combinations = makeCombinations(ls, k, t)

    let sumOfDistances = [];

    for (let i = 0; i < combinations.length; i++) {
        const total = combinations[i].reduce((acc, el) => acc + el, 0);
        sumOfDistances.push(total)
    };
    
    let sortedSum = sumOfDistances
        .filter(el => el <= t)
        .sort((a, b) => b - a);

    return sortedSum[0] ? sortedSum[0] : null;
        
};    
 var ts = [50, 55, 56, 57, 58]
console.log(chooseDistance(163, 3, ts))  