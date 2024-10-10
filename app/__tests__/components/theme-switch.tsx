import { render } from "@testing-library/react";
import ThemeSwitch from "@/app/(components)/ThemeSwitcher/ThemeSwitcher";

describe("ThemeSwitch", () => {
  it("should render ", () => {
    const { container } = render(<ThemeSwitch />);
    expect(container).toBeTruthy();
  });
});
