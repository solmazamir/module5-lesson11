const fs = require('fs');
fs.readFile('./task.json', 'utf8', (err, data) => {
    if (!err) {
        const arr = JSON.parse(data);
        const newobj={
            id: 8,
            description: "new description",
            due: "2012-03-20"
        }
        arr.push(newobj)
        var filePath = './task.json'; 
        fs.unlinkSync(filePath);
        const result = JSON.stringify(arr)
        fs.appendFile('task.json', result, err => {
            if (err) {
                console.error(err);
            }
        });
    } else {
        console.error(err);
    }
});