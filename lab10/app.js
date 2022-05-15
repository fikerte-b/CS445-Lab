const { from } = rxjs;
window.onload = function () {
  const btn = document.getElementById("btn");
  const inp = document.getElementById("input-num");
  btn.addEventListener("click", showEmp);
  const empDiv = document.getElementById("empsList");
  async function showEmp() {
    console.log("showemp");
    const num = inp.value;
    let result = await fetch("https://randomuser.me/api/?results=" + num);
    let empjson = await result.json();
    const emps = empjson.results;
    console.log(emps);
    renderEmps(emps);
  }
  function renderEmps(emps) {
    empDiv.innerHTML = " ";

    from(emps).subscribe((emp) => {
      console.log(emp);
      let row = document.createElement("div");
      row.class = "row";
      empDiv.append(row);
      let temp = `<hr/>
      <div class="col-4">
        <p>${emp.name.first} ${emp.name.last}<p/>
      </div>
      <div class="col-8 text-end">
        <p class="fw-bold"> ${emp.location.street.number}${emp.location.street.name}</p>
        <p> ${emp.location.city} ${emp.location.state} ${emp.location.country} ${emp.location.postcode}</p>
    </div>
      `;
      row.innerHTML = temp;
    });
  }
};
