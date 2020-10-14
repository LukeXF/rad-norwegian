# Red Apple Digital - Front End Developer Test

This project was completed in one night, with the recruiter phoning me at 5:30pm before I left for the evening informing me this must be completed and submitted the same day. There are more features I wished to add, but no advanced notice was given about this task. Full notes to the requirements are provided further down in this readme file. 

Demo available at https://rad-norwegian.netlify.app/

Lighthouse report scores: 

1. Performance 100%
2. Accessibility 100%
3. Best Practices 93% (icons from design need scaling up)
4. SEO 100%
5. PWA passes 100% for all three categories and is installable onto devices

Todo:

1. Move icons over to Font awesome to complete light house 100% support
2. Add further support for linking to Norwegian's website with URL params (added destination 3 character code to JSON mock API will fix this)
3. Add search modal when click white destination tile to search through mock API data dynamically (with sorting)
 
## Running the project

This project is built using Gatsby.js, a React-based open source framework for building websites.

- `yarn install`
- `yarn run develop`

## THE BRIEF
Build an interactive SPA for displaying dynamic content based on provided designs.

### Detailed brief:
This exercise is about testing your approach and wider understanding of web technologies, dealing with asset limitations, as well as demonstrating your technical abilities. The test consists of 2 parts – mark-up and styling of a template and the implementation of a JavaScript driven component within it.

An additional challenge is that only incomplete mockup images have been provided. You will need to demonstrate your expertise and experience in-order to build an accessible, standards based SPA in-line with what you understand about best practices.

How elaborate and creative the page elements are is totally up to you, however the page should fulfil the following criteria to be acceptable as an Minimum Viable Product.

### MVP Requirements:
- The site should be at least single A compliant against the WCAG 2.0 Accessibility guidelines.
    > - Branding colour changed to match the darker #d81939 colour that Norwegian uses on their website as the colour is the design it too bright ✅
- It needs to use valid HTML5 and either make use of a CSS preprocessor or styled components.
    > - Uses SCSS and SCSS modules ✅ 
- It should be device agnostic and work effectively across all breakpoints.
    > - Mobile up design testing on desktop, laptop, tablet and mobile devices utilising the internal CSS framework I built at my company ✅
- It has to work in all modern browsers and provide graceful fallbacks for IE11.
    > - Powered by Gatsby, which supports auto-prefixing ✅
- Build as a Single Page Application.
    > - Built using Gatsby which is an SPA. ✅
- Demonstrate usage of State management.
    > - State management is used in for incrementing the destination pagination cycle ✅
- Demonstrate sensible usage of React Hooks and advanced JavaScript methods.
    > - Optional chaining, useState are used throughout the project ✅
    > - GraphQL used with ImageSharp to dynamically load logo and background and compress accordingly ✅
    > - Lazy loading setup to occur on logo and background to support slow network speeds ✅
- Styled as accurately as possible.
    > - Desktop and mobile styling followed closely as possible in given timeframe ✅
- Demonstration of SEO and page performance best practises.
- Content pulled in via a (dummy) REST API endpoint.
    > - Destinations converted into JSON file and loaded through GraphQL ✅
    > - Option to convert this into a useEffect showing a fake get request if needed with set timeout
- Feel free to use a framework/starter that you normally use.

### Functional Specification:
- Destination tile:
    - On mouseover / tap the active state of the tile is displayed and the word ‘Destination’
should be replaced with the Destination name.
        > - mouseover of each tile has animated effect applied and destination name is replaced over the white tile ✅ (maybe need some further clarity)
- CTA Button:
    - On click / tap on the CTA button should refresh the content of the Destination tiles with
the next 6 destinations in the database.
        > - CTA buttons refreshed destination tiles and loops back round once all destinations have been displayed ✅
    - There should be a loading state for the CTA and the destination tiles (the request can be
delayed to demonstrate this).
        > - The request is delayed 600ms to demonstrate loading state on the button ✅
- Social share buttons:
    - On click / tap, the page meta content should be pulled into an appropriate sharer
function. This should include an image, title text and description text.
        > - Social sharing uses `react-share` to populate sharing for Twitter and Facebook with fallback support from site SEO ✅

We would like you to show off your skills as much as you can, so please feel free to add any behaviours/animations that you feel would benefit the page to make it a user-friendly and engaging piece.

Supplied:
- WebsiteCopy.txt for website content, so you can copy and paste the text.
- Mockups for desktop & mobile/tablet.
- Background images.
- Fonts.
- Norwegian Air Logo
- Footer icons.
- Icons for the buttons.

On completion:
1. Upload your codebase to your github account and share with us.
2. Alternatively send us the website in a zip file with instructions on how to run.
