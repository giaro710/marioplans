const initState = {
  projects: [
    { id: "1", title: "Carrots make me fly", content: "I fly" },
    { id: "2", title: "When I smoke flowers", content: "I shoot fireballs" },
    { id: "3", title: "Brotherhood", content: "Luigi sucks" },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
