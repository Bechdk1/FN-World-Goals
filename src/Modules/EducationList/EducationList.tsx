import type { EducationPropsResponse } from "../../types/types";
import { Loader } from "../../components/Loader/Loader";
import { endpoints } from "../../data/API-Fetch/Endpoints";
import { useFetch } from "../../Hooks/useFetch";
import { EducationCard } from "../../components/EducationCard/EducationCard";
import { EducationListStyled } from "./EducationList.Styled";

export const EducationListModule = () => {
  const { data, isLoading, error } = useFetch<EducationPropsResponse>(
    endpoints.education,
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
    )
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <EducationListStyled>
        {data?.map((item) => (
          <EducationCard
            key={item.id}
            id={item.id}
            name={item.name}
            color={item.color}
          />
        ))}
      </EducationListStyled>
    </>
  );
};
