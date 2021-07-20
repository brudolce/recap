//Drawdown
//https://roadtolarissa.com/drawdown/
export const maxDrawdown = (data) => {

    const prices = data.map(e => e[11])

    let peak = 0;
    let n = prices.length
    let maxDrawdown = 0
    let bottom = 0
    let dif
    for (let i = 1; i < n; i++) {
        dif = prices[peak] - prices[i];
        peak = dif < 0 ? i : peak;
        if (maxDrawdown < dif) {
            maxDrawdown = dif
            bottom = i
        }
        // maxDrawdown = maxDrawdown > dif ? maxDrawdown : dif;
    }
    // console.log('\nmaxDrawdown', maxDrawdown, '\npeak', prices[peak], '\nbottom', prices[bottom], '\ncheck', prices[peak] - prices[bottom])
    return (prices[peak] - prices[bottom]) / prices[peak]

}


//simple return - ROI
export const ROI = (initialPrice, finalPrice) => {
    return (finalPrice - initialPrice) / initialPrice
}