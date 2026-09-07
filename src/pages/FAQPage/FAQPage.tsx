import { Container } from "../../components/Container/Container";
import { SectionWrapper } from "../../ContentWrappers/SectionWrapper";
import { Loader } from "../../components/Loader/Loader";
import { useFetch } from "../../Hooks/useFetch";
import type { FAQResponseProps } from "../../types/types";
import { endpoints } from "../../data/API-Fetch/Endpoints";
import React from "react";

export const FAQPage = () => {
  const { data, isLoading, error } = useFetch<FAQResponseProps>(endpoints.faq);

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
    <SectionWrapper pagetitle="FAQ">
      <Container innerHTML="article">
        {data?.map((item) => (
          <React.Fragment>
            <h2 key={item.id}>{item.title}</h2>
            <p key={item.id}>{item.context}</p>
          </React.Fragment>
        ))}
      </Container>
    </SectionWrapper>
  );
};
