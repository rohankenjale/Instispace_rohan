let gradeVal={"S":10,"A":9,'B':8,'C':7,'D':6,'E':4}
let calculateGPA = () => {
    let cgpa:number = ((gradeVal[(<HTMLInputElement>document.getElementById('ma')).value.toUpperCase().toUpperCase()] + gradeVal[(<HTMLInputElement>document.getElementById('ph')).value.toUpperCase()] + gradeVal[(<HTMLInputElement>document.getElementById('cy')).value.toUpperCase()])*10
    + (gradeVal[(<HTMLInputElement>document.getElementById('hs')).value.toUpperCase()]+ gradeVal[(<HTMLInputElement>document.getElementById('oe')).value.toUpperCase()])*9)/48
    var cgpaElement = <HTMLInputElement>document.getElementById('cgpaValue');
    cgpaElement.innerText = cgpa.toFixed(2)
}

function calculateReqGPA() {
    document.getElementById("cgpaValue")!.innerText  = `${((Number((<HTMLInputElement>document.getElementById("aftersem2")).value)*112 - Number((<HTMLInputElement>document.getElementById("sem1")).value)*58)/56).toFixed(2)}`
}