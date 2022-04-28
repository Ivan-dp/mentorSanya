import { copyArrayColorValue } from "../const/consts"
// export const stringsDelete = function(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         // arr[i].filter(n => (typeof(n) !== 'string'))
//         // console.log(arr[i].filter(function(n){return n.background}));
//         console.log(arr[i]);
//     }
// }


// export const b = copyArrayColorValue.filter(function(item){if(typeof(item.id)==='number') return item.id});

export const b = copyArrayColorValue.filter(function(item){return typeof(item.value) === 'number'});