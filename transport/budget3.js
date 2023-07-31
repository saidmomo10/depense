// const searchBar = document.querySelector("#search");

// searchBar.addEventListener("keyup",(e) => {
//     const searchedLetters = e.target.value;
//     console.log(e);
//     let contente = document.getElementById("contente");
//     console.log(contente);
//     filterElement(searchedLetters, contente)
// });

// function filterElement(letters, elements){
//     if (letters.length>2){
//         for(let i=0; i<elements.length; i++){
//             if(elements[i].textContent.toLowercase().includes(letters)){
//                 elements[i].style.display = "block";
//             } else{
//                 elements[i].style.display = "none";
//             }
//         }
//     }
// }

// const search = document.getElementById('search');
// const nom = [{nom_depense:'nom_depense'}];
// search.addEventListener("input",(e)=>{
    
//     const  curentValue = e.target.value;
//     console.log(curentValue)
//     tbody.innerHTML = ''
//     const dataFilter =  nom.filter( element => element.val.name.toLowerCase().includes(curentValue.toLowerCase()))
//     createListItems(dataFilter)
    
// })
// const search = document.getElementById('search');
// let nom = {name:nom_depense,amt:prix_depense};
// search.addEventListener("input", filterData)

// function filterData(e) {

//     tbody.innerHTML = ""

//   const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
//   console.log(searchedString)
//   const filteredArr = nom.filter(el => 
//     el.val.name.toLowerCase().includes(searchedString) || 
//     `${el.val.name}`.toLowerCase().replace(/\s/g, "").includes(searchedString)
//     )

//   createUserList(filteredArr)
// }


// const array = [`${val.name}`];
// const searchInput = document.getElementById("search");
// const listElement = document.querySelectorAll("td");

// searchInput.addEventListener("input", () => {
//   const filterText = searchInput.value.toLowerCase();
//   const filteredArray = array.filter((element) => {
//     return element.toLowerCase().includes(filterText);
//   });

//   listElement.innerHTML = "";
//   filteredArray.forEach((element) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = element;
//     listElement.appendChild(listItem);
//   });
// });

//const array = [`${}`];
// const searchInput = document.getElementById("search");
// const listElement = document.getElementById("elem");

// searchInput.addEventListener("input", () => {
//   const filterText = searchInput.value.toLowerCase();
//   const filteredArray = array.filter((element) => {
//     return element.toLowerCase().includes(filterText);
//   });

//   listElement.innerHTML = "";
//   filteredArray.forEach((element) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = element;
//     listElement.appendChild(listItem);
//   });
// });








let budget = document.getElementById("budget");
let budget_somm = document.getElementById("budget_somm");
let formdepense = document.getElementById("formdepense");
let nom_depense = document.getElementById("nom_depense");
let prix_depense = document.getElementById("prix_depense");
let bud = document.getElementById("bud");
let depense = document.getElementById("depense");
let solde = document.getElementById("solde");
let table = document.getElementById("table");
let tbody = document.getElementById("tbody");
let modify_elem = document.getElementById("modify");
let url = location.href.substr(0,location.href.indexOf("#"));




