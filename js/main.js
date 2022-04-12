//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

//  ADI KEY: NJpNRdv9s9aFkUazpoyEjtauaA7DJhLiVN90ZQgK


document.querySelector('button').addEventListener('click', whatWouldRonSay)

function whatWouldRonSay(){
  let title = document.getElementById('title').value.trim()

  fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=NJpNRdv9s9aFkUazpoyEjtauaA7DJhLiVN90ZQgK&search_field=name&search_value=${title}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let nameArray = []
        for(i=0; i< data.results.length;i++){
          nameArray.push(data.results[i].name)
        }
        document.querySelector('h3').innerHTML = nameArray.join("<br>")
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}

