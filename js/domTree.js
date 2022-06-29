function findElementsInBox1(){
    let box1Form1 = document.querySelector('.box1-form1');
    let btnForm1 = document.getElementById('box1Btn1');

    function btnClick(box1Result){
        let inputForm1 = box1Form1.querySelector('.box1-form1__input');
        let box1 = document.querySelector('.box1');
        let elements = box1.querySelectorAll(inputForm1.value);
        let checkbox1 = box1Form1.querySelector('.box1-form1__checkbox1');
        let checkbox2 = box1Form1.querySelector('.box1-form1__checkbox2');



        box1Result.innerHTML += `<div><h3>Number element ${
            inputForm1.value}: ${elements.length}</h3></div>`;



        function  showElementText  (){
            for (let element of elements){
                let nodeText = ''
                for(let node of element.childNodes){
                    if (node.nodeType === 3){
                        nodeText += node.data
                    }
                }
                box1Result.querySelector('ol').innerHTML += `<li> ${inputForm1.value} text : ${nodeText}</li>`
            }
        }

        function InheritsClasses(){
            let classes = [HTMLBodyElement, HTMLElement, Element, Node, EventTarget, Object];
            let result = [];

            classes.forEach(elem => {
                if (elements[0] instanceof elem) result.push(`<li>${elem.name}</li>`)
            })
            result = result.join('')
            return result
        }

        if(checkbox1.checked){
            box1Result.innerHTML +=
            `<div><h3>Show element ${inputForm1.value} text:</h3><ol></ol></div>`
            showElementText()
        }
        if(checkbox2.checked){
            box1Result.innerHTML += `<div><h3>Inherits from classes:</h3><ol>${InheritsClasses()}</ol></div>`
        }
    }

    btnForm1.addEventListener('click',function() {
        let box1Result = document.querySelector('.box1-result');
        box1Result.innerHTML = '';
        box1Result.style.display = 'block';
        try {
            btnClick(box1Result);
        }catch(e){
            alert('Please enter element: a, li, ui')
        }
        })
}




function findAtributes(){
    let box2 = document.querySelector('.box2')
    let box2Radio = document.getElementsByName('box2Radio');
    let box2InputText = box2.querySelector('.box2__InputText');
    let box2Btn = box2.querySelector('.box2__btn');
    let box2_h3 = box2.querySelector('.box2__h3');


    function showAttributes(radioAtt){
        let arrAttributes = []
        for(let attribute of radioAtt){
            arrAttributes.push(attribute.nodeName +': '+attribute.nodeValue+'<br>');
        }
        let box2_result = document.querySelector('.box2__result');
        box2_result.innerHTML = `${arrAttributes.join('')}`;

    }

    for(let radio of box2Radio){
       if(radio.hasAttribute('checked')) {
           box2_h3.innerHTML = `Attributes: ${radio.attributes.id.value}`;
           showAttributes(radio.attributes);
        };
        radio.addEventListener('change',function(e){
            showAttributes(this.attributes);
            box2_h3.innerHTML = `Attributes ${radio.attributes.id.value}`;
        })
    }
    box2Btn.addEventListener('click',function(){
        let box2InputText = box2.querySelector('.box2__InputText');
        try {
            let inputTextValues = box2InputText.value.split(',');
            for (let radio of box2Radio){
                if(radio.checked){
                    radio.setAttribute(inputTextValues[0],inputTextValues[1])
                    showAttributes(radio.attributes);
                }
            }

        }catch(err) {
            alert('Please enter data: attribute,value')
        }
    })
}


// BOX 3

