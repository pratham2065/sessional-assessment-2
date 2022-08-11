console.log("hello")
const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09';

xhr.open('GET',url)
xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200 ){
        const objects = JSON.parse(xhr.responseText)
        var output = ''
        objects.forEach(object => {
            document.querySelector('.row').appendChild(addCard(object))
        });
        console.log(output)
    }
}
xhr.send()

function addCard(object){
    const col = document.createElement('div')
    col.setAttribute('class','column')
    const card = document.createElement('div')
    card.setAttribute('class','card')
    const h2 = document.createElement('h2')
    h2.textContent = object.id
    const h3 = document.createElement('h3')
    h3.textContent = object.title
    const P = document.createElement('P')
    P.textContent = object.body
    card.appendChild(h2)
    card.appendChild(h3)
    card.appendChild(P)
    col.appendChild(card)

    return col

}