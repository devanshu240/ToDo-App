let outdiv= document.getElementById("tcontainer");
let taskname = document.getElementById("task");
const arr =[];
let count=0;

taskname.addEventListener('keydown',(e)=>{
if(e.key=='Enter')
{  addToList();
  taskname.value='';
}
});i

function addToList()
{
  let taskdiv = document.createElement('div');
  let spantask = document.createElement('span');
  spantask.innerHTML=taskname.value;
  // count++;
  // let tobj = {};
  // tobj.id=count;
  // tobj.status='pending';
  // tobj.task= taskname.value;
  // arr.push(tobj);

  let check = document.createElement('input');
  check.setAttribute('type','checkbox');
  check.setAttribute('title','checktocomplete');
  check.addEventListener('click',(e)=>{
    if(check.checked === true)
        spantask.style.textDecoration = 'line-through';
    else
        spantask.style.textDecoration = 'none';
  });

  let btn = document.createElement('input');
  btn.setAttribute('type','button');
  btn.setAttribute('title','Delete');
  btn.value = 'X';
  btn.addEventListener('click',()=>{
        taskdiv.remove();
  });

  taskdiv.appendChild(spantask);
  taskdiv.appendChild(check);
  taskdiv.appendChild(btn);
  outdiv.appendChild(taskdiv);  
 
}








