export default class People {
    isChild(number) {
        this.user = number == 1 ? '小孩' : '大人'
    }

    wakeUp() {
        this.action = this.user + '醒了'
    }

    fallingSleep() {
        this.action = this.user + '睡着了'
    }

    brushTeeth() {
        this.action = this.user + '刷牙了'
    }


    batheDone() {
        this.action = this.user + '洗好澡了'
    }
}