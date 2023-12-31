function writeFile(savePath, data) {
    fs.writeFile(savePath, data, function (err) {
        err ? console.log("Write.Err:", err) : console.log("Write Successfully!!");
    });

    function appendFile(savePath, data) {
        fs.appendFile(savePath, data, function (err) {
            err
                ? console.log("Append Err:", err)
                : console.log("Append Successfully!!");
        });
    }
}