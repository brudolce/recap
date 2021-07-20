import { render } from "@testing-library/react";
import Top from "./index";
import { Provider } from "react-redux";
import store from "../../store";

describe("Top tests", () => {
  it("Top renders without craching", () => {
    const page = render(
      <Provider store={store}>
        <Top />
      </Provider>
    );
    expect(page).toMatchSnapshot();
  });
});