const toStorage = (what,{budget,nom_depense,prix_depense,old_name}) => {
    if(typeof Storage !== undefined){
        let user3 = localStorage.getItem("user3");
        if(user3 === null){localStorage.setItem("user3",JSON.stringify({budget:0,expenses:[],modify:new Date().toLocaleString()}))}
        user3 = localStorage.getItem("user3");
        user3 = JSON.parse(user3);
        if(what === "updateBudget"){
            localStorage.setItem("user3",JSON.stringify({...user3,budget,modify:new Date().toLocaleString()}));
        }else if(what === "addExpense"){
            let isExists = user3.expenses.some((obj) => obj.name === nom_depense );
            if(isExists){
                alert(nom_depense+" already exists");
            }else{
                user3.expenses.push({name:nom_depense,amt:prix_depense});
                localStorage.setItem("user3",JSON.stringify({...user3,modify:new Date().toLocaleString()}));
            }
        }else if(what === "updateExpense"){
            user3.expenses = user3.expenses.map((val) => {
                if(val.name === old_name){ return {name:nom_depense,amt:prix_depense} };
                return val;
            });
            localStorage.setItem("user3",JSON.stringify({...user3,modify:new Date().toLocaleString()}));
        }else if(what === "load"){
            modify_elem.innerText = "Dernière mise à jour effectuée le "+user3.modify;
            bud.innerText = user3.budget+"Fcfa";
            let total_bal = user3.budget;
            let exp_amount = 0;
            if(user3.expenses.length > 0){
                table.classList.remove("d-none");
                tbody.innerHTML = "";
                let position = 1;
                user3.expenses.forEach((val) => {
                    tbody.insertAdjacentHTML("beforeend",`<tr><td>${position++}</td><td>${val.name}</td><td>${val.amt}</td><td>
                    <button class='modif' style="cursor: pointer;border: none; background: none" class='btn btn-green' type='button' onclick="updateExp('${val.name}','${val.amt}')"><i style="color: #01b464;" class='fa-solid fa-pen-to-square'></i></button>
                    <button style="cursor: pointer;border: none; margin-left: 10px; background: none" class='btn btn-red' type='button' onclick="deleteExp('${val.name}')"><i style="color: red;"  class='fa-solid fa-trash-can'></i></button>
                    </td></tr>`);
                    exp_amount += Number(val.amt);
                    total_bal -= val.amt;
                    localStorage.setItem("user3",JSON.stringify({...user3,total_bal,exp_amount}));

                    const modif = document.querySelectorAll('.modif')
                    modif.forEach((item)=>{
                        item.addEventListener("click",(e)=>{
                            e.preventDefault()
                            if(!expense__modale.classList.contains('active')){
                                expense__modale.classList.add('active') 
                            }
                        })
                    })

                    //barre de recherche
                    const search = document.querySelectorAll("input[type=search]")[0]
                    search.addEventListener("input", function() {
                        // tbody.innerHTML = ''
                        const searchValue = search.value;
                        const nom = user3.expenses;
                        console.log(nom);
                        const filteredData = nom.filter(function(val){ 
                            return val.name.toLowerCase().includes(searchValue.toLowerCase());
                        // fetchAllMovies(filteredData);
                    });

                    //   const listElement = document.querySelector("table");
                    const listElement = document.getElementById("tbody");
                    listElement.innerHTML = filteredData.map(function(val) {
                        return "beforeend" ,`<tr><td>${position++}</td><td>${val.name}</td><td>${val.amt}</td><td>
                        <button class='modif' style="cursor: pointer;border: none; background: none" class='btn btn-green' type='button' onclick="updateExp('${val.name}','${val.amt}')"><i style="color: #01b464;" class='fa-solid fa-pen-to-square'></i></button>
                        <button style="cursor: pointer;border: none; margin-left: 10px; background: none" class='btn btn-red' type='button' onclick="deleteExp('${val.name}')"><i style="color: red;"  class='fa-solid fa-trash-can'></i></button>
                        </td></tr>`;
                    }).join("");
                    });
                });
            }else{table.classList.add("d-none")}
            depense.innerText = exp_amount+"Fcfa";
            if(total_bal < 0){
                // alert('Votre budget est insuffisant');
                // solde.innerText ="0";
                solde.classList.add("red");
                solde.classList.remove("green");
            }else if(total_bal > 0){
                solde.classList.add("green");
                solde.classList.remove("red");
            }
            solde.innerText =  total_bal+"Fcfa";



            var curr = new Date;
            var week = []
                        for (let i = 1; i <= 7; i++) {
                let first = curr.getDate() - curr.getDay() + i
                let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
                week.push(day)
            }  

            const barCanvas = document.getElementById("barCanvas");
            const barChart = new Chart(barCanvas, {
                type: "bar",
                data: {
                    labels: week,
                    datasets: [{
                        labels:'votre sole',
                        data: [total_bal],
                        backgroundColor: [
                            "#1c2e33"
                        ]
                    }]
                },
                option:{
                    scale:{
                        y:{
                            suggestedMax:10000,
                        }
                    }
                }
                
            })





        }else if(what === "delete"){
            user3.expenses = user3.expenses.filter((val) => {
                return val.name !== nom_depense;
            });
            localStorage.setItem("user3",JSON.stringify({...user3,modify:new Date().toLocaleString()}));
        }else{
            alert("something is wrong");
        }
    }else{
        alert("your browser does not support localstorage");
    }
}

