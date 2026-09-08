import { Link } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { GoalCard } from "../../components/GoalCard/GoalCard";
import { Loader } from "../../components/Loader/Loader";
import { endpoints } from "../../data/API-Fetch/Endpoints";
import { useFetch } from "../../Hooks/useFetch";
import type { GoalListResponse } from "../../types/types";
import { GoalListStyled } from "./GoalListModule.styled";
import verdensLogo from "../../assets/Images/Additional/Verdensmål.png";
import Divider from "../../assets/Images/Additional/Divider.svg";

export const GoalListModule = () => {
  const { data, isLoading, error } = useFetch<GoalListResponse>(
    endpoints.goals,
  );

  if (isLoading) {
    return (
      <Loader
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    );
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Container className="center">
        <h2>FNs 17 Verdensmål for bæredygtig udvikling</h2>
        <img src={Divider} alt="beautifulDivider" />
        <GoalListStyled>
          {data?.map((item) => (
            <Link key={item.id} to={`/goals/${item.id}`}>
              <GoalCard
                id={item.id}
                title={item.title}
                color={item.color}
                icon={item.icon}
              />
            </Link>
          ))}
          <img src={verdensLogo} alt="verdensmål-image" />;
        </GoalListStyled>
      </Container>
    </>
  );
};
