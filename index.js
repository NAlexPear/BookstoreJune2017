import {Header, Nav, Main, Footer} from "./components";

const state = {
  heading: "Sorry, I'm Booked.",
  links: ["books", "albums"],
  books: [
    {
      id: 1,
      name: "Lasagna: A Retrospective",
      author: "Garfield",
      pictureUrl:
        "http://graphics8.nytimes.com/images/2015/10/15/   dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
      price: 24,
      sellingPoints: [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
      ]
    }
  ]
};

function render(state){
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(state)}
  ${Main(state)}
  ${Footer(state)}
  `;
}

render(state);
