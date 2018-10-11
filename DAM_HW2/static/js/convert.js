function readPic(filePath) {
    var file = filePath.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    //成功读取文件
    reader.onload = function (e) {
        var img = document.getElementById("selected");
        img.src = e.target.result;
        //实现点击下载图片功能
        var download =  document.getElementById("pic_download");
        //给a标签设置href
        pic_download.setAttribute("href", e.target.result);
    };
}
