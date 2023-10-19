// function tersSiraCümleOlustur(cümle) {
//     let yenicümle = cümle.split(' ').reverse().join(" ");
//     return yenicümle
//   }
  
//   const kelimeler = tersSiraCümleOlustur("Bu bir cümle");
//   console.log(kelimeler);


  //   const string1 = "listen";
  //   const string2 = "silent";
  //   function areAnagrams(str1, str2) {
  //   const a = (str) => str.split('').sort().join();
  //   return a(str1) == a(str2);
  // }
  
  // if (areAnagrams(string1, string2)) {
  //   console.log(`${string1} and ${string2} are anagrams.`);
  // } else {
  //   console.log(`${string1} and ${string2} are not anagrams.`);
  // }
// ************************************************************
//   var a = ['dog','lion','hen'];
//   a[0] = 'horse';

//   console.log(a.length);

//   let array = [1, 2, 3];
 
//   console.log(array[9]);
// ************************************************************  
// TEKRAR EDEN SAYILARDAN BİR TANESİNİ LİSTEYE YAZDIRMA

// 1.yöntem
  
// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArray = [...new Set(arrayWithDuplicates)];

// console.log(uniqueArray);



// 2.yöntem

// let arr1 = [1,1,1,2,2,22,3,4,55,5,5,5,67]
// function uniqemaker (arr1) {
//    let arr3 = []


//    for (let i = 0 ; i < arr1.length ; i++) {
//     if (!arr3.includes(arr1[i])) {
//       arr3.push(arr1[i])
//     }
//    }
//    return arr3

//    arr1.sort()

// }
// console.log(uniqemaker(arr1));
// let arr1 = [1, 1, 1, 2, 2, 22, 3, 4, 55, 5, 5, 5, 67];

// function uniqemakerAndSort(arr1) {
//    let arr3 = [];

//    for (let i = 0; i < arr1.length; i++) {
//       if (!arr3.includes(arr1[i])) {
//          arr3.push(arr1[i]);
//       }
//    }

//    arr3.sort((a, b) => a-b)

//    return arr3;
// }

// console.log(uniqemakerAndSort(arr1));


// **********************************************************

// // console.log(uniqueArray); // This will print [1, 2, 3, 4, 5]

// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = arrayWithDuplicates.filter((value, index, self) => self.indexOf(value) === index);

// console.log(uniqueArray); // This will print [1, 2, 3, 4, 5]

// ****************************************************************
// let myArray = [1,2,3,4,5]

// myArray.splice(2,3)

// console.log(myArray);
// ************************************************************

// Soru: Verilen bir dizi içindeki tek sayıları bulup yeni bir diziye ekleyin.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tek = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) { // Use the modulo operator to check if a number is odd.
    tek.push(numbers[i]);
  }
}

console.log(tek);

// ************************************************************
