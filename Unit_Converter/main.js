const length = document.getElementById("length");
const convertFrom = document.getElementById("convert_from");
const convertTo = document.getElementById("convert_to");
const output = document.getElementById("result");

const units = [
  { from: "cm", value: 10, to: "mm" },
  { from: "m", value: 100, to: "cm"},
  { from: "m", value: 1000, to: "mm" },
  { from: "km", value: 1000, to: "m"},
];


//Step 1 convert to meter
function convertToMeter(from, to, length) {
  let value;
  units.forEach((element) => {
    if (from === element.from && to === element.to) {
      value = length * element.value;
    } else if (to === element.from && from === element.to) {
      value = length / element.value;
    }
  });
  return value;
}

// Step 2 produce result
function convertUnit(){
    let result = convertToMeter(convertFrom.value, convertTo.value, length.value);
     console.log(result + convertTo.value);
     output.textContent = ` ${length.value + convertFrom.value} = ${
       result + convertTo.value
     }`;

    if(result === undefined) {
        let convertedValue = convertToMeter(
          convertFrom.value,
          "m",
          length.value
        );
        let finalValue = convertToMeter("m", convertTo.value, convertedValue);
        console.log(finalValue + convertTo.value);
        output.textContent = ` ${length.value + convertFrom.value} = ${
          finalValue + convertTo.value
        }`;
    }



}








