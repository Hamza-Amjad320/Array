// let myfrndname:string[]=["hamza","hammad","haris","ali"]
// console.log(myfrndname[3]);
// console.log(myfrndname);
// console.log(myfrndname.length);

// let frndname: (string|number|boolean)[]=[99999999,32,"hamza",true]
// console.log(frndname[3]);
// console.log(frndname);
// console.log(frndname.length);

// let matrix:number[][]=[
//     [1,2,3,4],
//     [5,6,7,8,9],
//     [10,11]
// ]
// console.log(matrix[2]);
// console.log(matrix);
// console.log(matrix.length);

// let array :[string,number,boolean] =["hamza",32,true]
// console.log(array);


// let ali :Array<string>=[
//     "hamza",
//     "ali",
//     "hammad"
// ]
// console.log(ali.reverse());


// function add(x:number,y:number) {
//     return (x + y)
// }
// console.log(add(5,8));


// let add1=function(x:number,y:number) {
//     return(x-y)
    
// }
//  console.log(add1(2,6));


function box(name :string,...eidi :number[]) {
    console.log(...eidi);
    return name + eidi

    
}

console.log(box("hamza",100+60+200+150+30+10)
);



