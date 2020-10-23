import { log } from "mathjs";

export function CreateDataFromArrays(xArray, yArray, gap=1, useLogLog=false) {
    let x = xArray.filter((element, index) => {
        return index % gap === 0;
      })
      let y = yArray.filter((element, index) => {
        return index % gap === 0;
      })
    let dataOut = x.map((elem, i) => ({x:parseFloat(elem), y:parseFloat(y[i])}) )
    if(useLogLog)
    {
      dataOut = dataOut.map(elem => ({x: log(elem.x), y: log(elem.y)}))
    }
    return dataOut;
}
