window.EFFECT = {
    pulse(n=36){
        return Array.from({length:n}, (_,i)=>Math.sin(i/6));
    },
    wave(n=36){
        return Array.from({length:n}, (_,i)=>Math.cos(i/4));
    },
    start(){
        return {
            mode: "SEND-EFFECT",
            stamp: Date.now()
        };
    }
};
