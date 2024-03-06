const GAIWAN_NEWSLETTER_ID = '657441d6e088a400e8dd5618';
const HOC_NEWSLETTER_ID = '65d5fdad1fcf58005e768553';

async function subscribe(e) {
    e.preventDefault();

    const email = e.target.querySelector('input[name="email"]').value;
    const updates = e.target.querySelector('input[name="updates"]').checked;

    const body = {
        email: email,
        emailType: "signup",
        requestSrc: "portal",
        referrer: "https://gaiwan.co/",
        newsletters: [{id: HOC_NEWSLETTER_ID}],
    };

    if (updates === true) {
        body.newsletters.push({id: GAIWAN_NEWSLETTER_ID});
    }

    fetch("https://gaiwan.co/members/api/send-magic-link/", {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        method: "POST",
        mode: "cors"
    }).then(response => {
        $(e.target).hide();
        $(e.target.nextElementSibling).fadeIn("slow");
    }).catch(e => {
        // TODO: handle errors
        console.error(e);
    });
}
