// Функція chooseDistance приймає параметри:
// t (максимальна сума відстаней, ціле число >= 0),
// k (кількість міст, які потрібно відвідати, k> = 1),
// ls (список відстаней, всі відстані є додатними або нульовими цілими числами, 
// і цей список містить принаймні один елемент).

// Функція повертає "найкращу" суму, тобто найбільшу можливу суму k відстаней, 
// менших або рівних заданій межі t, якщо ця сума існує, або якщо не існує - null.
// Примітка: не змінюйте змінну ls. 


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

    const sortedLs = ls.sort((a, b) => b - a);

    const sumOfDistances = (arr, k) => {
       return  arr.reduce((acc, el, i) => {
            if (el < 0) {
                return;
            }

            if (k > i) {
                return acc + el;
            }


            return acc;
        }, 0);
    };

    let totalSum = sumOfDistances(sortedLs, k);

    const checkDistance = (sum) => {
        if (t >= sum) {
            return sum;
        } else {
            sortedLs.shift();
            totalSum = sumOfDistances(sortedLs, k);
            checkDistance(totalSum);
            return totalSum;
        }
    }

    return checkDistance(totalSum);
}

//  console.log(chooseDistance(174, 3, [51, 56, 58, 59, 61])); //173
//  console.log(chooseDistance(163, 3, [50])); // null
