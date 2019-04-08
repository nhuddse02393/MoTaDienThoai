function Mobile(mName, battery, tempMes, inbox, outbox, mStatus) {
    this.mName = mName;
    this.battery = battery;
    this.tempMes = tempMes;
    this.inboxMes = inbox;
    this.outboxMes = outbox;
    this.mStatus = mStatus;

    this.checkStatus = function () {
        if(this.mStatus==="On")
            return true;
        else
            return false;
    }

    this.turnOn = function () {
        if(!this.checkStatus()) {
            this.use();
            this.mStatus = "On";
        }
    }

    this.turnOff = function () {
        if(this.checkStatus()) {
            this.use();
            this.mStatus = "Off";
        }
    }

    this.charge = function () {
        this.battery += 1;
    }

    this.typeMes = function (mes) {
        if(this.checkStatus()) {
            this.use();
            this.tempMes += mes;
        }
    }

    this.receiveMes = function (mes) {
        if(this.checkStatus()) {
            this.use();
            this.inboxMes += mes;
        }
    }

    this.sendMes = function (mes) {
        if(this.checkStatus()) {
            this.use();
            this.outboxMes += mes;
        }
    }

    this.readInbox = function () {
        if(this.checkStatus()) {
            this.use();
            return this.inboxMes;
        }
    }

    this.readOutbox = function () {
        if(this.checkStatus()) {
            this.use();
            return this.outboxMes;
        }
    }

    this.use = function () {
        this.battery -= 1;
    }
}

let nokia = new Mobile("Nokia", 50, "", "", "", "On");
let iphone = new Mobile("Iphone", 50, "", "", "", "On");
let message = "Hello!";

if(nokia.checkStatus() && iphone.checkStatus()){
    nokia.typeMes(message);
    nokia.sendMes(message);
    iphone.receiveMes(message);
    alert(iphone.readInbox());
}