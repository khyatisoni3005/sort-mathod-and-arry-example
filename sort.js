// selection sort 

function selection() {
    const arr = [32, 5, 4, 67, 78, 6, 45, 3]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log(selection());

// bubble sort 
function bubble() {
    const arr = [45, 67, 9, 34, 87, 33, 43, 23, 42, 4]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
console.log(bubble());

// find max 1
function max() {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let max = 0
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i]
        if (num > max) {
            max = num
        }
    }
    return max
}
console.log(max(), "max");

// find min 2
function min() {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let min = arr1[0]
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i]
        if (num < min) {
            min = num
        }
    }
    return min
}
console.log(min(), "min");

// find second  max 3
function secondMax() {
    let arr1 = [1, 3442, 4566934, 563, 48, 544, 6, 37, 8, 10]
    let max = 0;
    let secondmax = 0;
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i]
        if (num > max) {
            max = num
        }
        else if (num > secondmax && max > secondmax) {
            secondmax = num
        }

    }
    let obj = {
        max: max,
        secondmax: secondmax
    }
    return obj
}
console.log(secondMax(), "secondmax xxxxxxxxx");

// remove element in array 7
function removeElement() {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 323]
    let ind = 2;
    for (let i = ind; i < arr1.length; i++) {
        arr1[i] = arr1[i + 1]
    }
    arr1.length = arr1.length - 1
    return arr1

}
console.log(removeElement(), "remove");

// push 2 elements in array 11
function pushTwoelEments() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    let ind = 2; // a, b
    for (let i = arr.length; i > ind; i--) {
        arr[i + 1] = arr[i - 1]
    }
    arr[ind] = "a"
    arr[ind + 1] = "b"
    return arr
}
console.log(pushTwoelEments(), "tow push");





























































// // binary Search 
// function findElement(array, element) {
//     let start = 0;
//     console.log(start);
//     let end = arr.length - 1;
//     console.log(end);
//     if (start <= end) {
//         return false
//     }
//     if (start < end) {
//         let mid = parseInt((start + end) / 2)
//         console.log(mid, "mid");
//         let left = []
//         for (let i = start; i <= mid; i++) {
//             left.push(arr[i])
//         }
//         let ls = 0;
//         let le = left.length - 1

//         let right = []
//         for (let i = mid + 1; i <= end; i++) {
//             right.push(arr[i])
//         }
//         let rs = 0;
//         let re = right.length - 1
//         devide(left, ls, le)
//         devide(right, rs, re)
//     }

// }

// const inputArray = [2, 6, 9, 12, 56, 86, 97, 166, 187, 200, 204, 206, 404, 1410, 1418, 1435, 1491, 1494, 1515, 1592, 1681, 1698, 1787, 1799, 1811, 1959, 1989, 2010, 2023, 2118, 2138, 2142, 2167, 2177, 2190, 2270, 2315, 2351, 2355, 2431, 2499, 2509, 2592, 2681, 2706, 2845, 2852, 2905, 3021, 3084, 3241, 3304, 3396, 3587, 3595, 3609, 3686, 3854, 3860, 3895, 4049, 4071, 4158, 4176, 4190, 4194, 4195, 4212, 4219, 4235, 4266, 4276, 4340, 4422, 4458, 4532, 4601, 4612, 4630, 4641, 4699, 4702, 4749, 4992, 5007, 5027, 5129, 5331, 5336, 5372, 5379, 5414, 5522, 5547, 5565, 5573, 5577, 5604, 5702, 5718];

// console.log(findElement(inputArray, 5414));

