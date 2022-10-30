// Functions for showing chess board on different devices

function smallChessScript () {
    window.open('','cwvpu_1666616096','location=no,status=no,menubar=no,toolbar=no,directories=no,scrollbars=no,resizable=no,left=160,top=100,width=460,height=300');
    document.getElementById('cwvpd_1666616096').value=document.getElementById('cwvpg_1666616096').innerHTML;
    document.getElementById('cwvfm_1666616096').submit();
    return false
}

function mediumChessScript() {
    document.getElementById("cwvpd_1666615538").value=document.getElementById("cwvpg_1666615538").innerHTML;
    document.getElementById("cwvfm_1666615538").submit();
}

function bigChessScript() {
    document.getElementById("cwvpd_1666614752").value=document.getElementById("cwvpg_1666614752").innerHTML;
    document.getElementById("cwvfm_1666614752").submit();
}

// Functions for revealing/hiding the hidden menus in the Directory

function showMenu(elem) {
    const menus = ["players", "openings", "tournaments", "years"]
    let x = menus[elem]
    document.getElementById(x).classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.direcMenuButton')) {
      var dropdowns = document.getElementsByClassName("direcMenuContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show'); 
        }
      }
    }
  }