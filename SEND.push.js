class SEND_PUSH {

    send(value){
        return {
            delivered: true,
            value
        };
    }
}

window.SEND_PUSH = new SEND_PUSH();
