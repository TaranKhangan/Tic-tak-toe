let boxes=document.querySelectorAll('.btn');
let re_btn=document.querySelector('#reset-btn');
let newBTN=document.querySelector('#newbtn');
let container=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turnO=true//player X , player O
const winpatten=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
 
const re_game=()=>{
    turnO=true;
    enabled_btn();
    container.classList.add('hide');
}
 
boxes.forEach((btn) => {
    btn.addEventListener('click',()=>{
       // console.log('clicked');
        if (turnO){  //playerO
          btn.innerText='O';
          turnO=false;
        }
        else{  //playerX
            btn.innerText='X';
            turnO=true;
        }
        btn.disabled= true;
         checkWinner();
    });
});
const disabled_btn=()=>{
    for(let btn of boxes){
        btn.disabled=true;
    }
}
const enabled_btn=()=>{
    for(let btn of boxes){
        btn.disabled=false;
        btn.innerText="";
    }
}
const showWinner=(Winner)=>{
       msg.innerText=`CONGRATULATIONS!! WINNER IS ${Winner}`;
       container.classList.remove('hide');
       disabled_btn();
}
  const checkWinner=()=>{
      for(let pattern of winpatten){
        let loc1=boxes[pattern[0]].innerText;
        let loc2=boxes[pattern[1]].innerText;
        let loc3=boxes[pattern[2]].innerText;
        if(loc1!=""&& loc2!=""&& loc3!=""){
            if(loc1===loc2&&loc2===loc3){
               // console.log('Winner',loc1);
                showWinner(loc1);
            }
        }
    }
}
newBTN.addEventListener('click',re_game);
re_btn.addEventListener('click',re_game);
