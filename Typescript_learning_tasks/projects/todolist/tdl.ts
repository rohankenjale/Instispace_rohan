let a=0
let titleinput = <HTMLInputElement>document.getElementById("title")
let descinput = <HTMLInputElement>document.getElementById("description")
let submitted = () => {
    a++
    let inithtml=(<HTMLInputElement>document.getElementById("tablebody")).innerHTML;
    (<HTMLInputElement>document.getElementById("tablebody")).innerHTML=`
    ${inithtml}            
    <tr id=${a}>
        <td>"#"</td>
        <td>
            <h5>${titleinput.value}</h5>
            <p>${descinput.value}</p>
        </td>
        <td><button id="delete" class="btn btn-danger" onclick="del(${a})">Delete</button></td>
    </tr>`
    descinput!.value=""
    titleinput!.value=""
}
let del = (a:number) =>{
    document.getElementById(`${a}`)!.remove();
}