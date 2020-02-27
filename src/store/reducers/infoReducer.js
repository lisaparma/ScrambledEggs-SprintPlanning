import { forEach } from "lodash";

function calcTotal(mates, emergency) {
  let total = 0;
  forEach(mates, (mate) => {
    const mateAvailability = mate.h + mate.d * 8 * mate.efficiency / 100;
    total = total + mateAvailability
  });
  return total*(100 - emergency) / 100;
}

const infoReducer = (state = {}, action) => {

  switch (action.type) {

    default:
      return state
  }
};

export default infoReducer;