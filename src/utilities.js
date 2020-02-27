import { forEach } from "lodash";

export function calcTotal(allMates, mates, emergency) {
  let total = 0;
  forEach(mates, (mate) => {
    if (allMates[mate]) {
      const user = allMates[mate];
      const mateAvailability = (user.h + user.d * 8) * user.efficiency / 100;
      total = total + mateAvailability
    }
  });
  return total*(100 - emergency) / 100;
}