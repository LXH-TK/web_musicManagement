/*
    可以只用2个item完成切换，但是需要等一个slide滑动完再继续点击

    function enter(singer_id)
    {
        global_singer_id = singer_id;
        x=parseInt(singer_id/10);
        bt_p=document.getElementById('bt_p');
        bt_n=document.getElementById('bt_n');
    }

    function choose(flag)
    {
        element1=document.getElementById('img1');
        element2=document.getElementById('img2');
        if(flag == 1) {
            if((global_singer_id - 1) > 10*x)
                global_singer_id = global_singer_id - 1;
            else
                global_singer_id = 10*x + 9;
        }
        if(flag == 2) {
            if((global_singer_id + 1) <= 10*x+10)
                global_singer_id = global_singer_id + 1;
            else
                global_singer_id = 10*x + 1;
        }

        if(global_singer_id%2 != 0) {
            element1.src="../../static/images/mp3_images/" + global_singer_id + ".png";
        }
        if(global_singer_id%2 == 0) {
            element2.src="../../static/images/mp3_images/" + global_singer_id + ".png";
        }
    }
*/
var currentPlay = false;

function enter(singer_id)
{
    var i;
    for (i=0;i<10;i++) {
        read(singer_id+i);
    }

    document.getElementById('img1').src="../../static/images/mp3_images/" + singer_id + ".png";
    document.getElementById('au1').src="../../static/musics/" + singer_id + ".mp3";
    singer_id = singer_id + 1;
    document.getElementById('img2').src="../../static/images/mp3_images/" + singer_id + ".png";
    document.getElementById('au2').src="../../static/musics/" + singer_id + ".mp3";
    singer_id = singer_id + 1;
    document.getElementById('img3').src="../../static/images/mp3_images/" + singer_id + ".png";
    document.getElementById('au3').src="../../static/musics/" + singer_id + ".mp3";
    singer_id = singer_id + 1;
    document.getElementById('img4').src="../../static/images/mp3_images/" + singer_id + ".png";
    document.getElementById('au4').src="../../static/musics/" + singer_id + ".mp3";
    singer_id = singer_id + 1;
    document.getElementById('img5').src="../../static/images/mp3_images/" + singer_id + ".png";
    document.getElementById('au5').src="../../static/musics/" + singer_id + ".mp3";
    singer_id = singer_id + 1;
    document.getElementById('img6').src="../../static/images/mp3_images/" + singer_id + ".png";
    document.getElementById('au6').src="../../static/musics/" + singer_id + ".mp3";
    singer_id = singer_id + 1;
    document.getElementById('img7').src="../../static/images/mp3_images/" + singer_id + ".png";
    document.getElementById('au7').src="../../static/musics/" + singer_id + ".mp3";
    singer_id = singer_id + 1;
    document.getElementById('img8').src="../../static/images/mp3_images/" + singer_id + ".png";
    document.getElementById('au8').src="../../static/musics/" + singer_id + ".mp3";
    singer_id = singer_id + 1;
    document.getElementById('img9').src="../../static/images/mp3_images/" + singer_id + ".png";
    document.getElementById('au9').src="../../static/musics/" + singer_id + ".mp3";
    singer_id = singer_id + 1;
    document.getElementById('img10').src="../../static/images/mp3_images/" + singer_id + ".png";
    document.getElementById('au10').src="../../static/musics/" + singer_id + ".mp3";
}

function read(song_id) {
    var file = "../../static/lyrics/" + song_id + ".txt";
    var rawFile = new XMLHttpRequest();
    if (song_id%10 != 0) {
        var txt_id = 'txt' + parseInt(song_id%10);
        var title_id = 'title' + parseInt(song_id%10);
    }
    else {
        var txt_id = 'txt10';
        var title_id = 'title10';
    }

    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                // 关键的回车
                var arr = allText.split((/[\n]/));
                // 歌名
                h = document.getElementById(title_id).innerHTML = arr[0];
                // 歌词
                var par = document.getElementById(txt_id);
		        i = 0;
		        while (arr[++i] != null) {
		            var p = document.createElement("p");
                    p.innerHTML = arr[i];
                    par.appendChild(p);
		        }
		    }
	    }
    }
    rawFile.send(null);
}

function stopMusic(number) {
    for(var i=1;i<=10;i++) {
        au_id = 'au' + i;
        if(i != number) {
            document.getElementById(au_id).pause();
        }
    }
}