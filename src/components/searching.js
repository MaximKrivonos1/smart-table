import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const ruleNames = ['skipEmptyTargetValues'];
    
    // Создаем customRules для поиска по нескольким полям
    const searchRule = rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false);
    const compare = createComparison(ruleNames, [searchRule]);
    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter(item => compare(item, state));
    }
}