toStorage("load",{});


const updateExp = (name,amt) => {
    formdepense.dataset.task = "updateExpense";
    formdepense.dataset.old = name;
    formdepense.lastElementChild.innerText = "update";
    nom_depense.value = name;
    prix_depense.value = amt;
    location.assign(url + "#formdepense");
    toStorage("load",{});
}
const deleteExp = (nom_depense) => {
    toStorage("delete",{nom_depense});
    toStorage("load",{});
}

let delet = document.getElementById('delet')
delet.addEventListener("click", (e)=>{
    // e.preventDefault()
    localStorage.setItem("user3",JSON.stringify({budget:0,expenses:[],modify:new Date().toLocaleString()}))
})

budget.addEventListener("submit",(e) => {
    e.preventDefault();
    if(budget_somm.value === ""){
        alert("Veuillez entrer votre budget");
    }else{
        if(budget__modale.classList.contains('active')){
            budget__modale.classList.remove('active')
        }
        toStorage("updateBudget",{budget:Math.abs(budget_somm.value)});
        toStorage("load",{});
    }
    budget.reset();
});
formdepense.addEventListener("submit",(e) => {
    // e.preventDefault();
    let task = formdepense.dataset.task;
    let old_name = formdepense.dataset.old;
    if(nom_depense.value.trim() === "" || nom_depense.value === undefined){
        alert("Veuillez entrer le motif de la dépense");
    }else if(prix_depense.value === ""){
        alert("Veuillez entrer la somme");
    }else{
        if(expense__modale.classList.contains('active')){
            expense__modale.classList.remove('active')
        }
        toStorage(task,{old_name,nom_depense:nom_depense.value.trim(),prix_depense:prix_depense.value.trim()});
        toStorage("load",{});
        if(task === "updateExpense"){
            formdepense.dataset.task = "addExpense";
            formdepense.dataset.old = "0";
            formdepense.lastElementChild.innerText = "add expense";
            location.assign(url + "#tbody");
        }
        formdepense.reset();
    }
})












// const toStorage = (what,{budget,nom_depense,prix_depense,old_name}) => {
//     if(typeof Storage !== undefined){
//         let user3 = localStorage.getItem("user3");
//         if(user3 === null){localStorage.setItem("user3",JSON.stringify({budget:0,expenses:[],modify:new Date().toLocaleString()}))}
//         user3 = localStorage.getItem("user3");
//         user3 = JSON.parse(user3);
//         if(what === "updateBudget"){
//             localStorage.setItem("user3",JSON.stringify({...user3,budget,modify:new Date().toLocaleString()}));
//         }else if(what === "addExpense"){
//             let isExists = user3.expenses.some((obj) => obj.name === nom_depense );
//             if(isExists){
//                 alert(nom_depense+" already exists");
//             }else{
//                 user3.expenses.push({name:nom_depense,amt:prix_depense});
//                 localStorage.setItem("user3",JSON.stringify({...user3,modify:new Date().toLocaleString()}));
//             }
//         }else if(what === "updateExpense"){
//             user3.expenses = user3.expenses.map((val) => {
//                 if(val.name === old_name){ return {name:nom_depense,amt:prix_depense} };
//                 return val;
//             });
//             localStorage.setItem("user3",JSON.stringify({...user3,modify:new Date().toLocaleString()}));
//         }else if(what === "load"){
//             modify_elem.innerText = "Dernière mise à jour effectuée le "+user3.modify;
            
            // bud.innerText = user3.budget+"Fcfa";
            // let total_bal = user3.budget;
            // let exp_amount = 0;
            // if(user3.expenses.length > 0){
            //     table.classList.remove("d-none");
            //     tbody.innerHTML = "";
            //     let position = 1;
            //     user3.expenses.forEach((val) => {
            //         tbody.insertAdjacentHTML("beforeend",`<tr><td>${position++}</td><td>${val.name}</td><td>${val.amt}</td><td>
            //         <button style="border: none; background: none" class='btn btn-green' type='button' onclick="updateExp('${val.name}','${val.amt}')"><i style="color: green;" class='fa-solid fa-pen-to-square'></i></button>
            //         <button style="border: none; margin-left: 10px; background: none" class='btn btn-red' type='button' onclick="deleteExp('${val.name}')"><i style="color: red;"  class='fa-solid fa-trash-can'></i></button>
            //         </td></tr>`);
            //         exp_amount += Number(val.amt);
            //         total_bal -= val.amt;

