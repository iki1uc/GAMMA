window.GEO = {
    circle(count=36, radius=160){
        const dots = [];
        for(let i=0; i<count; i++){
            const angle = (i / count) * Math.PI * 2;
            dots.push({
                x: Math.cos(angle)*radius + 180 - 6,
                y: Math.sin(angle)*radius + 180 - 6
            });
        }
        return dots;
    },
    start(){
        return {
            mode: "SEND-GEO",
            stamp: Date.now()
        };
    }
};
