document.addEventListener("DOMContentLoaded", function() {
    const checkInButton = document.getElementById("checkInButton");
    const coinsDisplay = document.getElementById("coins");
    const userIdDisplay = document.getElementById("userId");
    const referralLinkInput = document.getElementById("referralLink");
    const copyReferralLinkButton = document.getElementById("copyReferralLink");
    const settingsButton = document.getElementById("settingsButton");

    // Initialize coins and user data
    let coins = parseInt(localStorage.getItem("coins")) || 0;
    const dailyCoins = 20;
    const checkInInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    let lastCheckIn = parseInt(localStorage.getItem("lastCheckIn")) || 0;

    // Display initial values
    coinsDisplay.textContent = `Coins: ${coins}`;
    userIdDisplay.textContent = `Your ID: ${localStorage.getItem("userId") || "123456"}`;

    // Handle check-in button click
    if (Date.now() - lastCheckIn < checkInInterval) {
        checkInButton.disabled = true;
    }

    checkInButton.addEventListener("click", () => {
        const now = Date.now();
        if (now - lastCheckIn >= checkInInterval) {
            coins += dailyCoins;
            localStorage.setItem("coins", coins);
            localStorage.setItem("lastCheckIn", now);
            coinsDisplay.textContent = `Coins: ${coins}`;
            checkInButton.disabled = true;
            alert("You collected 20 coins!");
        } else {
            alert("You can only check in once every 24 hours.");
        }
    });

    // Handle copy referral link button click
    copyReferralLinkButton.addEventListener("click", () => {
        referralLinkInput.select();
        referralLinkInput.setSelectionRange(0, 99999); // For mobile devices
        document.execCommand("copy");
        alert("Referral link copied to clipboard!");
    });

    // Handle settings button click
    settingsButton.addEventListener("click", () => {
        alert("Profile settings are coming soon!");
    });
});
