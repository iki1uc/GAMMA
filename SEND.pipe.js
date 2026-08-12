class SEND_PIPE {

    forward(send){
        return {
            next:
                send.state === "SENT" ? "RESPO" :
                send.state === "READY" ? "IX" :
                "HOLD",
            signature: send.sent,
            state: send.state
        };
    }
}

window.SEND_PIPE = new SEND_PIPE();
