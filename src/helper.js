export default {
    methods: {
        generateTransID(program_time) {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDay();
            let hour = date.getHours();
            let mins = date.getMinutes();
            let sec = date.getSeconds();
            let res = `I${year}${month}${day}0${program_time}${hour}${mins}${sec}`;
            return res;
        },
        range(start,end) {
            let arr = [];
            let len = end - start;
            for (let i = 0; i < len; i++) {
                arr.push({value: i + start});
            }
            return arr;
        }
    }
}
