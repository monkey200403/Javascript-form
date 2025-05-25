let formsubcall = document.getElementById("formsub")
let firstnamecall = document.getElementById("firstname")
let Emailcall = document.getElementById("Email")
let Createcall = document.getElementById("Create")
let resetcall = document.getElementById("reset")
let pascall = document.getElementById("pas")
let citycall = document.getElementById("city")
let pincall = document.getElementById("pin")
let displaydatacall = document.getElementById("displaydata")

resetcall.addEventListener("click", function name(params) {
    newdivcr.style.display='none'
})
Createcall.addEventListener("click", function name(e) {
    e.preventDefault()
    console.log(firstnamecall.value);

let newdivcr = document.createElement("div")
newdivcr.className = "newdiv"
displaydatacall.appendChild(newdivcr)


let in1 = document.createElement("input")
in1.value = firstnamecall.value
in1.setAttribute("readonly", "readonly")
in1.className = "name"
if(firstnamecall.value==''){
    newdivcr.style.display='none'
}
else{
    let labelname = document.createElement('span')
    labelname.textContent = 'Name : '
    newdivcr.appendChild(labelname)
    newdivcr.appendChild(in1)
    firstnamecall.value= ''
}

let in2 = document.createElement("input")
in2.value = Emailcall.value
in2.setAttribute("readonly", "readonly")
in2.className = "emailadd"
if(Emailcall.value==''){
    newdivcr.style.display='none'
}
else{
    let labelname1 = document.createElement('span')
    labelname1.textContent = 'Email : '
    newdivcr.appendChild(labelname1)
    newdivcr.appendChild(in2)
    Emailcall.value=''
}

let in3 = document.createElement("input")
in3.value = pascall.value
in3.setAttribute("readonly", "readonly")
in3.className = "Password"
if(pascall.value==''){
    newdivcr.style.display='none'
}
else{
    let labelname2 = document.createElement('span')
    labelname2.textContent = 'Contact : '
    newdivcr.appendChild(labelname2)
    newdivcr.appendChild(in3)
    pascall.value=''
}

let in4 = document.createElement("input")
in4.value = citycall.value
in4.setAttribute("readonly", "readonly")
in4.className = "cityc"
if(citycall.value==''){
    newdivcr.style.display='none'
}
else{
    let labelname3 = document.createElement('span')
    labelname3.textContent = 'City : '
    newdivcr.appendChild(labelname3)
    newdivcr.appendChild(in4)
    citycall.value=''
}

let in5 = document.createElement("input")
in5.value = pincall.value
in5.setAttribute("readonly", "readonly")
in5.className = "pinc"
if(pincall.value==''){
    newdivcr.style.display='none'
}
else{
    let labelname4 = document.createElement('span')
    labelname4.textContent = 'Pincode : '
    newdivcr.appendChild(labelname4)
    newdivcr.appendChild(in5)
    pincall.value=''
}

let editag = document.createElement("button")
editag.innerHTML = 'Edit'
editag.className = 'editag'
editag.addEventListener("click", function name(params) {
    in1.removeAttribute("readonly", "readonly")
    in2.removeAttribute("readonly", "readonly")
    in3.removeAttribute("readonly", "readonly")
    in4.removeAttribute("readonly", "readonly")
    in5.removeAttribute("readonly", "readonly")
})
newdivcr.appendChild(editag)

let deletag = document.createElement("button")
deletag.innerHTML = 'Delete'
deletag.className = 'deletag'
deletag.addEventListener("click", function name(params) {
    newdivcr.style.display = 'none'
})
newdivcr.appendChild(deletag)


let savetag = document.createElement("button")
savetag.innerHTML = 'Save'
savetag.className = 'savetag'
savetag.addEventListener("click", function name(params) {
    in1.setAttribute("readonly", "readonly")
    in2.setAttribute("readonly", "readonly")
    in3.setAttribute("readonly", "readonly")
    in4.setAttribute("readonly", "readonly")
    in5.setAttribute("readonly", "readonly")
})
newdivcr.appendChild(savetag)


})