let days = ['Monday', 'Tuesday', 'Wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    setInterval(() => {
      let a = new Date()
      let str = `${Math.abs(a.getHours() - 12)} : ${a.getMinutes()} : ${a.getSeconds()}`
      let str2 = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear()
      let str3 = days[a.getDay() - 1]
      document.getElementById("time")!.innerHTML = str + " on " + str2
      document.getElementById("day")!.innerHTML = str3


    }, 1000);
    let hours = 0
    let minute =0
    let second = 0;
    (<HTMLInputElement>document.getElementById("reset"))!.disabled = true;
    (<HTMLInputElement>document.getElementById("stop"))!.disabled = true
    let resetSW = () => {
      (<HTMLInputElement>document.getElementById("reset")).disabled = true
      hours = 0
      minute =0
      second =0;
      (<HTMLInputElement>document.getElementById("stopwatch")).innerHTML = `${hours} : ${minute} : ${second}`
    }
    let stopSW = () => {
      (<HTMLInputElement>document.getElementById("reset")).disabled = false;
      (<HTMLInputElement>document.getElementById("stop")).disabled = true;
      (<HTMLInputElement>document.getElementById("start")).disabled = false
      clearInterval(intr)
    }
    var intr;
    let startSW = () => {
      (<HTMLInputElement>document.getElementById("start")).disabled = true;
      (<HTMLInputElement>document.getElementById("stop")).disabled = false

      intr= setInterval(() => {
        second++
        if (second>=60) {
          second=0
          minute++
        }
        if (minute>=60) {
          minute=0
          hours++
        }
        (<HTMLInputElement>document.getElementById("stopwatch")).innerHTML = `${hours} : ${minute} : ${second}`
      }, 1000);
    }