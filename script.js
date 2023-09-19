const search = () => {
    const searchbox = document.getElementById("search-phone").value.toUpperCase();
    const storeitems = document.getElementById("card-group")
    const card = document.querySelectorAll(".card")
    const pname = storeitems.getElementsByTagName("h5")

    for (var i = 0; i < pname.length; i++) {
        let match = card[i].getElementsByTagName('h5')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                card[i].style.display = "   ";
            } else {
                card[i].style.display = "none";
            }
        }
    }
}



