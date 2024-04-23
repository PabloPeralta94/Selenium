const { Builder, By, Key } = require("selenium-webdriver");
var should = require('chai').should();

describe("agrega otro todo tests", function () {
    it("agrega exitosamente otro todo a la lista", async function () {

        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://lambdatest.github.io/sample-todo-app/");
        await driver.findElement(By.id("sampletodotext")).sendKeys("Tarea Completada", Key.RETURN);
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
            return value
        });
        todoText.should.equal("Tarea Completada");
        await driver.quit();
        console.log("exitoso");
    });
});




