let vue = new Vue({
    el: "#app",
    data: {
        result: '',
        numbers: [1,2,3,4,5,6,7,8,9,0],
        operations: ['+', '-', '*', '/', '.']
    },
    methods: {
        input: function(char) {
            this.result = this.result.toString();
            let ln = this.result.slice(-1);
            this.result += char;
        },
        reset: function() {
            this.result = '';
        },
        clear: function() {
            this.result = this.result.toString();
            this.result = this.result.slice(0, -1);
        },
        calc: function() {
            this.result = eval(this.result);
        }
    }
})