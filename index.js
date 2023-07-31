var user5 = localStorage.getItem("user5");
var loisir = JSON.parse(user5);
console.log(loisir);
// console.log(dat.total_bal);


const barCanvas_loisir = document.getElementById("barCanvas_loisir");
const barChart_loisir = new Chart(barCanvas_loisir, {
    type: "polarArea",
    data: {
        labels:  [
            'Solde restant',
            'Budget',
            'Dépenses',
            ],
        datasets: [{
            labels:'Votre Point',
            data: [loisir.total_bal, loisir.budget, loisir.exp_amount],
            backgroundColor:[
                'rgb(241, 65, 65)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
              ]
        }]
    },
    option:{
        scale:{
            y:{
                suggestedMax:500,
            }
        }
    }
    
})



function valider(e){

    let glob = document.getElementById('glob').value
var reste = document.getElementById('reste')
    // event.preventDefault()
    reste.innerHTML = glob
    localStorage.setItem('argent', reste.innerHTML);
}

let arge = localStorage.getItem("argent")
if(arge){
    var reste = document.getElementById('reste')
    reste.innerHTML = arge
}
let somme = document.getElementById('somme')

window.onload = function(){
    somme.innerHTML = arge + ' FCFA'
    let bal_reset = arge
    bal_reset -= (loisir.budget + famille.budget + transport.budget + sante.budget + autres.budget)
    console.log(arge)
    var reste = document.getElementById('reste')
    if(bal_reset < 0){
        // alert('Votre budget est insuffisant');
        // solde.innerText ="0";
        reste.classList.add("red");
        reste.classList.remove("green");
    }else if(bal_reset > 0){
        reste.classList.add("green");
        reste.classList.remove("red");
    }
    reste.innerHTML = bal_reset + ' FCFA'
}






const user2 = localStorage.getItem("user2");
const sante = JSON.parse(user2);
// console.log(sante.exp_amount);
// console.log(dat.total_bal);


const barCanvas_sante = document.getElementById("barCanvas_sante");
const barChart_sante = new Chart(barCanvas_sante, {
    type: "polarArea",
    data: {
        labels:  [
            'Solde restant',
            'Budget',
            'Dépenses',
            ],
        datasets: [{
            labels:'Votre Point',
            data: [sante.total_bal, sante.budget, sante.exp_amount],
            backgroundColor:[
                'rgb(241, 65, 65)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
              ]
        }]
    },
    option:{
        scale:{
            y:{
                suggestedMax:500,
            }
        }
    }
    
})




const user3 = localStorage.getItem("user3");
const transport = JSON.parse(user3);
// console.log(transport.exp_amount);
// console.log(dat.total_bal);


const barCanvas_transport = document.getElementById("barCanvas_transport");
const barChart_transport = new Chart(barCanvas_transport, {
    type: "polarArea",
    data: {
        labels:  [
            'Solde restant',
            'Budget',
            'Dépenses',
            ],
        datasets: [{
            labels:'Votre Point',
            data: [transport.total_bal, transport.budget, transport.exp_amount],
            backgroundColor:[
                'rgb(241, 65, 65)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
              ]
        }]
    },
    option:{
        scale:{
            y:{
                suggestedMax:500,
            }
        }
    }
    
})

const user4 = localStorage.getItem("user4");
const famille = JSON.parse(user4);
// console.log(famille.exp_amount);
// console.log(dat.total_bal);


const barCanvas_famille = document.getElementById("barCanvas_famille");
const barChart_famille = new Chart(barCanvas_famille, {
    type: "polarArea",
    data: {
        labels:  [
            'Solde restant',
            'Budget',
            'Dépenses',
            ],
        datasets: [{
            labels:'Votre Point',
            data: [famille.total_bal, famille.budget, famille.exp_amount],
            backgroundColor:[
                'rgb(241, 65, 65)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
              ]
        }]
    },
    option:{
        scale:{
            y:{
                suggestedMax:500,
            }
        }
    }
    
})



const user6 = localStorage.getItem("user6");
const autres = JSON.parse(user6);
// console.log(autres.exp_amount);
// console.log(dat.total_bal);

const barCanvas_autres = document.getElementById("barCanvas_autres");
const barChart_autres = new Chart(barCanvas_autres, {
    type: "polarArea",
    data: {
        labels:  [
            'Solde restant',
            'Budget',
            'Dépenses',
            ],
        datasets: [{
            labels:'Votre Point',
            data: [autres.total_bal, autres.budget, autres.exp_amount],
            backgroundColor:[
                'rgb(241, 65, 65)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
              ]
        }]
    },
    option:{
        scale:{
            y:{
                suggestedMax:500,
            }
        }
    }
    
})



var user = localStorage.getItem('user');
var toto = JSON.parse(user);
console.log(toto)

affi = document.querySelector('.toto')
mail = document.querySelector('.mail')

affi.innerHTML = toto.username
mail.innerHTML = toto.email
console.log(toto.username);

const btnMenu = document.querySelector('a.btn-menu')
if(btnMenu){
    btnMenu.addEventListener('click', e=>{
        e.preventDefault()
        console.log(btnMenu);
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

let global_budget_update = document.getElementById('global_budget_update')
let global_budget_modal = document.querySelector('.global_budget_modal')

if(global_budget_update){
    global_budget_update.addEventListener('click', (e)=>{
        e.preventDefault()
        if(!global_budget_modal.classList.contains('active')){
            global_budget_modal.classList.add('active') 
        }
    })
}

const btnClose1=global_budget_modal.querySelector('.closeButton1')
if(btnClose1){
    btnClose1.addEventListener('click', (e)=>{
        e.preventDefault()
        if(global_budget_modal.classList.contains('active')){
            global_budget_modal.classList.remove('active')
        }
    })
}

let global_budget_restart = document.getElementById('global_budget_restart')
global_budget_restart.addEventListener("click", (e)=>{
    // e.preventDefault()
    localStorage.setItem("user5",JSON.stringify({budget:0,expenses:[],modify:new Date().toLocaleString()}))
    localStorage.setItem("user6",JSON.stringify({budget:0,expenses:[],modify:new Date().toLocaleString()}))
    localStorage.setItem("user4",JSON.stringify({budget:0,expenses:[],modify:new Date().toLocaleString()}))
    localStorage.setItem("user3",JSON.stringify({budget:0,expenses:[],modify:new Date().toLocaleString()}))
    localStorage.setItem("user2",JSON.stringify({budget:0,expenses:[],modify:new Date().toLocaleString()}))

})