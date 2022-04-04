const $=document.querySelector.bind(document)

var monitor=$('#monitor-text');
var ket_qua="";
var pheptinh="";


var inKetQua=function(ketqua){
    monitor.innerText=ketqua;
}
var clearKetQua=function(){
    monitor.innerText="";
}

window.onclick = e => {
    if(e.target.value==undefined){
        monitor.innerText="";
        pheptinh="";
    }else{
        pheptinh= pheptinh +e.target.value;
        monitor.innerText+=e.target.value;
        console.log(pheptinh);
        if(e.target.value==""){
          inKetQua(eval(pheptinh));
         
        }
    }
    
    
} 



