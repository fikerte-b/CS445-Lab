window.onload = function(){
   // console.log("testtttttttttttt");
    intialFetch();
    let container = document.getElementById("containerId");
    let employee = document.getElementById("empId");
    let btn = document.getElementById("btnId");
    btn.onclick =function(){
        employee.innerHTML = "";
        intialFetch();
    }

    async function intialFetch(){
    // for single employee
    //  let res = await fetch('https://randomuser.me/api/?results=1');
    //  let data = await res.json();
    //  console.log("data after json", data);
    //  console.log("myphoneeee", data.results[0].phone);
    //  name.innerHTML = data.results[0].name;
    //  phone.innerHTML = phone.innerHTML + data.results[0].phone;
    //  email.innerHTML = data.results[0].email;
    let res = await fetch('https://randomuser.me/api/?results=5');
     let data = await res.json();
    //  console.log("data after json", data);
    //  console.log("myphoneeee", data.results[0].phone);
     let employeesList = data.results;
     for(let i=0; i<employeesList.length; i++){
         let eachEmp = `<div id=empListId>
                            <div id="imgId"><img src="${employeesList[i].picture.large}"></div>
                            <p id="nameId">${employeesList[i].name.first}  ${employeesList[i].name.last}</p>
                           <p>phone: ${employeesList[i].phone}</p>
                            <p>${employeesList[i].email}</p>
                            
                      </div>
                      <hr>`
        employee.innerHTML = employee.innerHTML+ eachEmp;
     }
     

    }
    
}