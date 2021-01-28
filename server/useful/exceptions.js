class DBException {
  static errorEnum = Object.freeze({ QUERY_ERROR: 0, CONNECTION_ERROR: 1 });

  constructor(errorType, funcName) {
    this.errorType = errorType;
    this.funcName = funcName;

    this.message = `DBException error: ${
      Object.keys(DBException.errorEnum)[this.errorType]
    } in ${this.funcName} function`;
  }

  toString() {
    return this.message;
  }
}

class UserInfoException {
  constructor(value, reason) {
    this.value = value;
    this.reason = reason;
    this.message = `UserInfoException error: ${this.value} value is ${this.reason}!`;
  }
}

exports.DBException = DBException;
exports.UserInfoException = UserInfoException;
