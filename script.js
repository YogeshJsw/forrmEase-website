let num=1;

ups=document.getElementsByClassName('up')
titles=document.getElementsByClassName('title2')

for(let i=0;i<ups.length;i++) 
{
    ups[i].addEventListener('click', function(){
        num++;
        console.log(num);
        if(num%2==0) 
            titles[i].style.display='none';
        else 
            titles[i].style.display='block';
    })
}


slider=document.getElementsByClassName('yesNoSliderclass');
sliderText=document.getElementsByClassName('sliderValueclass')
for(let i=0;i<slider.length;i++) 
{
    slider[i].addEventListener('input',function(){
        if(slider[i].value==0)
            sliderText[i].textContent="No"
        else
            sliderText[i].textContent="Yes"
    })
}



function additionalBtn() 
{
    var btn=document.querySelector('.additional').cloneNode(true);
    var titlecpy=document.querySelector('.title3').cloneNode(true);
    document.body.appendChild(titlecpy);
    document.body.appendChild(btn);
}
