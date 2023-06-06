import axios from "axios";
import { renderHook } from "@testing-library/react";
import useFetch from "../../hooks/useFetch";

jest.mock("axios");

test("should use counter", () => {
  const { data, error, isLoading } = renderHook(() =>
    useFetch("https://geocoding-api.open-meteo.com")
  );

  axios.get.mockImplementation(() =>
    Promise.resolve({ data: { name: "korea" } })
  );

  expect(error).toBe(null);
  //expect(typeof result.current.increment).toBe('function')
});