function createElement() {
    let box3_btn = document.getElementById('box3_btn');

    box3_btn.addEventListener('click', function(e){
        let list = document.querySelector('.box3__list');
        let select = document.querySelector('.box3__select');
        let container = document.querySelector('.box3__con');

        let li = document.createElement('li');

        li.className = 'box3__item';
        li.innerHTML = `<a href='#'>New link</a>`;

        if(select.value === 'before'){
            container.children[0].prepend(li);
        }else if(select.value === 'after'){
            container.children[2].append(li);
        }else {
            list[select.value](li);
        }
     
    })
}
function deleteElement(){
    let btn = document.getElementById('box3_btn2');

    btn.addEventListener('click', function(){
        list = document.querySelector('.box3__list');
        container = document.querySelector('.box3__con');
        console.log (container.children[0].children.length === 0);
        
        if(container.children[0].children.length != 0){
            container.children[0].firstElementChild.remove()
        }else if (container.children[1].children.length != 0) {
            container.children[1].firstElementChild.remove()
        }else if (container.children[2].children.length != 0) {
            container.children[2].firstElementChild.remove()
        }else if (container.children[3].children.length != 0){
            container.children[3].firstElementChild.remove()
        }
        else alert('No items to remove')

    })
}

function cloneElement(){
    let btn = document.getElementById('box3_btn3');
   
    btn.addEventListener('click',function(){
        let elem = document.querySelector('.box3__con');
        let box = document.querySelector('.box3');
        let form = document.querySelector('.box3__form');
        let cloneElem = elem.cloneNode(true);
        
        box.append(cloneElem);
        form.before(cloneElem);
    })
}


function createList(){
    let btn = document.getElementById('box3_btn4');
    let box = document.querySelector('.box3__con');
    let ol = document.createElement('ol');

    btn.addEventListener('click',(e)=>{
        
        while(true){
          let result = prompt('Please enter a list item','');
          if(!result){
              break;
          }

          let li = document.createElement('li');
          li.textContent=result;
          ol.append(li);
          box.append(ol);
        }
    })
}  
        
let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Trees": {
      "Huge": {
        "Sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "Apple tree": {},
        "magnolia": {}
      }
    }
  };


function list(obj) {
    
    let ol = document.createElement('ol');

    for(let i in obj){
        if(Object.keys(obj[i]).length > 0){
            ol.append(i);
            ol.append(list(obj[i]))
            
        }else {
            let li = document.createElement('li');
            li.append(i);
            ol.append(li);
        }
    }
    return ol
}

function countingСhildren(selecter){
    let list = document.querySelector(`.${selecter}`).lastElementChild;
    list = list.getElementsByTagName('*');
  
    // console.log(list)
    for(let i of list){
        if(i.children.length > 0){
            i.insertAdjacentHTML('beforebegin',` [${i.children.length}]`);
        }
    }
}
    
function addList(selector){
 let box = document.querySelector(`.${selector}`);
 box.append(list(data))
}  


    
let timer = (function (){
    let box = document.querySelector('.box4__timer');
    return ()=> {
        let now = new Date(); 
        box.innerHTML = now.toLocaleTimeString();
    }
})()



function timerConrtol(){
    let btn = document.querySelectorAll('.box4__btn');
    btn[1].addEventListener('click',()=>{
        clearInterval(timerId);
        timerId = null;
    });
    btn[0].addEventListener('click',()=> {
        timerId = setInterval(()=>{timer()}, 1000)  
    })
}    

function date(){
    let box = document.querySelector('.box4__date');
    let now = new Date();
    box.innerHTML = now.toLocaleDateString();
}
   
function howManyDaysUntilBirthday(){
 let btn = document.getElementById('box4__btn1');
 let bDate = document.getElementById('bday');
 let date1 = new Date();
 let dateReverse = date1.toLocaleDateString().split('.').reverse().join('-');
 bDate.setAttribute('max',dateReverse);
 bDate.value = dateReverse;
 
 function calculateBirthdayDate(calendarDate){
    let div = document.querySelector('.box4__bdayResult');
    
    let nowDate = new Date();
    calendarDate = new Date(nowDate.getFullYear()+'-'+calendarDate.slice(5));
    let result = calendarDate - nowDate;

    if(result < 0){result += 31536000000};
    if(new Date(calendarDate).toLocaleDateString() === new Date().toLocaleDateString()){result = 0}

    let days = Math.floor(result / (1000 * 60 * 60 * 24));
    let hour = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((result % (1000 * 60)) / 1000);
    div.innerHTML = `${days}d  ${hour}h  ${min}m  ${sec}s`;
}

 btn.addEventListener('click',(e)=>{
    let calendarDate = document.getElementById('bday');
    let div = document.querySelector('.box4__bdayResult');
  
    if(div.style.display === '')div.style.display = 'block';
    let calendarDateValue = calendarDate.value+'T'+'00:00:00';
    calculateBirthdayDate(calendarDateValue)
    
    })
}
    
