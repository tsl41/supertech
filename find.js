const find = () =>{

    const searchBox = document.getElementById("Search-Item").value.toUpperCase();
    const items = document.getElementById("card-content");
    const articles = document.querySelectorAll(".card");
    const pName = document.getElementsByTagName("h3");


    for (var i = 0; i < pName.length; i++) {

      let match = articles[i].getElementsByTagName("h3")[0];

      if (match) {

        let textValue = match.textContent || match.innerHTML;

        if (textValue.toUpperCase().indexOf(searchBox) > -1) {

          articles[i].style.display = "";
        } else {

          articles[i].style.display = "none";
        }

      }
    }



  }