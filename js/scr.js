function insert(num)
    {
        var number = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = number + num
    }
function clean()
    {
        document.getElementById('result').innerHTML = "";
    }
function back()
    {
        var result = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = result.substring(0, result.length -1);
    }
function calculate()
    {
        var result = document.getElementById('result').innerHTML;
        if(result) {
        document.getElementById('result').innerHTML = eval(result);
        }
        else {
        document.getElementById('result').innerHTML = '0'
        }
    }

//BMO EXPRESSIONS
Image_array = [
    'face-0.png',
    'face-1.png',
    'face-2.png',
    'face-3.png',
    'face-4.png',
    'face-5.png',
    'face-6.png',
    'face-7.png',
    'face-8.png',
    'face-9.png',
    'face-10.png',
    'face-11.png',
    'face-12.png',
    'face-13.png',
    'face-14.png',
    'face-15.png',
    'face-16.png',
    'face-17.png',
    'face-18.png',
    'face-19.png',
    'face-20.png',
    'face-21.png',
    'face-22.png',
    'face-23.png',
    'face-24.png',
]

function random_image(){
    random_index = Math.floor(Math.random() * Image_array.length);
    selected_image = Image_array[random_index]
    document.getElementById('image_shower').src = `/assets/faces/${selected_image}`
}