

function getData(div) {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = this.responseText.substring(2, 200) + '...';
            div.innerHTML = `<div class="row"  style="background: #fff;">
            <div class="col offset1">
                <figure>
                    <svg width="74" height="54" viewBox="0 0 74 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M68.6524 0.75H52.8914L42.3841 21.75V53.25H73.906V21.75H58.1451L68.6524 0.75ZM26.6232 0.75H10.8622L0.354937 21.75V53.25H31.8768V21.75H16.1159L26.6232 0.75Z" fill="#e7e7e7"/>
                        </svg>
                        
                    <blockquote>
                        <p>${response}</p>
                    </blockquote>
                    <figcaption class="text-left">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>

            </div>
        </div>`
        }
    };
    xhttp.open("GET", "https://baconipsum.com/api/?type=all-meat", true);
    xhttp.send();
}

function generateCit(div_id, ms_time) {
    var div = document.getElementById(div_id);

    getData(div);
    setInterval(function () {
        getData(div);
    }, ms_time);


}
