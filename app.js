const toggleBtn = document.querySelector('.main-container');

const secBtn = document.querySelectorAll('.secBtn');
(function toggleOn(){
    document.getElementById('toggle').addEventListener('click' , function() {
         if(toggleBtn.classList.contains('opened')){
        toggleBtn.classList.remove('opened');
        toggleBtn.classList.add('closed');
       
    }else{
        toggleBtn.classList.remove('closed');
        toggleBtn.classList.add('opened');
    }   
    }) 
})()
secBtn.forEach((btn)=>{
    btn.addEventListener('click' , function(){
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add('active-btn');
        document.querySelector(".active").classList.remove("active");
        document.getElementById(btn.dataset.id).classList.add("active");
    })
});


// homeBtn.addEventListener('click',()=>{
//     home.classList.remove('invisible');
//     home.classList.add('visible','animate-ShowSection');
  
// })