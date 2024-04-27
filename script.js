const cur=document.getElementById("currency");
const details=document.getElementById("details");
const getdetails=document.getElementById("getdetails");

getdetails.addEventListener("click",async ()=>{
    const inputid=currency.value;
    const data=await fetch(`https://api.coincap.io/v2/assets/${inputid}`);
    const res=await data.json();
    
        getDetails(res);
})
function getDetails(res){
    const d=res.data
details.innerHTML=`
<div class="card ">
<div class="title row row-cols-1 row-cols-sm-2 g-lg-2 g-md-4 mb-lg-2 " ><div class="col lab">Currency:</div><div class="col cval "> ${d.name}</div>
</div>
<div class="subtitle row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2 "><div class="col lab">USD Price:</div><div class="col cval"> $${Math.round(d.priceUsd)}</div></div>
<div class="text row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2"><div class="col lab">Symbol:</div><div class="col cval"> ${d.symbol}</div></div>
<div class="text row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2"><div class="col lab">Market Cap:</div> <div class="col cval">$${Math.round(d.marketCapUsd)}</div></div>
<div class="text row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2"><div class="col lab">Percent Change(per day):</div><div class="col cval"> ${d.changePercent24Hr}</div></div>
<div class="text row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2"><div class="col lab">Supply:</div><div class="col cval"> ${Math.round(d.supply)}</div></div>
<div class="text  last row row-cols-1 row-cols-sm-2 g-lg-2 mb-md-4 mb-lg-2"><div class="col lab">Volume USD(per day):</div><div class="col cval"> ${Math.round(d.volumeUsd24Hr)}</div></div>
<div class="text1 btn"><a href="${d.explorer}" id="explorer" role="button" class="anger" target="_blank">Explorer</a></div>
</div>
`

}