function howMuchTimeIsLeft(){
    let btn = document.getElementById('box4__btn2');
    let calendar = document.getElementById('box4Calendar');
    let nowDate = new Date();
    let nowDateReverse = nowDate.toLocaleDateString().split('.').reverse().join('-');
    calendar.value = nowDateReverse;
    calendar.setAttribute('min',nowDateReverse);
    
    function calculateTime(){
       
        let box = document.querySelector('.box4__howMuchTimeResult')
        let nowDate = new Date();
        let nowCalendar = document.getElementById('box4Calendar').value;
        console.log(nowCalendar+'T'+nowDate.toLocaleTimeString())
        nowCalendar = new Date(nowCalendar+'T'+'00:00:00');
        let result = nowCalendar.getTime() - nowDate.getTime();
        if(result<0) result = 0;
        let days = Math.floor(result / (1000 * 60 * 60 * 24));
        let hour = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let min = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((result % (1000 * 60)) / 1000);
        if (box.style.display === '') box.style.display = 'block';
        box.innerHTML = `${days}d  ${hour}h  ${min}m  ${sec}s`;
    }
    btn.addEventListener('click',()=>{
        calculateTime();
    })

}  
       
// box 5
function showNotification(){
    const figure = document.createElement('div');
    const box = document.querySelector('.box5');
    const btn = document.getElementById('box5_btn');
    const select = document.getElementById('box5_select1');
    const container = document.createElement('div');
    const color = document.getElementById('box5_selectColor');
    const btn2 = document.getElementById('box5_btn2');
    const positionBox = document.createElement('div');
    const select1 = document.getElementById('box5_select1');

    

    container.style.cssText = `
        padding: 10px;
        border: 1px solid;
        display: flex;
    `
          
        
       


    figure.classList.add('box5__result');
    figure.classList.add('box5__result2');
    figure.classList.add('box5__result3');
    figure.classList.toggle('box5__result3'); 
    
    
    
    btn.addEventListener('click',()=>{
        box.append(container);  
        positionBox.innerHTML = `
        <span>Position:</span>
        <div>Left</div>
        <div>Centr</div>
        <div>Right</div>
        `
        const positionBtn = positionBox.querySelectorAll('div');

        if(select.value === 'triangle'){
            figure.style.cssText=`
            width:100px;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 100px solid ${color.value};
            position:relative;
            `;      
        }
        if(select.value === 'circle'){
            figure.style.cssText=`
            border-radius: 50%;
            background: ${color.value};
            height: 100px;
            width: 100px;
            `;      
        }
        if(select.value === 'square'){
            figure.style.cssText=`
            background: ${color.value};
            height: 100px;
            width: 100px;
            `;      
        }
        
        for(let btn of positionBtn){
            console.log()
            if(btn.firstChild.data === 'Left'){
                btn.addEventListener('click',(e)=>{
                    container.className ='box5__positionLeft';
                })
            }
            if(btn.firstChild.data === 'Centr'){
                btn.addEventListener('click',(e)=>{
                    container.className ='box5__positionCentr';
                })
            }
            if(btn.firstChild.data === 'Right'){
                btn.addEventListener('click',(e)=>{
                    container.className = 'box5__positionRight';
                })
            }
        }


        positionBox.classList.add ('box5__pos');  
        container.append(figure);
        container.after(positionBox);
        
    })
   btn2.addEventListener('click',()=>{
        figure.style.cssText = '';
        container.remove();
        positionBox.remove();

   })
    
    
    console.log(figure)
    
    

    console.log(getComputedStyle(figure).width)
    figure.style.width = '200px'
    console.log(figure.classList);
    console.log(figure.style);
}

        




    

   
 
let timerId = setInterval(()=>{timer()}, 1000);   


howMuchTimeIsLeft()
timerConrtol()
date()

howManyDaysUntilBirthday()

addList('box3__con')  
countingСhildren('box3__con')   


createList()
cloneElement()
deleteElement()
createElement()

findAtributes()
findElementsInBox1()

showNotification()