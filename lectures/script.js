const lectures = [
    {
        week: 1,
        programming_title: "Intro & HTML",
        design_title: undefined,
        programming_slides: "https://docs.google.com/presentation/d/1HzDKFIQboD0RoLF9t5uEFinzznFOXSX6ml4DgT2UeLw/edit?usp=sharing",
        design_slides: undefined,
        youtube: "https://www.youtube.com/watch?v=_mBrTxu_-BI",
    }, {
        week: 2,
        programming_title: "CSS Selectors, Pseudo Selectors",
        design_title: "Intro to Design, Visual Hierarchy, Through Spacing",
        programming_slides: "https://docs.google.com/presentation/d/1UuAWeN9cw6seOHKpfmmdLLqidij0Uc4s6tpum9kopSU/edit#slide=id.g604587fed6_1_0",
        design_slides: "https://docs.google.com/presentation/d/1qi7nHizEk1IJL2AgQEf9qP1jleWk16W0cbYE5SsHlGE/edit",
        youtube: "https://www.youtube.com/watch?v=_x5blyO4b2c",
    }, {
        week: 3,
        programming_title: "Box Model and Spacing",
        design_title: "Typography",
        programming_slides: "https://docs.google.com/presentation/d/1IzRDV8AKZjgaxoNqlYKWVDetI7F0eCM5KxLpGc2tbxQ/edit?usp=sharing",
        design_slides: "https://docs.google.com/presentation/d/1iWcC5dw68IBLLAjBDThG2L1b9ATecdUJ4A477LUOSGo/edit?usp=sharing",
        youtube: "https://www.youtube.com/watch?v=oWPuZUrkovk",
    }, {
        week: 4,
        programming_title: "CSS Positioning and Centering",
        design_title: "Color Theory",
        programming_slides: "https://docs.google.com/presentation/d/15wUeN5ZqkM2vA5F4uhMLufOSvUNowm0fZP2znWLX_wY/edit?usp=sharing",
        design_slides: "https://docs.google.com/presentation/d/1-Xl2jQ7S5YydU9cHupxwqhAeeSIEAFGCH77Q2WkTuSs/edit?usp=sharing",
        youtube:"https://youtu.be/5vCGYtIDyZM",
    }, {
        week: 5,
        programming_title: "Flexbox and Layouts",
        design_title: "Images and Layouts",
        programming_slides: "https://docs.google.com/presentation/d/1bNQ7w6wOBTV8iS6D6lPOxX1aqTSmuM1Gp9yf858vizo/edit?usp=sharing",
        design_slides: "https://docs.google.com/presentation/d/1PiFaiBA8xwSrGZAjjTi5DvOKozYJy6fBnNL-iDY3q48/edit?usp=sharing",
        youtube:"",
    }
]

const template = document.getElementById('lecture-template');

lectures.map((lecture) => {
    const clone = template.content.cloneNode(true);
    const week = clone.querySelector('#lecture-week');
    const title = clone.querySelector('#lecture-title');
    const youtube_link = clone.querySelector('#lecture-youtube-link');
    const programming_slides_link = clone.querySelector('#programming-slides-link');
    const design_slides_link = clone.querySelector('#design-slides-link');

    week.textContent = lecture.week;

    if (lecture.programming_title && lecture.design_title) {
        title.textContent = lecture.programming_title + ", " + lecture.design_title;
    } else {
        title.textContent = lecture.programming_title ? lecture.programming_title : lecture.design_title;
    }


    if (lecture.youtube) {
        youtube_link.href = lecture.youtube_link;
    } else {
        const youtube = clone.querySelector("#lecture-youtube");
        youtube.removeChild(youtube_link);
        youtube.textContent = "Recording not available";
    }

    if (lecture.programming_slides) {
        programming_slides_link.href = lecture.programming_slides;
    } else {
        const programming_slides = clone.querySelector("#programming-slides");
        programming_slides.removeChild(programming_slides_link);
        programming_slides.textContent = "Slides not available";
    }

    if (lecture.design_slides) {
        design_slides_link.href = lecture.design_slides;
    } else {
        const design_slides = clone.querySelector("#design-slides");
        design_slides.removeChild(design_slides_link);
        design_slides.textContent = "Slides not available";
    }

    document.getElementById('weeks').appendChild(clone);
})