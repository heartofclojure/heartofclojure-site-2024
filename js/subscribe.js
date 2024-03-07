const GAIWAN_NEWSLETTER_ID = '657441d6e088a400e8dd5618';
const HOC_NEWSLETTER_ID = '65d5fdad1fcf58005e768553';

async function subscribe(e) {
    e.preventDefault();

    const form = $(e.target);
    const button = form.find('input[type="submit"]');
    const email = form.find('input[name="email"]');
    const updates = form.find('input[name="updates"]');

    button.prop({'disabled': true, 'value': 'Subscribing...'});

    const body = {
        email: email.val(),
        emailType: "signup",
        requestSrc: "portal",
        referrer: "https://gaiwan.co/",
        newsletters: [{id: HOC_NEWSLETTER_ID}],
    };

    if (updates.prop('checked') === true) {
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
        form.hide('1s');
        form.siblings('.success').fadeIn("1s");
    }).catch(e => {
        console.error(e);
        form.hide('1s');
        form.siblings('.error').fadeIn("1s");
    });
}
