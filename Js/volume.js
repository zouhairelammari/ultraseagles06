class Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.audio_file.volume = 50/100;

        this.volume_sound = document.getElementById("volume_sound");
        this.volume_sound.addEventListener("change",()=>{
            this.audio_file.volume= this.volume_sound.value/100;
        });

        this.volume_speed= document.getElementById("volume_speed");
        this.volume_speed.playbackRate = 1;
        this.volume_speed.addEventListener("change",()=>{
        this.audio_file.playbackRate = this.volume_speed.value/100;
        });

    }
}
onload = new Volume();