export const dateMask = (val) => val
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{2})(\d)/, '$1.$2')

export const stringMask = (val) => val.toUpperCase()

export const dateFormat = (val = []) => val.split('.').reverse().join('-')

export const percentageString = (val) => parseFloat(val * 100).toFixed(2) + "%"
