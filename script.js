//get elements by it's ID
const cur = document.getElementById("currency");
const name2 = document.getElementsByName("currency");
const details = document.getElementById("details");
const getdetails = document.getElementById("getdetails");
const err = document.getElementById("err");
const clr = document.getElementById("clr");

//To get an input value from user when clicks the Get Detail button
getdetails.addEventListener("click", async () => { 
    err.innerHTML='';//clears the error message
  const inputid = cur.value;
  //using try catch function
  try {

    //fetching data from api and convert into asynchronous program
    const data = await fetch(`https://api.coincap.io/v2/assets/${inputid}`);
    const res = await data.json(); //converting json format

    if (inputid === null || inputid === "") {  
        //if the input is not given into the input field it throws the error to catch;
        details.innerHTML=''
      throw new Error("Please enter an Input value");
    }
    getDetails(res); //calling gerDetails function
  } 
  
  catch (error) {
    if (error instanceof TypeError) {
        //if any input format mistakes are occur when type the crypto currencies, it will display the intimation error
        details.innerHTML=''
        err.innerHTML = `Error: Enter all letters in lowercase`;
    } else {
        //if any other type of error occur, the error message should be displayed int the screen
        details.innerHTML=''
        err.innerHTML = `Error: ${error.message}`;
    }
  }
});
function getDetails(res) {
  const d = res.data; 
  //getting values from data through the api value stored in res
  // console.log(d);
  //displaying the specific values into the screen
  details.innerHTML = `
<div class="card ">
<div class="title row row-cols-1 row-cols-sm-2 g-lg-2 g-md-4 mb-lg-2 " ><div class="col lab">Currency:</div><div class="col cval "> ${
    d.name
  }</div>
</div>
<div class="subtitle row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2 "><div class="col lab">USD Price:</div><div class="col cval"> $${Math.round(
    d.priceUsd
  )}</div></div>
<div class="text row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2"><div class="col lab">Symbol:</div><div class="col cval"> ${
    d.symbol
  }</div></div>
<div class="text row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2"><div class="col lab">Market Cap:</div> <div class="col cval">$${Math.round(
    d.marketCapUsd
  )}</div></div>
<div class="text row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2"><div class="col lab">Percent Change(per day):</div><div class="col cval"> ${
    d.changePercent24Hr
  }</div></div>
<div class="text row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2"><div class="col lab">Supply:</div><div class="col cval"> ${Math.round(
    d.supply
  )}</div></div>
<div class="text  last row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2"><div class="col lab">Volume USD(per day):</div><div class="col cval"> ${Math.round(
    d.volumeUsd24Hr
  )}</div></div>
<div class="text1 btn"><a href="${
    d.explorer
  }" id="explorer" role="button" class="anger" target="_blank">Explorer</a></div>
</div>
`;
}
//clears all the data when clicks the clear button
clr.addEventListener("click",()=>{
err.innerHTML=''; //clr the error message
details.innerHTML='';//clr the details
cur.value='';//clr the input values
})