var gradeSum;
var weightSum;

$(document).ready(function() {
  createRows();

});

function createRows() {
  for (let i = 1; i < 9; i++) {
    const outerDiv = document.createElement("div");
    outerDiv.innerHTML = '<span class="ui input"><input id="cat"type="text" size="10"></span><span class="ui input"><input id="grd' + i + '" type="number" style="width:80px" oninput="calculate()"></span><span class="ui input"><input id="wgt' + i + '" type="number" style="width:80px" oninput="calculate()"></span>';
    document.getElementById("rowsHere").appendChild(outerDiv);
  }
}

function calculate(){
  gradeSum = 0;
  weightSum = 0;
  for (let i = 1; i < 9; i++){
    curWgt = "wgt" + i;
    wgtDec = (Number(document.getElementById(curWgt).value) * 0.01);
    weightSum = weightSum + (Number(document.getElementById(curWgt).value) * 0.01);

    curGrd = "grd" + i;
    grdNum = Number(document.getElementById(curGrd).value);

    gradeSum = gradeSum + (grdNum * wgtDec);



  }
  multiplier = (1/weightSum);
  gradeSum = gradeSum * multiplier;
  finalTotal = Number(gradeSum).toFixed(2) + '%'

  //Checking for color purposes
  if(gradeSum>=90) {
    document.getElementById("resGrade").innerHTML = '<span style="color:#2a9647">' + finalTotal + '</span>';
  }
  else if(gradeSum>=80) {
    document.getElementById("resGrade").innerHTML = '<span style="color:#b8b535">' + finalTotal + '</span>';
  }
  else if(gradeSum>=70) {
    document.getElementById("resGrade").innerHTML = '<span style="color:#b88135">' + finalTotal + '</span>';
  }
  else if(gradeSum>=60) {
    document.getElementById("resGrade").innerHTML = '<span style="color:#b85635">' + finalTotal + '</span>';
  }
  else {
    document.getElementById("resGrade").innerHTML = '<span style="color:#b83535">' + finalTotal + '</span>';
  }
  //End checking

  calcPref();
}

function sliderInput() {
  document.getElementById("sliderInput").value = document.getElementById("slider").value;
  calcPref();
}

function sliderTextInput() {
  document.getElementById("slider").value = document.getElementById("sliderInput").value;
  calcPref();
}

function calcPref() {
  prefGrade = document.getElementById("sliderInput").value;
  topEq = Number(prefGrade) - (Number(gradeSum) * Number(weightSum));
  finalWorth = 1 - Number(weightSum);
  needed = topEq/finalWorth;

  document.getElementById("prefGrade").innerHTML = needed.toFixed(2) + "%";

}
