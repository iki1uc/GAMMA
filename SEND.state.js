class SEND_STATE {

    detect(value){
        if(value === null) return "EMPTY";
        if(value === undefined) return "EMPTY";
        if(value === "HOLD") return "BLOCKED";
        return "READY";
    }
}

window.SEND_STATE = new SEND_STATE();
