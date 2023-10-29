alert('test')



var video=document.getElementById('vBack')

var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            video.play();
        }
        else{
            video.pause();
        }
    });
});
observer.observe(video);
