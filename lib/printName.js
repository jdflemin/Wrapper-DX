function printName({name}) {
    console.log('printName function runs ' + name);
}

module.exports = {
    handler : printName,
    builder: _ => _
        .default('name', 'Julian')
};