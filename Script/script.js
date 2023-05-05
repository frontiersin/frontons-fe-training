const target = document.getElementById("mySidebar");
function openNav() {

  target.style.left = "0%";
  target.style.boxShadow="0 -24px 38px rgba(40,40,40,.12), 0 -9px 46px rgba(40,40,40,.08), 0 -11px 15px rgba(40,40,40,.04)"
  document.body.style.overflow = "hidden";

}

function closeNav() {
  target.style.display = "hidden";
  target.style.boxShadow="none"
  document.body.style.overflow = "auto";
}

