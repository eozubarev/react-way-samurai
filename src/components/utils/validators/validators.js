export const required = value => {
    if (value) return undefined;
    return 'Field is required'
}

export const maxLenghtCreator = (maxLength) => value => {
    if (value.length > maxLength) return `Max Lenght is ${maxLength} symbols`;
    return undefined
}