import React from "react";

export function makeSections() {
    const arr = [{ id: "mcho@naver.com", mandal: [] }];
    for (let index = 0; index < 9; index++) {
      arr[0].mandal.push({goals: [] });
    }
    return arr;
  }

export function makeGoals() {
    const arr = [];

    for (let index = 0; index < arr[0].mandal.length; index++) {
      for (let i = 0; i < 9; i++) {
        arr[0].mandal[index].goals.push({
          sectionId:"M"+(index+1),
          goal_id: i,
          title: "t" + i,
          content: "content" + i,
          success: "N"
        });
      }
    }
  }

