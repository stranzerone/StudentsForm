

const obj = [{
    name:"sahil",
    age:18
},
{
    name:"ayan",
    age:188
}]
  firstCoin = document.querySelector(".first")
  newChild = document.createElement('h1')

 firstCoin.appendChild(newChild)
 newChild.innerHTML="hello"
 console.log(newChild)

tableRow = document.createElement('tr')
tableRow.innerHTML = `<td>${obj[0].name}</td>`

firstCoin.appendChild(tableRow)