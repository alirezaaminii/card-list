export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const isArray = (a) => {
    return (!!a) && (a.constructor === Array);
};

export const isObject = (a) =>  {
    return (!!a) && (a.constructor === Object);
};