//                     //barre de recherche
//                     const search = document.querySelectorAll("input[type=search]")[0]
//                     search.addEventListener("input", function() {
//                         // tbody.innerHTML = ''
//                         const searchValue = search.value;
//                         const nom = user3.expenses;
//                         console.log(nom);
//                         const filteredData = nom.filter(function(val){ 
//                             return val.name.toLowerCase().includes(searchValue.toLowerCase());
//                         // fetchAllMovies(filteredData);
//                     });

//                     //   const listElement = document.querySelector("table");
//                     const listElement = document.getElementById("tbody");
//                     listElement.innerHTML = filteredData.map(function(val) {
//                         return "beforeend" ,`<tr><td>${val.name}</td><td>${val.amt}</td><td>
//                         <button style="border: none; background: none" class='btn btn-green' type='button' onclick="updateExp('${val.name}','${val.amt}')"><i style="color: green;" class='fa-solid fa-pen-to-square'></i></button>
//                         <button style="border: none; margin-left: 10px; background: none" class='btn btn-red' type='button' onclick="deleteExp('${val.name}')"><i style="color: red; border: none; background: none"  class='fa-solid fa-trash-can'></i></button>
//                         </td></tr>`;
//                     }).join("");
//                     });
//                 });
//             }else{table.classList.add("d-none")}
//             depense.innerText = exp_amount+"Fcfa";
//             if(total_bal < 0){
//                 alert('Votre budget est insuffisant');
//                 solde.innerText ="0";
//                 solde.classList.add("red");
//                 solde.classList.remove("green");
//             }else if(total_bal > 0){
//                 solde.classList.add("green");
//                 solde.classList.remove("red");
//                 solde.innerText =  total_bal+"Fcfa";
//             }
            



            
  







//             var curr = new Date;
//             var week = []
//                 for (let i = 1; i <= 7; i++) {
//                 let first = curr.getDate() - curr.getDay() + i
//                 let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
//                 week.push(day)
//             }  
            

//             const barCanvas = document.getElementById("barCanvas");
//             const barChart = new Chart(barCanvas, {
//                 type: "line",
//                 data: {
//                     labels: week,
//                     datasets: [{
//                         labels:'votre solde',
//                         data: [total_bal],
//                         backgroundColor: [
//                             "green"
//                         ]
//                     }]
//                 },
//                 option:{
//                     scale:{
//                         y:{
//                             suggestedMax:500,
//                         }
//                     }
//                 }
                
//             })





//         }else if(what === "delete"){
//             user3.expenses = user3.expenses.filter((val) => {
//                 return val.name !== nom_depense;
//             });
//             localStorage.setItem("user3",JSON.stringify({...user3,modify:new Date().toLocaleString()}));
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
//         alert("Veuillez entrer votre budget");
//     }else{
//         if(budget__modale.classList.contains('active')){
//             budget__modale.classList.remove('active')
//         }
//         toStorage("updateBudget",{budget:Math.abs(budget_somm.value)});
//         toStorage("load",{});
//     }
//     budget.reset();
//     //budget_somm.value ==="";
// });

