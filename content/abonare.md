---
title: Abonare
layout: "abonare"
type: page
markup: "html"
---

<div class="rounded-2xl">
    <div class="mx-auto max-w-[1330px] ">
        <div class="max-w-screen-xl px-4 py-8 mx-auto flex items-center justify-center">
            <div class="border border-slate-200 p-24 rounded-md bg-white shadow-md ">
                <h3>Primește ultimele postări direct pe email</h3>
                <form id="newsletterRssFeedPulse" method="get" class="flex mt-10 gap-4">
                    <input name="email" autocomplete="email" type="email" placeholder="adresa email" class="p-2 text-gray-700 w-full border border-slate-200" required>
                    <button class="button button--pink">
                        Abonează-te
                    </button>
                </form>
                <!-- Add a placeholder for the error message -->
                <p id="error-message" style="color:red; display:none;"></p>
            </div>
        </div>
    </div>
</div>

<script>
document.getElementById('newsletterRssFeedPulse').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var email = document.querySelector('input[name="email"]').value;
    var actionUrl = 'https://rssfeedpulse.com/api/campaign/1f877d59-5863-4707-9182-e83eec41a428/subscribe'; // Direct URL
    var errorMessage = document.getElementById('error-message'); // Get the error message element

    // Clear any previous error messages
    errorMessage.style.display = 'none';
    errorMessage.innerText = '';

    // Send the email via fetch
    fetch(`${actionUrl}?email=${encodeURIComponent(email)}`, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Redirect the user directly to your desired URL after a successful API call
        window.location.href = 'https://antimaterie.ro';
    })
    .catch(error => {
        console.error('Error:', error);

        // Display the error message to the user
        errorMessage.style.display = 'block';
        errorMessage.innerText = 'A apărut o eroare la trimiterea formularului. Vă rugăm să încercați din nou.';
    });
});
</script>
