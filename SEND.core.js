class SEND {

    constructor(){
        this.input = null;
        this.state = "INIT";
        this.sent = null;
    }

    enter(value){
        this.input = value;
        this.state = "RECEIVED";
    }

    push(){
        this.sent = this.input;
        this.state = "SENT";
        return this.sent;
    }

    compute(){
        return {
            input: this.input,
            sent: this.sent,
            state: this.state
        };
    }
}

window.SEND = new SEND();
