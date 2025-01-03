document.getElementById('fa')?.addEventListener('click',e => {
    location.replace('./resume-fa.html')
})

document.getElementById("en")?.addEventListener('click',e => {
    location.replace('./index.html')
})

document.getElementById("de")?.addEventListener('click',e => {
    location.replace('./resume-de.html')
})

document.getElementById("print").addEventListener('click',e => {
    let container = document.getElementsByClassName('container')[0].innerHTML;
    let body = document.body.innerHTML;

    document.body.innerHTML = container;
    window.print();

    document.body.innerHTML = body;

    document.getElementById('fa')?.addEventListener('click',e => {
        location.replace('./resume-fa.html')
    })
    
    document.getElementById("en")?.addEventListener('click',e => {
        location.replace('./index.html')
    })
    
    document.getElementById("de")?.addEventListener('click',e => {
        location.replace('./resume-de.html')
    })
})