let pokemons=new Array();

async function getselectedPokemon(elem) {
    let pokemon = document.getElementById(elem).value;
    console.log(pokemon);
    let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
    let container = document.querySelector('.container');
    let nature="";
    pokemons.push(pokemon);
    let trainer_name=document.getElementById("trainer").value;
    console.log(trainer_name);
    try {
        console.log(pokemons);
        
        let res = await fetch(url);
        let result = await res.json();
        for (const type in result.types) {
            if (Object.hasOwnProperty.call(result.types, type)) {
                const element = result.types[type];
                console.log(element.type.name);
                nature+="<p>"+element.type.name+"</p>";
            }
        }
            container.innerHTML = container.innerHTML + "<img src=" + result.sprites.front_default + " >"+nature;
        /*}*/
    } catch (error) {
        console.log(error);
    }
    
}
async function getrandomPokemon() {
    let container = document.querySelector('.container');
    
    try {
        /*for (let i = 0; i < 6; i++) {*/
            let randomNumber = Math.floor(Math.random() * 904);
            let url = 'https://pokeapi.co/api/v2/pokemon/' + randomNumber;
            let res = await fetch(url);
            let result = await res.json();
            let pokemon=result.name;
            pokemons.push(pokemon);
            console.log(result.name);
            console.log(pokemons);
            let trainer_name=document.getElementById("trainer").value;
            console.log(trainer_name);
            let nature="";
            
            for (const type in result.types) {
                /*console.log(type);*/
                if (Object.hasOwnProperty.call(result.types, type)) {
                    const element = result.types[type];
                    
                    nature+="<p>"+element.type.name+"</p>";
                }
            }
            /*console.log(result.types[0].type.name);
            if (result.types[1] == null) {
            } else {
                console.log(result.types[1].type.name);
            }*/
            container.innerHTML = container.innerHTML + "<img src=" + result.sprites.front_default + " >"+nature;
        /*}*/

    } catch (error) {
        console.log(error);
    }
    
}
function save_trainer(){
let trainer_name=document.getElementById("trainer").value;
localStorage.setItem(trainer_name,JSON.stringify(pokemons));
}
async function load_trainer(){
    let trainer_name=document.getElementById("trainer_name").value;
    let get_trainer=JSON.parse(localStorage.getItem(trainer_name));
    
    for (const key in get_trainer) {
        
        try {
            let url = 'https://pokeapi.co/api/v2/pokemon/' + get_trainer[key];
            let res = await fetch(url);
            let result = await res.json();
            let load=result.name;
            let number_of_pokemon=parseInt(key)+1;
            document.getElementById("pokemon_image"+number_of_pokemon).innerHTML="<img src=" + result.sprites.front_default + " >";
            let advantages="";
            for (const type in result.types) {
                let url2="https://pokeapi.co/api/v2/type/"+result.types[type].type.name;
                let res2=await fetch(url2);
                let result2=await res2.json();
                
                    for (const advantage in result2.damage_relations.double_damage_to) {
                        let number_of_space=parseInt(advantage)+1;
                        advantages+="<p>"+JSON.stringify(result2.damage_relations.double_damage_to[advantage].name)+"</p>";
                        document.getElementById("pokemon_info"+number_of_pokemon).innerHTML=advantages;
                        
                    }
                    
            }
        } catch (error) {
            console.log(error);
            
        }
    }
}

function show_elements(elem){
    document.getElementById(elem).style.visibility="visible";
    /*if(document.getElementById("show_first_pokemon").onclick){
        document.getElementById("first_pokemon").style.visibility="visible";
    }else if(document.getElementById("show_second_pokemon").onclick || document.getElementById("show_second_random_pokemon").onclick){
        document.getElementById("second_pokemon").style.visibility="visible";
    }*/
    
}