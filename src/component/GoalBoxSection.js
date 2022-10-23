import GoalBoxInput from "./GoalBoxInput";
import styled, {css} from "styled-components";
import { sectionFilter } from "../util/util";

const Section = styled.div`

  /* border: 3px solid blue; */
  /* margin: 3px; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ main, centerInput }) => (main ? -1 : centerInput ? -1 : 10)};
  background: var(--background);
  opacity: ${({ main }) => (main ? css`1` : css`0.7`)};`;

//receive sectionId ()
const GoalBoxSection = (props) => {


  const addGoalHandler = (goalTitle, sectionId, goalIndex) => {
    props.onAddGoal(goalTitle,sectionId, goalIndex)
  };

  return (
    <Section >
      {props.list.map((goalItem, index) => (
        <GoalBoxInput
          key={goalItem.id}
          goalIndex={index}
          sectionId = {props.sectionId}
          goal={goalItem}
          onAddGoal={addGoalHandler}
        />
      ))}
    </Section>
  );
};
export default GoalBoxSection;
