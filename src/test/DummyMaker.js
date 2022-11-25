
// function makeSections() {
//   // const arr = [{ id: "mcho@naver.com", mandal: [] }];
//   const mandal = [];
//   for (let index = 0; index < 9; index++) {
//     mandal.push({ goals: [] });
//   }
//   return mandal;
// }

function makeGoals() {
  const mandal = []
  for (let index = 0; index < 9; index++) {
    mandal.push({goals:[]})
    for (let i = 0; i < 9; i++) {
      mandal[index].goals.push({
        sectionId: "M" + (index + 1),
        goal_id: i,
        title: "" ,
        content: "",
        success: "N",
      });

    }
  }
  return mandal
}
export function getDummyData() {
  const mandal = makeGoals()
  return mandal
}
