import GoalBoxInput from "./GoalBoxInput";
import styled from "styled-components";

const Section = styled.div`
 display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 6rem 6rem 6rem;
  grid-template-rows: 6rem 6rem 6rem;
  gap: 0.1rem 0.1rem;

`;

//receive sectionId ()
const GoalBoxSection = (props) => {
  const addGoalHandler = (goalTitle, sectionIndex, goalIndex) => {
    props.onAddGoal(goalTitle, sectionIndex, goalIndex);
  };

  return (
    <Section>
      {props.goals.map((goalItem, index) => (
        <GoalBoxInput
          key={index}
          goalIndex={index}
          sectionIndex={props.sectionIndex}
          goal={goalItem}
          onAddGoal={addGoalHandler}
          // placeholder = {props.placeholder[index].title}
        />
      ))}
    </Section>
  );
};
export default GoalBoxSection;
