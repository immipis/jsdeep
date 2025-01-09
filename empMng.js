init();

function init(){
  //초기세팅
  document.querySelector('#init').addEventListener('click',initInfo)
  document.querySelector('#insert').addEventListener('click',addEnmpInfo)
  document.querySelector('#update').addEventListener('click',updateEmpInfo)
  document.querySelector('#del').addEventListener('click',delEmpInfo)

  getEmpList();
}
function getEmpList() {
  //document.querySelector('#empList tbody').innerHTML ='';
  document.querySelector('#empList tbody').replaceChildren();
  fetch("http://192.168.0.11:8099/empList")
    .then(response => response.json())
    .then(result => {
      addTable(result)
    })
    .catch(err => console.log(err))    
}
function addTable(m){
  m.forEach(element => {
    let trTag = document.createElement('tr')
    trTag.addEventListener('click',e=>{
      empinfo(e.currentTarget.children[0].textContent)
      document.querySelectorAll('#empList tr').forEach(e=>{
        e.classList.remove('selectTd')
      })
      e.currentTarget.classList.add('selectTd')

    })
    let field =['employeeId','lastName','jobId']
    field.forEach(e=>{
      let tdTag = document.createElement('td');
      tdTag.textContent = element[e]
      trTag.append(tdTag)
    })
    document.querySelector('#empList tbody').append(trTag)
  });
}
function empinfo(id){
  fetch(`http://192.168.0.11:8099/empInfo?employeeId=${id}`)
  .then(response => response.json())
  .then(result => {
    for (const key in result) {
      if(document.getElementsByName(key)[0] != null){
        document.getElementsByName(key)[0].value = result[key]
      }
    }
  })
  .catch(err => console.log(err))    
}
function findEmpInfo(){
  let obj={};
  document.querySelectorAll('#empInfo input').forEach(element => {
    obj[element.name] =element.value;
  });
  return obj
}
function initInfo(){
  document.querySelectorAll('#empInfo input').forEach(element => { 
    element.value = "";
  });
  getEmpList();
}

function addEnmpInfo(event){
  let empInfo = findEmpInfo();
  if(!cheked()){
    alert('새로운 정보가 아닙니다.');
    return;
  }
  fetch("http://192.168.0.11:8099/empInsert", {
    method: "POST",
    body: new URLSearchParams(empInfo)
  })
  .then(response => response.json())
  .then(result =>{
    document.getElementsByName('employeeId')[0].value = result.employeeId
    initInfo();
   })
  .catch(err => console.log(err))
}

function updateEmpInfo(event){
  let empInfo = findEmpInfo();
  if(cheked()){
    alert('수정할 수 있는 정보가 아닙니다.');
    return;
  }
  fetch("http://192.168.0.11:8099/empUpdate", {
    method: "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(empInfo)
  })
  .then(response => response.json())
  .then(result =>{
    console.log(result)
    initInfo();
   })
  .catch(err => console.log(err))
}

function delEmpInfo(event){
  let empInfo = findEmpInfo();
  if(cheked()){
    alert('삭제할 수 있는 정보가 아닙니다.');
    return;
  }
  fetch(`http://192.168.0.11:8099/empDelete?employeeId=${empInfo.employeeId}`)
  .then(response => response.json())
  .then(result =>{
    initInfo();
   })
  .catch(err => console.log(err))
}

function cheked(){
  if(document.getElementsByName('employeeId')[0].value == '') {
    return true; 
  } 

  if(document.getElementsByName('employeeId')[0].value != ''){
    return false; 
  }
}