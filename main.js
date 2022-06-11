// array of objects containing accordian content
let programme = [
  {
    date: "Monday 11th to Sunday 17th",
    subheading: "Performance, exhibition, graffiti workshops, SkillShare",
    names: "Una Lee, Anne-F Jaques, Yonago Tadashi, Muku Kobayashi & Bunchi",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat, aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a voluptatibus fugiat fuga facere!",
    open: false,
  },
  {
    date: "Friday 15th",
    subheading: "Film screening and performances",
    names:
      "Bohman Brothers : By Biro And Umbrella Spring (2019), The Bohman Brothers, Arthur Chambry, Elaine Mitchener + Audrey Chen + Mariam Rezaei",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat, aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a voluptatibus fugiat fuga facere!",
    open: false,
  },
  {
    date: "Saturday 16th",
    subheading: "Film screening and performances",
    names: "Sonita (2015), The Heads and the Golds, Ji Youn Kang, Mazen Kerbaj",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat, aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a voluptatibus fugiat fuga facere!",
    open: false,
  },
  {
    date: "Sunday 17th",
    subheading: "Film screening and performances",
    names:
      "            Tony Conrad : completely in the present (2016), NeAnoNeNoNo (Jorge Boehringer + Lucy Cheesman + Stephen Chase + Theo Gowans), Leafcutter John, Lau Nau",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat, aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a voluptatibus fugiat fuga facere!",
    open: false,
  },
];

// select 'faqs' div from index.html
const programme_element = document.querySelector(".programme");

programme.map(function (item) {
  // map through faqs array
  const item_element = document.createElement("div"); // for each object in programme create a div
  item_element.classList.add("item"); // give those divs a class of 'item'
  if (item.open) {
    item_element.classList.add("open"); // if open == true add on a class of 'open'
  }

  // toggle value of 'open' on click
  // toggle 'open' class on click
  item_element.addEventListener("click", function (e) {
    item.open = true;
    this.classList.toggle("open");
  });

  // All heading elements
  const item_heading_element = document.createElement("div"); // for question in faq in faqs create a div
  item_heading_element.classList.add("heading"); // give those divs a class of 'heading'
  item_heading_element.innerHTML =
    "<h2>" +
    item.date +
    "</h2>" +
    "<h3>" +
    item.subheading +
    "</h3>" +
    "<p>" +
    item.names +
    "</p>"; // set the contents of those divs to the heading values

  // append together in a hierarchical structure
  item_element.appendChild(item_heading_element);

  const item_content_element = document.createElement("div");
  item_content_element.classList.add("content");
  item_content_element.innerText = item.content;

  item_element.appendChild(item_content_element);

  programme_element.appendChild(item_element);
});
