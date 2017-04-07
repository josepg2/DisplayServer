const express = require('express')
const fileUpload = require('express-fileupload');
const app = express()

app.use(fileUpload());

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.post('/upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;

    console.log(sampleFile);

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./images/' + sampleFile.name, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
