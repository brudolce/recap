import * as M from '../utils/masks'

export const getEod = async (queryInfo, load = () => undefined, save = () => undefined) => {
    load(true)
    try {
        const SD = queryInfo.startDate.length === 10 && `&start_date=${M.dateFormat(queryInfo.startDate)}`
        const ED = queryInfo.endDate.length === 10 && `&end_date=${M.dateFormat(queryInfo.endDate)}`
        const SS = queryInfo.stockSymbol

        const res = await fetch(
            `https://www.quandl.com/api/v3/datasets/EOD/${SS}?api_key=${process.env.REACT_APP_APIKEY}${SD}${ED}`)

        if (res.ok) {
            const resBody = await res.json()
            save(resBody.dataset)
        } else {
            save({ error: true })
        }

    } catch (e) {
        save({ error: true, detail: e })
    }
    load(false)
}