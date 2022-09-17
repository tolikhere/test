"use strict";

const money = prompt('Ваш бюджет на месяц?', '');
const time = prompt('Введите дату в формате YYYY-MM-DD', '');

const appData = {
    budget: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

const item1 = prompt('Введите обязательную статью расходов в этом месяце', '');
const cost1 = prompt('Во сколько обойдется?');
const item2 = prompt('Введите обязательную статью расходов в этом месяце', '');
const cost2 = prompt('Во сколько обойдется?');

appData.expenses[item1] = cost1;
appData.expenses[item2] = cost2;
alert(+appData.budget / 30);
