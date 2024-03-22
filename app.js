let box=document.querySelectorAll("#box");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector(".newgame");
let win=document.querySelector("#winner")
let mess=document.querySelector(".massegecontainer")
let turnO=true;
let winningpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let showwinner=(winner)=>{
    win.innerText=`Congratulations! ${winner} Won`
    mess.classList.remove("hide");
    disablebutton();
}
box.forEach((value)=>{
    value.addEventListener("click",()=>{
        console.log("The box is selected.");
        if(turnO){
            value.innerText="O"
            turnO=false;
            value.style.color="#d60f37";
        }else{
            value.innerText="X";
            turnO=true;
            value.style.color="#985312";
        }
        count=count+1;
        value.disabled=true;
        checkwinner();
        console.log(count); 
        // draw(draw,count);    
    })
})
let disablebutton=()=>{
    for(let i of box){
        i.disabled=true;
    }
}
let resetgame=()=>{
    turnO=true;
    enablebutton();
    mess.classList.add("hide");
    count=0;

}
let enablebutton=()=>{
    for(let e of box){
        e.disabled=false;
        e.innerHTML="";
    }
}
let count=0;
let checkwinner=()=>{
    var draw=true;
    for(let pattern of winningpattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(box[pattern[0]],box[pattern[1]],box[pattern[2]]);
        let value1=box[pattern[0]].innerText;
        let value2=box[pattern[1]].innerText;
        let value3=box[pattern[2]].innerText;
        if(value1!=""&&value2!=""&&value3!=""){
            if(value1===value2&&value2===value3){
                console.log("Winner",value1);
                showwinner(value1);
                draw=false;
                player=value1;
            }
        }
    }
    console.log(draw);
    drawn(count,draw);
    console.log(a);
    console.log(b);
}
let drawn=(count,draw)=>{
    if(draw===true&&count===9){
        win.innerText="Draw";
        mess.classList.remove("hide");
    }
}
resetbtn.addEventListener("click",()=>{
    resetgame();
})
newbtn.addEventListener("click",()=>{
    resetgame();
})



