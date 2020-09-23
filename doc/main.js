var index = 0;
var OnStart = false;

function start(){
    if(!OnStart){
        OnStart = true;
        SlideTime();
    }
}

function SlideTime(){

    var slide_one = document.getElementById('photoshop');
    var slide_two = document.getElementById('montage');
    var slide_three = document.getElementById('WEB-design');

    switch(index){
        case 0:
            index = 1;

            slide_one.style.opacity = '1.0';
            slide_one.style.boxShadow = '0px 0px 10px white';
            slide_one.style.height = '600px';
            slide_one.style.width = '50%';

            slide_two.style.opacity = '0.0';
            slide_two.style.boxShadow = '0px 0px 0px white';
            slide_two.style.height = '250px';
            slide_two.style.width = '25%';

            slide_three.style.opacity = '0.0';
            slide_three.style.boxShadow = '0px 0px 0px white';
            slide_three.style.height = '250px';
            slide_three.style.width = '25%';

            break;
        
        case 1:
            index = 2;

            slide_one.style.opacity = '0.0';
            slide_one.style.boxShadow = '0px 0px 0px white';
            slide_one.style.height = '250px';
            slide_one.style.width = '25%';

            slide_two.style.opacity = '1.0';
            slide_two.style.boxShadow = '0px 0px 10px white';
            slide_two.style.height = '600px';
            slide_two.style.width = '50%';

            slide_three.style.opacity = '0.0';
            slide_three.style.boxShadow = '0px 0px 0px white';
            slide_three.style.height = '250px';
            slide_three.style.width = '25%';

            break;

        case 2:
            index = 0;

            slide_one.style.opacity = '0.0';
            slide_one.style.boxShadow = '0px 0px 0px white';
            slide_one.style.height = '250px';
            slide_one.style.width = '25%';

            slide_two.style.opacity = '0.0';
            slide_two.style.boxShadow = '0px 0px 0px white';
            slide_two.style.height = '250px';
            slide_two.style.width = '25%';

            slide_three.style.opacity = '1.0';
            slide_three.style.boxShadow = '0px 0px 10px white';
            slide_three.style.height = '600px';
            slide_three.style.width = '50%';

            break;
    }

    setTimeout(SlideTime, 3000); // измени цифры в милисекундах на то каторе тебе надо

}