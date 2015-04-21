module.exports = function objectExtend(obj) {
    for (var i in obj)
        if (obj.hasOwnProperty(i)) this[i] = obj[i];
    return this;
};

