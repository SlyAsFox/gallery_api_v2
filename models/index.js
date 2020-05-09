const models = {
    Artist: require('./Artist'),
    Courier: require('./Courier'),
    Customer: require('./Customer'),
    Delivery: require('./Delivery'),
    Order: require('./Order'),
    OrderedItem: require('./OrderedItem'),
    Payment: require('./Payment'),
    Picture: require('./Picture'),
    Waybill: require('./Waybill'),
};

const modelNames = Object.keys(models);

modelNames.forEach( (modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

module.exports = models;
