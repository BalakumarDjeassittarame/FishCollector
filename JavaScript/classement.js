function recuperer(){
    httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = classement;
httpRequest.open('GET', 'https://sae-301.azurewebsites.net/get-leaderboard.php', true);
httpRequest.send();
}

function classement(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var reponse = JSON.parse(httpRequest.responseText);
        var stats = 0;

        
        
        for (let pas = 0; pas < reponse.length && pas < 300;  pas++) {
            // Ceci sera exécuté 5 fois
            // À chaque éxécution, la variable "pas" augmentera de 1
            // Lorsque'elle sera arrivée à 5, le boucle se terminera.
            console.log(reponse[pas] ['score'] );
            stats++;
            var pseudo = reponse[pas] ['username'] ;
            if (pseudo.length>15) {
                pseudo= pseudo.slice(0,15);
            } 
            
            
           
            
            document.getElementById("scroll").innerHTML += ` <section class="Classement">
            <section class="Position">
                <section class="Personne">
                    <p id="or"> ${stats}</p>
                    <h3 class="texte"> ${pseudo}</h3>
                </section>
                <section class="Points">
                    <p class="score"> ${reponse[pas] ['score'] }</p>
                </section>
            </section>
    </section>` ;
          }
       }
        else {
       alert('Il y a eu un problème avec la requête.');
      }    
  } 
}
