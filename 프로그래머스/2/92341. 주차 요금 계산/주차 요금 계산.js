function solution(fees, records) {
    var answer = [];
    const parking = {};
    const total = {};
    for (record of records){
        const [time, car, type] = record.split(' ');
        const [h, m] = time.split(':').map(Number);
        let minute = h * 60 + m;

        if (type == "IN"){
            parking[car] = minute;
        }

        if (type == "OUT"){
            if (total[car]) total[car] += minute - parking[car];
            else total[car] = minute - parking[car]
            delete parking[car];
        }
    }
    
    for (let car in parking){
        if (total[car]) total[car] += 1439 - parking[car];
        else total[car] = 1439 - parking[car];
        delete parking[car];
    }
    
    for (let car of Object.keys(total).sort()){
        if (total[car] <= fees[0]) answer.push(fees[1]);
        else answer.push(fees[1] + Math.ceil((total[car] - fees[0]) / fees[2]) * fees[3])
    }
    
    return answer;
}