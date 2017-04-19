function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue; //向队尾添加一个元素
    this.dequeue = dequeue; //删除队首元素
    this.front = front; //读取队首元素
    this.back = back; //读取队尾元素
    this.toString = toString; //显示队列内的所有元素
    this.empty = empty; //判断队列是否为空
    this.count = count; //返回队列中元素个数；
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var str = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        str += this.dataStore[i] + "\n";
    }
    return str;
}

function empty() {
    if (this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}

function count() {
    return this.dataStore.length;
}
//////////////////////////////////////基数排序
function distribute(nums, queues, n, digit) {
    for (var i = 0; i < n; i++) {
        if (digit === 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var j = 0;
    for (var i = 0; i < queues.length; i++) {
        while (!queues[i].empty()) {
            nums[j++] = queues[i].dequeue();
        }
    }
}
var queues = [];
for (var i = 0; i < 10; i++) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort:");
console.log(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums)
console.log("After once radix sort:");
console.log(nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("After twice radix sort:");
console.log(nums);
