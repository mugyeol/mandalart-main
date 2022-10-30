export const isSubCenter = (sectionId, index) => {
  return sectionId !== 4 && index === 4;
};
export const inputFilter = (sectionId, index) => {
  const filter = {
    isSubCenter: sectionId !== 4 && index === 4,
    isMainSub: sectionId === 4 && index !== 4,
    isMainCenter: sectionId === 4 && index === 4,
  };

  return filter;
};
export const sectionFilter = (goalList, sectionId, index) => {
  const filter = {
    isActive: goalList[sectionId].goal[index] === "" ? false : true,
  };

  return filter;
};
export const fillSubGoals = (goalList) => {
  const arr = [...goalList];
  const goalPlaceHolder = "";

  for (let index = 0; index < 9; index++) {
    for (let i = 0; i < 9; i++) {
      if (inputFilter(index, i).isSubCenter) {
        goalList[index].goals[i].title =
          index < 4 ? goalPlaceHolder + (index + 1) : goalPlaceHolder + index;
      }
      if (inputFilter(index, i).isMainSub) {
        goalList[index].goals[i].title =
          i < 4 ? goalPlaceHolder + (i + 1) : goalPlaceHolder + i;
      }
    }
  }

  return arr;
};
