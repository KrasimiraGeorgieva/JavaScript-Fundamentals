function solve(strArr) {
    let components = new Map();

    for (let row of strArr) {
        let [systemName, componentName, subcomponentName] = row.split(' | ');
        // Verify systemName exists
        if (!components.has(systemName)) {
            components.set(systemName, new Map());
        }
        // Verify componentName exists
        if (!components.get(systemName).has(componentName)) {
            components.get(systemName).set(componentName, []);
        }
        components.get(systemName).get(componentName).push(subcomponentName);

    }

    let sortedComponents = [...components.entries()].sort(sortSystemName);

    //Output

    for (let [systemName, componentName] of sortedComponents) {
        console.log(`${systemName}`);

        let sortedSubcompNames = [...componentName.entries()].sort(sortSystemComponent);
        for (let [componentName, subComponents] of sortedSubcompNames) {
            console.log(`|||${componentName}`);
            subComponents.forEach(c => console.log(`||||||` + c));
        }
    }

    function sortSystemName(a, b) {
        let firstCriteria = b[1].size - a[1].size;
        if (firstCriteria !== 0) {
            return firstCriteria;
        } else {
            return a[0].localeCompare(b[0]);
        }
    }
    function sortSystemComponent(a, b) {
        return b[1].length - a[1].length;
    }

}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);