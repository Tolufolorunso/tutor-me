class Api {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }


    filter() {
        const queryObj = {...this.queryString};
        const excludeFields = ['page', 'sort', 'limit', 'field'];
        excludeFields.forEach(el = > delete queryObj[el]);
    }
}

