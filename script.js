var b1=document.getElementById('custom_display');
var b4=document.getElementById('json_display');
b1.style.display='none';
var b2=document.getElementById('con1');
var b3=document.getElementById('con2');
b2.addEventListener('click',()=>{
    b1.style.display='none';
    b4.style.display='block';
})
b3.addEventListener('click',()=>{
    b1.style.display='block';
    b4.style.display='none';
})
var b5=document.getElementById('add-btn');
num=2;
b5.addEventListener('click',(e)=>{
    let n1=document.createElement('div');
    n1.setAttribute('id',`cusp${num}`)
    n1.innerHTML=`<label style="margin-top: 8px;" for="json_text" class="form-label">Custom Parameter ${num}</label>
    <div class="input-group mb-3">
      <input id="key${num}" style="margin-right:7px" type="text" class="form-control" placeholder="Enter request key ${num}" aria-label="Recipient's username" aria-describedby="button-addon2">
      <input id="value${num}" style="margin-left: 7px;" type="text" class="form-control" placeholder="Enter request value ${num}" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button onclick="dlt(this.id)" style="margin-left: 6px;" class="btn btn-outline-primary" type="button" id="minus-btn${num}">-</button>
    </div>`;
    num++;
    b1.appendChild(n1);
})
function dlt(id)
{
    document.getElementById(`cusp${id.slice(9,)}`).remove();
    num--;
}
var b6=document.getElementById('sub-btn');
var b7=document.getElementById('get');
var b8=document.getElementById('post');
b6.addEventListener('click',()=>{
    document.getElementById('pr1').innerHTML="Fetching Your Request.. Please Wait...";
    if(b3.checked)
    {
        num1=1;
        json_str={};
        for(i=1;i<num;i++)
        {
            let key=document.getElementById(`key${num1}`).value;
            let value=document.getElementById(`value${num1}`).value;
            json_str[key]=value;
            num1++;
        }
        json_str=JSON.stringify(json_str)
    }
    else
    {
        json_str=document.getElementById('json_text').value;
    }
    if(b2.checked)
    {
        let url=document.getElementById('url_tab').value;
        fetch(url).then((response)=>{
            return response.text();
        }).then((data)=>{
            document.getElementById('pr1').innerHTML=data;
        })
    }
    if(b8.checked)
    {
        let url=document.getElementById('url_tab').value;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:json_str
        }).then((response)=>{
            return response.text();
        }).then((data)=>{
            document.getElementById('pr1').innerHTML=data;
        })
    }
})