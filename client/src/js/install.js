const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    console.log("event" + event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Update UI notify the user they can install the PWA
    butInstall.hidden = false;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Show the install prompt
     const promptEvent = window.deferredPrompt;
    // console.log(promptEvent)
    if (!promptEvent) {
        return;
    }

    // Show prompt
    promptEvent.prompt();
    // We've used the prompt, and can't use it again, throw it away
    window.deferredPrompt = null;
    // Hide the app provided install promotion
    butInstall.hidden = true;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Log install to analytics
    console.log('INSTALL: Success');
    window.deferredPrompt = null;
});
