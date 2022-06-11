// array of objects containing accordian content
let programme = [
  {
    heading:
      "<h2>Monday 11th to Sunday 17th<h2><h3>Performance, exhibition, graffiti workshops</h3><p>Una Lee, Anne-F Jaques, Yonago Tadashi, Muku Kobayashi & Bunchi</p>",
    content: [
      {
        title:
          "OPENING LIVE PERFORMANCE : Sunday 10th July, FERVĒRE (2022) by Una Lee",
        description: "",
      },
      {
        title: "Exhibition : waste ethos – recycle, regenerate, repurpose",
        description: "",
      },
      {
        title: "Thurs 13th & Fri 14th July: FREE Graffiti Workshops",
        description: "",
      },
    ],
    link: "",
    open: false,
  },
  {
    heading:
      "<h2>Friday 15th</h2><h3>Film screening and performances</h3><p>Bohman Brothers : By Biro And Umbrella Spring (2019), The Bohman Brothers, Arthur Chambry, Elaine Mitchener + Audrey Chen + Mariam Rezaei</p>",
    content: [
      {
        title:
          "Film Screening 17:00 - 18:00: Bohman Brothers : By Biro And Umbrella Spring (2016 ‧ Documentary ‧ 1h ‧ Tyler Hubby, Cathy Soreny)",
        description: "",
      },
      {
        title: "19:00 - 19:45 Arthur Chambry",
        description: "",
      },
      {
        title: "20:00 - 20:45 Bohman Brothers",
        description: "",
      },
      {
        title: "21:00 - 21:45 Elaine Mitchener + Audrey Chen + Mariam Rezaei",
        description: "",
      },
    ],
    link: "",
    open: false,
  },
  {
    heading:
      "<h2>Saturday 16th</h2><h3>Film screening and performances</h3><p>Sonita (2015), The Heads and the Golds, Ji Youn Kang, Mazen Kerbaj</p>",
    content: [
      {
        title:
          "Film Screening 17:00 - 18:30: Sonita (2015 ‧ PG ‧ 1h 30m ‧ Rokhsareh Ghaemmaghami)",
        description: "",
      },
      {
        title: "19:00 - 19:45 The Heads and The Golds",
        description: "",
      },
      {
        title: "20:00 - 20:45 Ji Youn Kang",
        description: "",
      },
      {
        title: "21:00 - 21:45 Mazen Kerbaj",
        description: "",
      },
    ],
    link: "",
    open: false,
  },
  {
    heading:
      "<h2>Sunday 17th<h2><h3>Film screening and performances</h3><p>Tony Conrad : completely in the present (2016), NeAnoNeNoNo (Jorge Boehringer + Lucy Cheesman + Stephen Chase + Theo Gowans), Leafcutter John, Lau Nau<p>",
    content: [
      {
        title:
          "Film Screening 17:00 - 18:30: Tony Conrad : completely in the present (2016 ‧ Documentary ‧ 1h 36m ‧ Tyler Hubby)",
        image: "",
        description: "",
        bios: "",
      },
      {
        title:
          "19:00 - 19:45 NeAnoNeNoNo (Jorge Boehringer + Lucy Cheesman + Stephen Chase + Theo Gowans)",
        image: "",
        description: "",
        bios: "",
      },
      {
        title: "20:00 - 20:45 Leafcutter John",
        image: "",
        description: "",
        bios: "",
      },
      {
        title: "21:00 - 21:45 Lau Nau",
        image: "",
        description: "",
        bios: "",
      },
    ],
    link: "",
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

  // Get heading content
  const item_heading_element = document.createElement("div"); // for question in faq in faqs create a div
  item_heading_element.classList.add("heading"); // give those divs a class of 'heading'
  item_heading_element.innerHTML = item.heading; // set the contents of those divs to the heading values

  item_element.appendChild(item_heading_element);

  // map for content elements
  item.content.map(function (event) {
    const item_content_element = document.createElement("div");
    item_content_element.classList.add("content");
    item_content_element.innerHTML = event.title;

    item_element.appendChild(item_content_element);
  });

  programme_element.appendChild(item_element);
});
