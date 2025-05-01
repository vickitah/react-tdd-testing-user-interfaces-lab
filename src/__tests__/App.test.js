import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";


test("displays a top-level heading with the text `Hi, I'm Victor`", () => {
    render(<App />);
    const heading = screen.getByRole("heading", {
      name: /hi, i'm victor/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
  
  test("displays an image with correct alt text", () => {
    render(<App />);
    const image = screen.getByAltText(/photo of victor/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });
  
  test("displays a second-level heading with text `About Me`", () => {
    render(<App />);
    const aboutHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
    expect(aboutHeading).toBeInTheDocument();
  });
  
  test("displays a paragraph with a biography", () => {
    render(<App />);
    const bio = screen.getByText(/i'm a web developer/i);
    expect(bio).toBeInTheDocument();
  });
  
  test("displays a GitHub link", () => {
    render(<App />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
  });
  
  test("displays a LinkedIn link", () => {
    render(<App />);
    const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
  });
