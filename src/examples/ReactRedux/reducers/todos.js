export const todos = (state = [], action) => {             // todos reducer
  switch (action.type) {
    case 'ADD_TODO':
      return [                                      // do NOT mutate state
        ...state,
        { text: action.text, completed: false },
      ];
    case 'COMPLETE_TODO':
      return state.map((todo, index) =>             // do NOT mutate state
        index === action.index
          ? { ...todo, completed: true }
          : todo
      );
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
      index === action.index
        ? { ...todo, completed: !todo.completed }   // toggle
        : todo
    );
    default:
      return state;
  }
}