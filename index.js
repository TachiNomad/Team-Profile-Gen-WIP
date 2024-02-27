const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");



//-------------------------------------------on the back burner for now
const questions = [
    console.log("Title please"),
];

const prompt = require('prompt');

prompt.start();

prompt.get(['Title'], function (err, result) {
    if (err) { return onErr(err); }


    TitleAKAplaceholder = result.Title  //------placeholder

    fs.writeFile("team.html", TitleAKAplaceholder, //------placeholder
        function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was made!");
    }); 
});




function onErr(err) {
    console.log(err);
    return 1;
}