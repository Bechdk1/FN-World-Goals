import { useEffect, useState } from "react";
import { apiFetch } from "../../data/API-Fetch/APIFetch";
import { endpoints } from "../../data/API-Fetch/Endpoints";
import type { ThemeProps } from "../../types/types";
import { Container } from "../../components/Container/Container";

export const ThemeGoalList = () => {
  const [apiResponse, setApiResponse] = useState<ThemeProps[]>([]);

  const getApiResponse = async () => {
    const data = await apiFetch<ThemeProps[]>(endpoints.themes);
    setApiResponse(data);
  };

  useEffect(() => {
    getApiResponse();
  }, []);

  return (
    <Container>
      {apiResponse.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </Container>
  );
};
