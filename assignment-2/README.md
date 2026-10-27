# Assignment 2 - Crumble E-commerce Site (Static, Responsive Pages)

Course: CSC336 Web Technologies

## Reference Site

- **Name:** Crumble
- **URL:** https://crumblelocal.com/
- **Screenshot of the reference home page:**

![Crumble reference home page](images/reference-site.png)

## What I Built

- `index.html` - Home page with a header (logo, delivery info, cart button, sign in button), a blue category navbar, a banner, a search box, and product cards grouped into sections (Monthly Drop, Crumble Cold, Cookies, Ice Cream Shakes), followed by a footer.
- `product.html` - Product page for the **Snickers Crunch** cookie with a breadcrumb, a larger image, name, price, description, a quantity selector and an "Add To Cart" button, followed by the same footer as the home page.
- `css/style.css` - My own CSS (the blue color used for the category navbar).

No JavaScript was written for this assignment. The cart, the "Add To Cart" buttons, the search box and the sign in button do not work yet.

## Tools Used

- HTML and CSS
- **Bootstrap 5.3.3** (loaded from a CDN link), used for:
  - the grid (`row`, `col-12 col-md-6 col-lg-3`) that lays out the product cards and the product page
  - the navbar (it collapses into a menu button on small screens)
  - cards, buttons, badges, the breadcrumb and the quantity input
  - Flexbox helper classes (`d-flex`, `justify-content-between`, `gap-2`, ...) for the header
- Bootstrap's own script is included only so the navbar menu button can open and close. I did not write any JavaScript.

## Responsive Behavior

| Screen width | What changes |
|---|---|
| Phone (about 375px) | One product card per row, the navbar links collapse into a menu button, and on the product page the image sits above the details |
| Tablet (about 768px) | Two product cards per row, the navbar links appear in a row, and the product page shows the image and details side by side |
| Desktop (992px and above) | Four product cards per row |

Screenshots of all three widths are in the completion PDF.

## Differences From the Original Site

- I left out the Crumble Pot category.
- The Crumble Cold section shows four drinks of my own choosing (Happy Camper, Sunshine Sipper, EZ Breezy, Lime & Dandy) instead of the original drinks.
- Some descriptions and prices are placeholders.

## Folder Structure

```
assignment-2/
├── index.html
├── product.html
├── README.md
├── completion.pdf
├── css/
│   └── style.css
└── images/
```

## How to View

Open `index.html` in a browser. Click the "Snickers Crunch" title on the home page to open the product page.
