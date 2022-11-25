export const inputFilter = (sectionId, index) => {
  const filter = {
    isMidTermTwin: sectionId !== 4 && index === 4,
    isMidTerm: sectionId === 4 && index !== 4,
    isFinal: sectionId === 4 && index === 4,
  };

  return filter;
};
export const isShortTerm =
  !inputFilter.isMidTerm &&
  !inputFilter.isMidTermTwin &&
  !inputFilter.isFinal;
export const sectionFilter = (goalList, sectionId, index) => {
  const filter = {
    isActive: goalList[sectionId].goal[index] === "" ? false : true,
  };

  return filter;
};
export const fillSubGoals = (goalList) => {
  const arr = [...goalList];

  for (let index = 0; index < 9; index++) {
    for (let i = 0; i < 9; i++) {
      if (inputFilter(index, i).isMidTermTwin) {
        goalList[index].goals[i].title =
          index < 4 ? placeHolderTitle + (index + 1) : placeHolderTitle + index;
      }
      if (inputFilter(index, i).isMidTerm) {
        goalList[index].goals[i].title =
          i < 4 ? placeHolderTitle + (i + 1) : placeHolderTitle + i;
      }
    }
  }

  return arr;
};
export const placeHolderTitle = "GOAL";
