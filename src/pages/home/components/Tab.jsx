function Tab(props) {
  if (props.selectedCategory === props.category._id) {
    return (
      <button
        className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-105 active:scale-95"
        onClick={() => props.onClick(props.category._id)}
      >
        {props.category.name}
      </button>
    );
  }

  return (
    <button
      className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-white border-2 border-blue-100 text-blue-700 hover:bg-blue-50 hover:border-blue-300 shadow-lg shadow-blue-100 transition-all duration-300 hover:scale-105 active:scale-95"
      onClick={() => props.onClick(props.category._id)}
    >
      {props.category.name}
    </button>
  );
}

export default Tab;