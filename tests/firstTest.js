const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");

async function example () {
    let driver = await new Builder().forBrowser("chrome").build();

    await displayAlert(driver, "buscando pagina...");
   
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    
    await displayAlert(driver, "preparandose para agregar tarea completada a la lista...");
    
    await driver.findElement(By.id("sampletodotext")).sendKeys("Tarea Completada", Key.RETURN);
    
    await displayAlert(driver, "Agregado correctamente...");

    await displayAlert(driver, "preparandose para agregar segunda tarea a la lista...");

    await driver.findElement(By.id("sampletodotext")).sendKeys("Segunda Tarea", Key.RETURN);

    await displayAlert(driver, "Agregado correctamente...");

    await displayAlert(driver, "Cerrando navegador...");
    

    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){

        return value

    });

    assert.strictEqual(todoText, "Segundo Tarea");

    await driver.quit();

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayAlert(driver, message) {
    await driver.executeScript(`alert('${message}');`);
    await sleep(2000);
    
    await driver.switchTo().alert().accept(); // Dismiss the alert
}

example();