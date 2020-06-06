export const transactionListReducer = (state, action) => {
  if (action.type === "ADD_INCOME") {
    return [
      {
        value: action.transaction.value,
        desc: action.transaction.desc,
        tag: "income",
        createdAt: action.transaction.createdAt,
      },
      ...state,
    ];
  }

  if (action.type === "ADD_EXPENSE") {
    return [
      {
        value: action.transaction.value,
        desc: action.transaction.desc,
        tag: "expense",
        createdAt: action.transaction.createdAt,
      },
      ...state,
    ];
  }
};
