changeLanguage();
document.getElementById("printResume").addEventListener('click',handlerPrint)

function changeLanguage() {
    document.getElementById('fa')?.addEventListener('click',e => {
        location.replace('./resume-fa.html')
    })
    
    document.getElementById("en")?.addEventListener('click',e => {
        location.replace('./index.html')
    })
    
    document.getElementById("de")?.addEventListener('click',e => {
        location.replace('./resume-de.html')
    })    
}

function handlerPrint() {
    let container = document.getElementsByClassName('container')[0].innerHTML;
    let body = document.body.innerHTML;

    document.body.innerHTML = container;
    window.print();

    document.body.innerHTML = body;
    changeLanguage()
    document.getElementById("printResume").addEventListener('click',handlerPrint)
}