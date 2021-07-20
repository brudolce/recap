//Types
export const Types = {
    SETSTOCKSYMBOL: '@setStockSymbol',
    SETSTARTDATE: '@setStartDate',
    SETENDDATE: '@setEndDate',
    SETDATA: '@setData'
}

//Reducer
const INITIAL_STATE = {
    queryInfo: {
        stockSymbol: '',
        startDate: '',
        endDate: ''
    },
    data: {}
};

export default function reducer(
    state = INITIAL_STATE,
    { type, payload }
) {
    switch (type) {
        case Types.SETSTOCKSYMBOL:
            return { ...state, queryInfo: { ...state.queryInfo, stockSymbol: payload } };
        case Types.SETSTARTDATE:
            return { ...state, queryInfo: { ...state.queryInfo, startDate: payload } };
        case Types.SETENDDATE:
            return { ...state, queryInfo: { ...state.queryInfo, endDate: payload } };
        case Types.SETDATA:
            return { ...state, data: payload }
        default:
            return state;
    }
};

//Actions
export const setStockSymbol = (payload) => ({ type: Types.SETSTOCKSYMBOL, payload: payload })

export const setStartDate = (payload) => ({ type: Types.SETSTARTDATE, payload: payload })

export const setEndDate = (payload) => ({ type: Types.SETENDDATE, payload: payload })

export const setData = (payload) => ({ type: Types.SETDATA, payload: payload })

