// let noBtn = document.getElementById('noBtn');
// let randomed = Math.random()*90;




// function bega(){


//     noBtn.style.color = 'white';
//     noBtn.style.position = 'absolute';
//     noBtn.style.top = `${randomed}%`;
//     noBtn.style.left = `${randomed}%`;
// }


// noBtn.addEventListener('mouseenter', function {
//     bega();

//     setInterval(bega, 1000);
// });


let noBtn = document.getElementById('noBtn');

function bega() {
    let randomed = Math.random() * 90;

    noBtn.style.position = 'absolute';
    noBtn.style.top = `${randomed}%`;
    noBtn.style.left = `${randomed}%`;
    noBtn.style.transition = '0.2s ease';
}

noBtn.addEventListener('mouseenter', function() {
    bega();
});

noBtn.addEventListener('click', function() {
    bega();
});

let yesBtn = document.getElementById('yesBtn');

yesBtn.addEventListener('click', function(){
    window.location.href = 'Ty.html';
});


