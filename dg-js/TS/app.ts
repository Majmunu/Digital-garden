// let names:Array<string | number>=[]
//
// names=['123',222]
//
// // const promise:Promise<string>=new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve('This is done')
// //     },2000)
// //
// // }
// // )
function merge<T extends {}, U extends {}>(objA: T, objB: U) {
  return {...objA, ...objB}; // this is a generic function
}
const mergedObj = merge({name: 'Max'}, {age: 30});

interface Lengthy {
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T):[T, string] {
  let descriptionText = 'Got no value';
    if (element.length === 1) {
    descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements';
    }
  return [element, descriptionText];
}
countAndDescribe('Hi there!')