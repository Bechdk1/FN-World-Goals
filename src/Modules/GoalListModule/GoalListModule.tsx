import { goals, verdensLogo } from "../../data/goals";
import { GoalGrid } from "./GoalListModule.styled";
import { GoalCard } from "../../components/GoalCard/GoalCard";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import Divider from "../../assets/Images/Additional/Divider.svg";

export const GoalListModule = () => {
  return (
    <Container className="center">
      <h2>FNs 17 Verdensmål for bæredygtig udvikling</h2>
      <img src={Divider} alt="beautifulDivider" />
      <GoalGrid innerHTML="div">
        {goals.map((value, index) => {
          return (
            <Link to={`/goal/${value.id}`} key={index}>
              <GoalCard
                number={Number(value.id)}
                title={value.title}
                color={value.color}
                icon={value.icon}
              />
            </Link>
          );
        })}
        <img src={verdensLogo} alt="verdensmål-image" />;
      </GoalGrid>
    </Container>
  );
};
