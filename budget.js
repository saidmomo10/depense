// let budget = document.getElementById("budget");
// let budget_somm = document.getElementById("budget_somm");
// let formdepense = document.getElementById("formdepense");
// let nom_depense = document.getElementById("nom_depense");
// let prix_depense = document.getElementById("prix_depense");
// let bud = document.getElementById("bud");
// let depense = document.getElementById("depense");
// let solde = document.getElementById("solde");
// let table = document.getElementById("table");
// let tbody = document.getElementById("tbody");
// let modify_elem = document.getElementById("modify");
// let url = location.href.substr(0,location.href.indexOf("#"));

// const toStorage = (what,{budget,nom_depense,prix_depense,old_name}) => {
//     if(typeof Storage !== undefined){
//         let user = localStorage.getItem("user");
//         if(user === null){localStorage.setItem("user",JSON.stringify({budget:0,expenses:[],modify:new Date().toLocaleString()}))}
//         user = localStorage.getItem("user");
//         user = JSON.parse(user);
//         if(what === "updateBudget"){
//             localStorage.setItem("user",JSON.stringify({...user,budget,modify:new Date().toLocaleString()}));
//         }else if(what === "addExpense"){
//             let isExists = user.expenses.some((obj) => obj.name === nom_depense );
//             if(isExists){
//                 alert(nom_depense+" already exists");
//             }else{
//                 user.expenses.push({name:nom_depense,amt:prix_depense});
//                 localStorage.setItem("user",JSON.stringify({...user,modify:new Date().toLocaleString()}));
//             }
//         }else if(what === "updateExpense"){
//             user.expenses = user.expenses.map((val) => {
//                 if(val.name === old_name){ return {name:nom_depense,amt:prix_depense} };
//                 return val;
//             });
//             localStorage.setItem("user",JSON.stringify({...user,modify:new Date().toLocaleString()}));
//         }else if(what === "load"){
//             modify_elem.innerText = "Dernière mise à jour effectuée le "+user.modify;
//             bud.innerText = user.budget+"Fcfa";
//             let total_bal = user.budget;
//             let exp_amount = 0;
//             if(user.expenses.length > 0){
//                 table.classList.remove("d-none");
//                 tbody.innerHTML = "";
//                 user.expenses.forEach((val) => {
//                     tbody.insertAdjacentHTML("beforeend",`<tr><td>${val.name}</td><td>${val.amt}</td><td>
//                     <button class='btn btn-green' type='button' onclick="updateExp('${val.name}','${val.amt}')"><i class='fa-solid fa-pen-to-square'></i></button>
//                     <button class='btn btn-red' type='button' onclick="deleteExp('${val.name}')"><i style="color: green;"  class='fa-solid fa-trash-can'></i></button>
//                     </td></tr>`);
//                     exp_amount += Number(val.amt);
//                     total_bal -= val.amt;
//                 });
//             }else{table.classList.add("d-none")}
//             depense.innerText = exp_amount+"Fcfa";
//             if(total_bal < 0){
//                 solde.classList.add("red");
//                 solde.classList.remove("green");
//             }else if(total_bal > 0){
//                 solde.classList.add("green");
//                 solde.classList.remove("red");
//             }
//             solde.innerText =  total_bal+"Fcfa";
//         }else if(what === "delete"){
//             user.expenses = user.expenses.filter((val) => {
//                 return val.name !== nom_depense;
//             });
//             localStorage.setItem("user",JSON.stringify({...user,modify:new Date().toLocaleString()}));
//         }else{
//             alert("something is wrong");
//         }
//     }else{
//         alert("your browser does not support localstorage");
//     }
// }

// toStorage("load",{});

// const updateExp = (name,amt) => {
//     formdepense.dataset.task = "updateExpense";
//     formdepense.dataset.old = name;
//     formdepense.lastElementChild.innerText = "update";
//     nom_depense.value = name;
//     prix_depense.value = amt;
//     location.assign(url + "#formdepense");
//     toStorage("load",{});
// }
// const deleteExp = (nom_depense) => {
//     toStorage("delete",{nom_depense});
//     toStorage("load",{});
// }

// budget.addEventListener("submit",(e) => {
//     e.preventDefault();
//     if(budget_somm.value === ""){
//         alert("please enter budget.");
//     }else{
//         toStorage("updateBudget",{budget:Math.abs(budget_somm.value)});
//         toStorage("load",{});
//     }
//     budget.reset();
// });
// formdepense.addEventListener("submit",(e) => {
//     e.preventDefault();
//     let task = formdepense.dataset.task;
//     let old_name = formdepense.dataset.old;
//     if(nom_depense.value.trim() === "" || nom_depense.value === undefined){
//         alert("please enter expense name");
//     }else if(prix_depense.value === ""){
//         alert("enter expense amount");
//     }else{
//         toStorage(task,{old_name,nom_depense:nom_depense.value.trim(),prix_depense:prix_depense.value.trim()});
//         toStorage("load",{});
//         if(task === "updateExpense"){
//             formdepense.dataset.task = "addExpense";
//             formdepense.dataset.old = "0";
//             formdepense.lastElementChild.innerText = "add expense";
//             location.assign(url + "#tbody");
//         }
//         formdepense.reset();
//     }
// })

const btnMenu = document.querySelector('a.btn-menu')
if(btnMenu){
    btnMenu.addEventListener('click', e=>{
        e.preventDefault()
        const headerMenu = document.querySelector('ul.header__menu')
        if(btnMenu.classList.contains('active')){
            btnMenu.classList.remove('active')
        }else{
            btnMenu.classList.add('active')
        }
        if(headerMenu.classList.contains('active')){
            headerMenu.classList.remove('active')
        }else{
            headerMenu.classList.add('active')
        }
    })
}