'use strict';

let money,
    time;

money = prompt("Ваш Бюджет на месяц");
time = prompt("Введите дату в формате YYYY-MM-DD");



let appData = {
    budget: money, 
    times : time, 
    expenses:{}, 
    optionalExpenses: {}, 
    income: [], 
    saving : false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt("Во сколько обойдется?"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется?");

appData.expenses.a1 = appData.expenses.a2;
appData.expenses.a3 = appData.expenses.a4;

alert(appData.budget/30);