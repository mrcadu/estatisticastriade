import chrome from "selenium-webdriver/chrome";

import {Builder, By, until} from "selenium-webdriver";

import Tarefa from "../classes/Tarefa";

export default async function ler_tarefas() {
    const cookie_key = "YsJqCEibuDshOXm6xyLhvF/cMEc=?pCHK=Uyc5MjAyMGFlZGE0ODMwY2Q0OWFhMTM3ZTgwMTRkZGVmNCcKcDAKLg==&user_id=TDc2MDc1MDFMCi4=";
    let cookie_autenticacao = {
        name: "todoistd",
        value: cookie_key,
        path: '/',
        domain: 'todoist.com',
        secure: true,
        httpOnly: true
    };
    const options = new chrome.Options();
    options.addArguments("headless");
    let lista_tarefas = [];
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    const url_agenda = "https://todoist.com/";

    try {
        await driver.get(url_agenda);
        await driver.manage().addCookie(cookie_autenticacao);
        await driver.get(url_agenda);
        await driver.wait(until.elementLocated(By.id('agenda_view')), 10000);
        await driver.findElements(By.className("not_shared menu_clickable"))
            .then(function (elements) {
                elements.forEach(function (element) {
                    element.getText()
                        .then(function (text) {
                            let propriedadesTarefa = text.split("\n");
                            let tarefa = new Tarefa(propriedadesTarefa);
                            lista_tarefas.push(tarefa.data);
                        });
                })
            });
        await driver.wait(until.titleIs('Todoist'), 1000);
    } finally {
        await driver.quit();
    }
    return lista_tarefas;
}
