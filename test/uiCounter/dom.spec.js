import { fireEvent, screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { createUICounter } from "../../src/uiCounter/counter";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  createUICounter(container);
});

afterEach(() => {
  document.body.innerHTML = "";
});

it("생성시 버튼과 초기값을 렌더링한다.", () => {
  const { getByText } = screen;
  expect(getByText("+")).toBeVisible();
  expect(screen.getByText("+")).toBeVisible();
  expect(screen.getByText("-")).toBeVisible();
});

it("+ 버튼 클릭시 1 증가한다.", () => {
  fireEvent.click(screen.getByText("+"));
  expect(screen.getByText("1")).toBeVisible();
});

it("- 버튼 클릭시 1 감소한다.", () => {
  fireEvent.click(screen.getByText("-"));
  expect(screen.getByText("-1")).toBeVisible();
});

it("Max값인 경우 + 버튼이 disabled 상태가 되며 클릭해도 증가하지 않는다.", () => {
  createUICounter(container, { initVal: 1, max: 1 });
  expect(screen.getByText("+").toBeDisabled());
});

it("Min값인 경우 - 버튼이 disabled 상태가 되며, 클릭해도 감소하지 않는다.", () => {
  createUICounter(container, { initVal: 1, min: 1 });
  expect(screen.getByText("-").toBeDisabled());
});
