

console.log(1111)

function minElem(){
   
function version1(arr){
    arr.sort();
    return arr[1]
}
    
function version2(arr){
    function minNumber(arr){
        return arr.reduce((pV,cV,inx) => {
            if(pV > cV){
                pV = cV;
            }
            return pV
        });
   }
    arr.splice(arr.indexOf(minNumber(arr)),1);  
}
    

function version3(arr){
    arr.splice(arr.indexOf(Math.min.apply(null,arr)),1)
    arr.splice(arr.indexOf(Math.min.apply(null,arr)),1)
}

}
// Найти неповторяющиеся целые числа в массиве
let arr2 = [3,3,3,7,6,4,3,5,9,2,2,2];

function repeteNumber(numbers){
    let arr = [...numbers];
    let arr2 = [];
    let repete = false;
    let sum = 0;
    function removeItem(arr,val){
        return arr.map(a => {
            if(a === val){
                return ''
            }else return a
        })
    }
    // console.log(removeItem(arr,3))

    function removeItem2(arr,val){
        // arr.forEach((a,i,r) => {
            
        //     if(a === val){
                
        //         // arr[i] = '';
        //         r.splice(i,1,'');
        //     }
        // })

        arr = arr.filter(elem => {
            if(elem != 3){
                return elem
            }
        });
        return arr
    }

    console.log(removeItem2(arr,3));

    function removeItem3(arr, val){
        // for(let i = 0; ){

        // }

    }

// removeItem3(arr, 3)

    arr.forEach((elem,i) => {
        // console.log(elem);
        // arr.shift();
        sum = 0;
        for(let j = i; j < arr.length; j++){

            if(elem === arr[j]){
                sum += 1;
                
                // arr.splice(j,1,'')
                // console.log(arr[j])
            }
            if(sum >= 2){
                continue
            }
        }

        if(sum >= 2){
            arr.forEach((e,i) => {
                arr.splice(elem,1)
            })
        }

        // if(repete === false){
        //     arr2.push(elem);
        // }
        
    });
    // console.log(arr2);
    // console.log(arr)
    // console.log(arr2)
}
// repeteNumber(arr2)




// В этой Ката вам будет предоставлен массив уникальных элементов, и ваша задача состоит в том, чтобы переставить значения так, чтобы за первым максимальным значением следовало первое минимальное значение, за которым следовало второе максимальное значение, затем второе минимальное значение и т. д.

function minMax(arr){
    function sortNum(a,b){
        if(a < b){
            return 1
        }
        if(a > b){
            return -1
        }
        return 0;
    }
    let arrMin = [...arr].sort();
    let arrMax = [...arr].sort(sortNum);
    let result = [];
    console.log(arrMax)
    for(let i = 0; arrMax.length != 0; i++){
        // if(i % 2 === 0){
        //     arrMax[i] 
        //     console.log()
        // }
        console.log(arrMax)
       let oneElem = arrMax.shift();
       let twoElem = arrMax.pop();
    //    console.log(twoElem);
       console.log(oneElem,twoElem)
       if(oneElem) result.push(oneElem);
        if(twoElem) result.push(twoElem);

        
    }
    // let arrMax = new Array(arrMin.reverse);
    console.log(result)
    return result

}
let arr = [5, 3, 8, 1, 4];
// minMax(arr)


function camelize(str){
    return  str
        .split('-')
        .map(
            (elem,i) => i != 0? elem[0].toUpperCase() + elem.slice(1) : elem
            )
        .join('')    
        }
            
function filterRange(arr, a, b){
    return arr
    .filter(
        elem => elem >= a && elem <= b  
        )
    // return [...arr].slice(a,b);
}
        
// Простое использование сортировки. Создайте функцию, которая возвращает элементы 
// входного массива/списка, отсортированные в лексикографическом порядке.

let str = ['one','two','three'];

sortme = function( names ){
    return names.sort()

}

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b){
    return arr.filter((elem,i) =>{
        if(arr[i] >= a && arr[i] <= b) return elem
    })
}


function sortArr(arr){
   return arr.sort((a,b)=>{
        if (a > b){
            return -1;
        }
        if (a < b){
            return 1
        }
        return 0
    })
}

class Calculator {
    constructor(str){
        this.obj = {

        };
        this.arr = [
            ['+',(a,b) => {
                return a + b
            }],
            ['-',(a,b) => {
                return a - b
            }]
        ]
    }
    // calculate(str){
    //     str = str.split(' ');
    //     if(str[1] === '+'){
    //         return +(str[0]) + +(str[2])
    //     }
    //     if(str[1] === '-'){
    //         return +(str[0]) - +(str[2])
    //     }
    // };
    calculate(str){
        str = str.split(' ');
        let targetArr = this.arr.find(elem => elem[0] === str[1])[1];
        

        console.log(targetArr(+str[0],+str[2]))
    }


    addMethod(s,func){
        this.arr.push([s,func])
    }
}

function Calculator2(){
    
    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    };

    this.calculate = function(str) {
        let split = str.split(' '), a = +split[0], op = split[1], b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
    
    console.log(op)
    return this.methods[op](a, b);
    }
    this.addMethod = function(name, func){
        this.methods[name] = func;
    }

    
}


function namesArr(){
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [vasya, petya, masha];

    let names = users.map(elem =>{
        return elem.name
    })
    return names
}


function namesArr2(){
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [ vasya, petya, masha ];
    
    let usersMapped = users.map(item => {
        return {
            fulname: `${item.name} ${item.surname}`,
            id: item.id
        }
    })
    return usersMapped
}

function age(){
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];

   let arr2 = arr.sort((item1, item2)=>{
        if(item1.age < item2.age){
            return -1
        }
        if(item1.age > item2.age){
            return 1
        }
        return 0
    })
    return arr2
}

function shuffle(arr){
    let saveRandom = new Set, random;
    arr.forEach((item,i)=>{
        random = Math.floor(Math.random() * (arr.length - 1) + 1);
        console.log(random)
        if(!saveRandom.has(i)){
            [arr[i], arr[random]] = [arr[random], arr[i]]
        }

        saveRandom.add(random);
    })
    return arr
}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr){
    let unique = new Set()
    arr.forEach(item => unique.add(item))
    return [...unique]
}

function getAverageAge(users){
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [ vasya, petya, masha ];

    return arr.reduce((prev, item) => {
        return prev += item.age 
    },0) / arr.length
    
}
console.log (getAverageAge())
console.log(22222)
