module.exports = class Api {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludeFields = ["page", "sort", "limit", "field"];
    excludeFields.forEach((el) => delete queryObj[el]);
    this.query.find(queryObj).select("-__v");
    return this;
  }
  sort(name) {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort(name);
    }
    return this;
  }
};
