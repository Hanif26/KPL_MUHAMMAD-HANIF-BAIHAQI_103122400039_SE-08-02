
const arr1 = [2, 0, 26, 28, -2];

function MulOfArray(arr) {
    let result = 1;

    for (let i = 0; i < arr1.length; i++) {
        if (arr[i] > 0) {
            result = result * arr1[i];
        }
    }

    return result;
}

const result = MulOfArray(arr1);
console.log("hasil perkalian:", result); 

