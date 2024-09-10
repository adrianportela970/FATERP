
window.onload = function() {
    setTimeout(function() {
        alert("Parabéns, você acaba de acessar uma das melhores páginas de TI!");
    }, 1000); // 1000 milissegundos = 3 segundos
};

function toggleMenu() {
    const pageWidth = document.documentElement.clientWidth;
    console.log ('Largura Página  ' + pageWidth)
        var sidebar = document.getElementById("sidebar");
        var main = document.getElementById("main");
        if (sidebar.style.width ==="200px" && pageWidth<799) {
            sidebar.style.width = "0";
            main.style.marginLeft = "0";
        }   else {
            sidebar.style.width = "200px";
            main.style.marginLeft = "250px"
        }
    }
