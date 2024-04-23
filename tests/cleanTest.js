const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");
var should = require('chai').should()

async function example () {
    let driver = await new Builder().forBrowser("chrome").build();   
    await driver.get("https://lambdatest.github.io/sample-todo-app/");    
    await driver.findElement(By.id("sampletodotext")).sendKeys("Tarea Completada", Key.RETURN);
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value
    });

    todoText.should.equal("Tarea Completada");

    await driver.findElement(By.id("sampletodotext")).sendKeys("Segunda Tarea", Key.RETURN);
    todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText, "Segunda Tarea");

    
    await driver.quit();
    console.log("exitoso");
}
example();