function clock(){
    let d=new Date;
let h=d.getHours();
console.log(h);
let m=d.getMinutes();
console.log(m);
let s=d.getSeconds();
console.log(s);
let h_rotation=(30*h)+(m*0.5);
let m_rotation=6*m;
let s_rotation=6*s;

hr.style.transform="rotate("+h_rotation+"deg)";
min.style.transform=`rotate(${m_rotation}deg)`;
sec.style.transform=`rotate(${s_rotation}deg)`;


}
clock();

setInterval(clock,1000);