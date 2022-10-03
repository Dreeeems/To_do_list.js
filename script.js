


//recuperer la liste <ol>
let ol =document.getElementById('listeoditems');
//ajout d'un son 
const sound =new Audio("audio/Validate.mp3");

let num;
let validation;
function additem(){
    //ajouter l'élément

    //rajouter du texte
    const text= document.getElementById("texte").value;
    document.getElementById("texte").value="";
    if(text!=""){
    //créer une balise <li>
    let li= document.createElement('li');
    li.setAttribute('class','classe');
    li.setAttribute('id',document.getElementById("listeoditems").getElementsByTagName("li").length+1);
    li.style.textAlign="center";
    li.innerHTML=text;
    li.style.fontSize="30px";
    //Création des divers éléments
    let buttonremove =document.createElement('button');
    let buttonvalidation =document.createElement('button')
    let buttonimportant =document.createElement('button')
    let changearea=document.createElement('input');
    changearea.setAttribute('type','text');
    let buttonchange =document.createElement('button')
    buttonremove.innerHTML="X";
    buttonvalidation.innerHTML="✓";
    buttonimportant.innerHTML="Important Task";
    buttonchange.innerHTML="Change task name";
    buttonvalidation.setAttribute('class','validateButton');
    buttonremove.setAttribute('class','removeButton');
    buttonimportant.setAttribute('class','important');
    buttonchange.setAttribute('class','changename');
    changearea.placeholder="Enter your text here";
    //Création d'évènement qui permet de dire que la tâche est validée
    buttonvalidation.addEventListener('click',function(event){
        sound.play();
         //Utilisation du let validation qui permet de savoir l'id du li ou on a cliqué
        validation=buttonvalidation.parentElement.id;
        buttonvalidation.remove();  
          li.style.color="green";
        li.style.textDecoration="line-through";
        li.style.textDecorationThickness= "5px";
        li.style.textDecoration.color="#1f753f";
        //Supprimer la li qui a le même numéro que son identifiant pour la mettre à jour
    })
    
    //Fonctinnement du bouton de pour supprimer toute la tache
    buttonremove.addEventListener('click',function(event){
        //Utilisation du let validation qui permet de savoir l'id du li ou on a cliqué
        validation=buttonremove.parentElement.id;
        event.target.parentElement.remove();
        //Supprimer la li qui a le même numéro que son identifiant pour la faire disparaitre du tableau
        
    })
    //Fonctinnement du bouton de pour mettre une action en important
    buttonimportant.addEventListener('click',function(event){
         //Utilisation du let validation qui permet de savoir l'id du li ou on a cliqué
        validation=buttonimportant.parentElement.id
        li.style.fontWeight="900";
        li.style.color="darkred";
        buttonimportant.remove(); 
        //Supprimer la li qui a le même numéro que son identifiant pour la mettre à jour
 
    })
    //Fonctinnement du bouton de moddification
    buttonchange.addEventListener('click',function(event){
         //Utilisation du let validation qui permet de savoir l'id du li ou on a cliqué
        validation=buttonchange.parentElement.id
        let changetext = changearea.value;
        if(changetext!=""){
        li.innerText = changetext;
        //rappel de tous les enfants car le innerText les supprime
        li.appendChild(buttonremove);
        li.appendChild(buttonvalidation);
        li.appendChild(buttonimportant);
        li.appendChild(buttonchange);
        li.appendChild(changearea)
        }
        else{
            alert('veuillez mettre un mot ou une tâche pour changer');
        }
    })
    li.appendChild(buttonremove);
    li.appendChild(buttonvalidation);
    li.appendChild(buttonimportant);
    li.appendChild(buttonchange);
    li.appendChild(changearea);
    //ajouter la balise <li> dans le <ol>
     ol.appendChild(li)
    }
    else{
        alert("veuillez mettre un mot ou une tâche!");
    }
}
function clearAllItem(){
    // supprimer l'integraliter de la liste
    document.getElementById('listeoditems').innerHTML="";
    window.location.reload(false);
}