// formdepense.addEventListener("submit",(e) => {
//     // e.preventDefault();
//     let task = formdepense.dataset.task;
//     let old_name = formdepense.dataset.old;
//     if(nom_depense.value.trim() === "" || nom_depense.value === undefined){
//         alert("Veuillez entrer le motif de la dépense");
//     }else if(prix_depense.value === ""){
//         alert("Veuillez entrer la somme");
//     }else{
//         if(expense__modale.classList.contains('active')){
//             expense__modale.classList.remove('active')
//         }
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

let budget__modale = document.querySelector('.budget__modal')
let btn = document.getElementById('btn1')

if (btn){
    btn.addEventListener('click', (e)=>{
            e.preventDefault()
            if(!budget__modale.classList.contains('active')){
                budget__modale.classList.add('active') 
            }
    })
}

let expense__modale = document.querySelector('.expense__modal')
let btn2 = document.getElementById('btn2')

if (btn2){
    btn2.addEventListener('click', (e)=>{
            e.preventDefault()
            if(!expense__modale.classList.contains('active')){
                expense__modale.classList.add('active') 
            }
    })
}

const btnClose1=budget__modale.querySelector('.closeButton1')
if(btnClose1){
    btnClose1.addEventListener('click', (e)=>{
        e.preventDefault()
        if(budget__modale.classList.contains('active')){
            budget__modale.classList.remove('active')
        }
    })
}

const btnClose2=expense__modale.querySelector('.closeButton2')
if(btnClose2){
    btnClose2.addEventListener('click', (e)=>{
        e.preventDefault()
        if(expense__modale.classList.contains('active')){
            expense__modale.classList.remove('active')
        }
    })
}

let restart__btn = document.querySelector('.restart__btn')
let clear__modal = document.querySelector('.clear__modal')

if (restart__btn){
    restart__btn.addEventListener('click', (e)=>{
            e.preventDefault()
            if(!clear__modal.classList.contains('active')){
                clear__modal.classList.add('active') 
            }
    })
}

const right__btn = document.querySelector('.right__btn')
if(right__btn){
    right__btn.addEventListener('click', (e)=>{
        e.preventDefault()
        if(clear__modal.classList.contains('active')){
            clear__modal.classList.remove('active')
        }
    })
}



// const bt = document.querySelectorAll('.bt')
// if(bt){
//     bt.forEach((item)=>{
//         item.addEventListener('click', (e)=>{
//             e.preventDefault()
//             if(expense__modale.classList.contains('active')){
//                 expense__modale.classList.remove('active')
//             }
//             if(budget__modale.classList.contains('active')){
//                 budget__modale.classList.remove('active')
//             }
//         })
//     })
// }




// const search = document.getElementById('search');


            



// search.addEventListener("input",(e)=>{
    
//     const  curentValue = e.target.value;
//     console.log(curentValue)
//     tbody.innerHTML = ''
//     const dataFilter =  nom.filter( element => element.val.name.toLowerCase().includes(curentValue.toLowerCase()))
//     createListItems(dataFilter)
    
// })
// bton = document.getElementById('bton')

// bton.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     pays = document.getElementById("pays").value;
// texte = document.getElementById("texte");
// texte.innerHTML = pays;
// })




// const graphe = document.getElementById("graphe")
//             const config = new Chart(graphe, 
//                 {
//                     type: 'line',
//                     data: {
//                         labels: [
//                           'Red',
//                           'Green',
//                           'Yellow',
//                           'Grey',
//                           'Blue'
//                         ],
//                         datasets: [{
//                           label: 'My First Dataset',
//                           data: [11, 16, 7, 3, 14],
//                           backgroundColor: [
//                             'rgb(255, 99, 132)',
//                             'rgb(75, 192, 192)',
//                             'rgb(255, 205, 86)',
//                             'rgb(201, 203, 207)',
//                             'rgb(54, 162, 235)'
//                           ]
//                         }]
//                       },
//                     options: {}
//                   })






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